import React, { useEffect, useState } from 'react';
import { toBigInt } from 'ethers';
import Sidebar from './sidebar';

export default function Policy_news({ contract, userAddress, admin }) {
  const [policies, setPolicies] = useState([]);
  const [activePolicy, setActivePolicy] = useState(null);

  useEffect(() => {
    const fetchPolicies = async () => {
      if (!admin) {
        console.error("Contract is not initialized");
        return;
      }

      try {
        const policyCount = await admin.nextPolicyId(); // BigInt
        const policyArray = [];

        // Loop through policies, converting indices to BigInt
        for (let i = 1; i < Number(policyCount); i++) {
          const policy = await admin.policies(toBigInt(i)); // Ensure correct conversion
          policyArray.push({ id: i, title: policy.title, description: policy.description });
        }

        setPolicies(policyArray); // Update state with fetched policies
      } catch (error) {
        console.error('Error fetching policies:', error);
      }
    };

    fetchPolicies();
  }, [admin]);

  const handlePolicyClick = (id) => {
    setActivePolicy(activePolicy === id ? null : id);
  };

  return (
    <div className="bg-white flex flex-col items-stretch min-h-screen">
      <div className="w-full max-w-full">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
          <Sidebar contract={contract} userAddress={userAddress} />
          <div className="flex-1 p-6">
            <form className="max-w-[600px] w-full mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-6">NEWS LETTER AND POLICY</h2>

              <div className="flex flex-col space-y-4">
                {policies.length === 0 ? (
                  <p className="text-gray-500 text-center">No policies found.</p>
                ) : (
                  policies.map((policy) => (
                    <div key={policy.id} className="border-b border-gray-300 pb-2">
                      <button
                        type="button"
                        className="w-full text-left text-xl font-semibold text-[#197902] focus:outline-none"
                        onClick={() => handlePolicyClick(policy.id)}
                      >
                        {policy.title}
                      </button>
                      {activePolicy === policy.id && (
                        <p className="mt-2 text-gray-700 break-words">{policy.description}</p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
