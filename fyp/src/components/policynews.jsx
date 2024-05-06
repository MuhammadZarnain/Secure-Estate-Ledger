
import React,{useEffect,useState} from 'react'
import { toBigInt } from 'ethers';
import Sidebar from './sidebar';
export default function Policy_news({ contract, userAddress,admin })
{
const [policies, setPolicies] = useState([]);
useEffect(()=>{
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
},[admin]);
 
return(
  
<div className="bg-white flex flex-col items-stretch">
<div className="w-full max-md:max-w-full">
<div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
<Sidebar contract={contract} userAddress={userAddress} />
<div className='relative w-full h-full'>
<div className='relative w-full h-screen white'> 

        <form className=' max-w-[500px] w-full rounded-[40px] mt-10 mx-auto bg-gray-100 p-8'>
            <h2 className='text-2xl font-bold text-center py- '>NEWS LETTER AND POLICY</h2>
         
<div className='flex flex-row mb-4 '>
    <div className='flex flex-col mr-4 '>
    {policies.length === 0 ? (
            <p className="text-gray-500">No policies found.</p>
          ) : (
            <ul className="list-disc list-inside">
              {policies.map((policy) => (
                <li key={policy.id}>
                  <strong>{policy.title}</strong>: {policy.description}
                </li>
              ))}
            </ul>
          )}
    </div>
    
</div>

                    
        </form> 
        
    </div>

</div>


</div>
</div>
</div>

    );
    
}