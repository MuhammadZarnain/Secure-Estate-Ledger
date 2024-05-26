import { toBigInt } from 'ethers';
import React, { useEffect,useState } from 'react'
import AdminSidebar from './adminSidebar'

export const UpdatePolicy = ({contract}) => {
  const [policies, setPolicies] = useState([]);
  const [newPolicy, setNewPolicy] = useState({ title: '', description: '' });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchPolicies = async () => {
      if (!contract) {
        console.error("Contract is not initialized");
        return;
      }
  
      try {
        const policyCount = await contract.nextPolicyId(); // BigInt
        const policyArray = [];
  
        // Loop through policies, converting indices to BigInt
        for (let i = 1; i < Number(policyCount); i++) {
          const policy = await contract.policies(toBigInt(i)); // Ensure correct conversion
          policyArray.push({ id: i, title: policy.title, description: policy.description });
        }
  
        setPolicies(policyArray); // Update state with fetched policies
      } catch (error) {
        console.error('Error fetching policies:', error);
      }
    };
  

    fetchPolicies();
  }, [contract]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPolicy({ ...newPolicy, [name]: value });
  };
  const {title,description}=newPolicy
  const handleAddPolicy = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      const tx = await contract.addPolicy(title.toString(), description.toString());
      await tx.wait();
      alert("Policy Added Successfully");
      setNewPolicy({ title: '', description: '' });
     
      const policyCount = await contract.nextPolicyId();
      const lastPolicyIndex = policyCount - toBigInt(1); // Correct BigInt conversion

      // Fetch the newly added policy
      const newPolicyData = await contract.policies(lastPolicyIndex);
  
      // Update the list of policies in the state
      setPolicies((prevPolicies) => [
        ...prevPolicies,
        { id: Number(lastPolicyIndex), title: newPolicyData.title, description: newPolicyData.description },
      ]);

    } catch (error) {
      console.error('Error adding policy:', error);
    } finally {
      setIsAdding(false);
    }
  };
    return (
        <div className="bg-white flex flex-col items-stretch">
          <div className="w-full max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <AdminSidebar />
              <div className="bg-gray-100 w-full p-6">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Policy Management</h2>
        <form onSubmit={handleAddPolicy} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Policy Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Policy Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className={`bg-[#197902] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isAdding ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isAdding}
          >
            {isAdding ? 'Adding...' : 'Add Policy'}
          </button>
        </form>
        <div>
          <h3 className="text-xl font-semibold mb-2">Existing Policies</h3>
          {policies.length === 0 ? (
            <p className="text-gray-500">No policies found.</p>
          ) : (
            <ul className="list-disc list-inside">
              {policies.map((policy) => (
                <li key={policy.id}>
                  <strong>{policy.title}</strong>:<span className="mt-2 break-words"> {policy.description}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
            </div>
          </div>
    
        </div>
      );
  
}
export default UpdatePolicy;

