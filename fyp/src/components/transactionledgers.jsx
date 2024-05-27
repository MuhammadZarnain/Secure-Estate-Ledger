import React, {useState } from 'react';
import AdminSidebar from './adminSidebar';

const Ownership = ({landContract,usercontract}) => {
  const [userDetails, setUserDetails] = useState(null);
  const [landId, setlandID] = useState('');
  const [ownershipHistory, setOwnershipHistory] = useState([]);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const details=[];

const handleChange = (event) => {
  setlandID(event.target.value);
};


  const handleSubmit = async (event) => {

    try{
      if (landContract) {
        const ownershipHistory = await landContract.getOwnershipHistory(parseInt(landId));
        setOwnershipHistory(ownershipHistory);
        console.log(ownershipHistory[0])
     if(usercontract)
        {
          for (let i = 0; i < ownershipHistory.length; i++) {
          const userDetail = await usercontract.getUser(ownershipHistory[i]);
          details.push(userDetail);
          console.log(userDetail);
        }
        setUserDetails(details);
        console.log(details)
        }else{
          console.error("contract not exist")
        }
        
        setSubmitted(true); 
      }
    }
    catch (err) {
     // setError('Error fetching ownership history. Please try again.');
      console.error(err);
    /* setSubmitted(true); */
  };
}
  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <AdminSidebar/>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Ownership History</h1>
            <input
                type="text"
                value={landId}
                onChange={handleChange}
                placeholder="Enter user landID"
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
            />
            <button onClick={async()=>handleSubmit(landId)} className=" bg-[#197902]  text-white font-bold py-2 px-4 rounded">
                Get User Info
            </button>
            <br/>
            <br/>
            <br/>
               
 {userDetails && ( // Check if userDetails is available
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">Owner Details:</h3>
                      <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2 border border-gray-200">Owner Address</th>
                        <th className="px-4 py-2 border border-gray-200">CNIC</th>
                        <th className="px-4 py-2 border border-gray-200">Name</th>
                        <th className="px-4 py-2 border border-gray-200">Father Name</th>
                        <th className="px-4 py-2 border border-gray-200">Phone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                    {ownershipHistory.map((owner, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 cursor-pointer border border-gray-200 md:border-none block md:table-row"
            >
              <td className="px-4 py-2 border border-gray-200 block md:table-cell">{owner}</td>
              {userDetails[index] ? (
                <>
                  <td className="px-4 py-2 border border-gray-200 block md:table-cell">{userDetails[index][0]}</td>
                  <td className="px-4 py-2 border border-gray-200 block md:table-cell">{userDetails[index][1]}</td>
                  <td className="px-4 py-2 border border-gray-200 block md:table-cell">{userDetails[index][2]}</td>
                  <td className="px-4 py-2 border border-gray-200 block md:table-cell">{userDetails[index][3]}</td>
                </>
              ) : (
                <td className="px-4 py-2 border border-gray-200 block md:table-cell" colSpan="4">Loading...</td>
              )}
            </tr>
          ))}
                     
                    </tbody>
                  </table>
                    </div>
                  )}
          </div>
            </div>
              </div>
            </div>
    
  );
};

export default Ownership;












