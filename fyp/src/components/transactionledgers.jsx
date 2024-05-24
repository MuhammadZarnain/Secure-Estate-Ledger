import React, { useEffect, useState } from 'react';
import AdminSidebar from './adminSidebar';

const Ownership = ({landContract,usercontract}) => {
  const [userDetails, setUserDetails] = useState(null);
  const [address, setOwnerAddress] = useState(null);
const [state,setState]=useState({
  landId:""
});
  const [ownershipHistory, setOwnershipHistory] = useState([]);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const details=[];
const{landId}=state;
  const handleInputChange = (e) => {
    setState(prev =>({...prev,[e.target.name]:[e.target.value]}))
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <AdminSidebar />
          <div className="bg-white flex flex-col p-5  ">
            <div style={{ marginLeft: '7rem' }} className="w-full">
              <div style={{ marginRight: '10rem' }} className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-center mb-6">Ownership History</h2>
                <div   className="bg-white rounded-lg p-6 mt-6 mx-auto max-w-4xl">
                  <form
                    className="max-w-[900px] w-full rounded-[40px] mx-auto bg-gray-100 p-9"
                    onSubmit={handleSubmit}
                  >
                    <label htmlFor="landId" style={{ color: 'green' }}>
                      <b>Land ID</b>
                    </label>
                    <input
                      id="landId"
                      className="border rounded-[40px] bg-white p-2 text-left ml-4"
                      name="landId"
                      type="number"
                      placeholder="Khasra Number"
                      value={landId}
                      onChange={handleInputChange}
                    />
                    <button
                      type="submit"
                      className="w-full rounded-[20px] py-2 mt-8 bg-[#197902] hover:bg-green-900 relative text-white"
                    >
                      Continue
                    </button>
                  </form></div>
                  {error && (
  <>
    <p className="text-red-500">{error}</p>
    {console.error(error)}
  </>
)}
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
        </div>
      </div>
    
  );
};

export default Ownership;












/* import React, { useEffect, useState } from 'react';
import AdminSidebar from './adminSidebar';
import LandDetails from './LandDetails';

const Ownership = ({landContract,usercontract}) => {
    const [lands, setLands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedLandId, setSelectedLandId] = useState(null);

    const [landId, setLandId] = useState('');
    const [ownershipHistory, setOwnershipHistory] = useState([]);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

    const handleInputChange = (event) => {
      setLandId(event.target.value);
    };
    useEffect(() => {
      if (submitted) {
        const fetchOwnershipHistory = async () => {
          setError(null);
          try {
           
            const history = await landContract.getOwnershipHistory();
            setOwnershipHistory(history);
          } catch (err) {
            setError('Error fetching ownership history. Please try again.');
            console.error(err);
          }
          setSubmitted(false);
        };
  
        fetchOwnershipHistory();
      }
    }, [submitted]); */
   /*  useEffect(() => {
      if(submitted)
        {
        const fetchLandDetails = async () => {
        try {
          const allLands = await landContract.getOwnershipHistory();
          setLands(allLands);
        } catch (error) {
          console.error("Error fetching land details:", error);
        } finally {
          setSubmitted(false);
        }
      };
    }
      
    fetchLandDetails(); // Fetch land details when the component mounts
    }, [landContract]); */
  /*   const handleSubmit = async (event) => {
      event.preventDefault();
      setError(null);
      try {
       // const accounts = await web3.eth.getAccounts();
        const history = await landContract.getOwnershipHistory();
        setOwnershipHistory(history);
      } catch (err) {
        setError('Error fetching ownership history. Please try again.');
        console.error(err);
      }
    }; */
   /*  const handleInputChange = (event) => {
      setLandId(event.target.value);
    };
    if (loading) {
      return <div>Loading land details...</div>;
    }
    const handleViewDetails = (landId) => {
      setSelectedLandId(landId);
    }; */
/*  return (
      <div className="bg-white flex flex-col items-stretch">
        <div className="w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <AdminSidebar />
            <div className="bg-white flex flex-col items-stretch p-5">
              <div className="w-full">
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-center mb-6">Ownership History</h2> */
                 {/* <div className="w-full overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="px-4 py-2 border border-gray-200">Land ID</th>
                          <th className="px-4 py-2 border border-gray-200">Full Name</th>
                          <th className="px-4 py-2 border border-gray-200">CNIC</th>
                          <th className="px-4 py-2 border border-gray-200">Wallet Address</th>
                          <th className="px-4 py-2 border border-gray-200">Location</th>
                          <th className="px-4 py-2 border border-gray-200">Size</th>
                          <th className="px-4 py-2 border border-gray-200">Registered</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lands.map((land, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 cursor-pointer"
                            onClick={() => handleViewDetails(land.Land_id)}
                          >
                            <td className="px-4 py-2 border border-gray-200">{land.Land_id.toString()}</td>
                            <td className="px-4 py-2 border border-gray-200">{land.fullName}</td>
                            <td className="px-4 py-2 border border-gray-200">{land.cnic}</td>
                            <td className="px-4 py-2 border border-gray-200">{land.owner}</td>
                            <td className="px-4 py-2 border border-gray-200">{land.location}</td>
                            <td className="px-4 py-2 border border-gray-200">{land.size}</td>
                            <td className="px-4 py-2 border border-gray-200">{land.isRegister ? 'Yes' : 'No'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  {selectedLandId !== null && (<LandDetails landContract={landContract} landId={selectedLandId}/>
            
          
        )} */}
                 /*  </div> 
                  <div className="bg-white rounded-lg p-6 mt-6 mx-auto max-w-4xl">
                  <form className=' max-w-[900px] w-full rounded-[40px] mx-auto  bg-gray-100 p-9' onSubmit={handleSubmit}>

                  <label htmlfor="landId" style={{ color: 'green' }}><b>Land ID</b></label>
                  <input id='landId' className='border rounded-[40px] bg-white p-2 text-left ml-4' name='landID' type='number' placeholder='Khasra Number'  value={landId} onChange={handleInputChange}/>
                 
                  <button type='submit' className='w-full rounded-[20px] py-2 mt-8 bg-[#197902] hover:bg-green-900 relative text-white '>Continue</button>
</form> 
{error && <p className="text-red-500">{error}</p>}
      {ownershipHistory.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Ownership History:</h3>
          <ul className="list-disc pl-5">
            {ownershipHistory.map((owner, index) => (
              <li key={index} className="mb-1">{owner}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
</div>
                

                </div>
              </div>
            </div>
          </div>
        </div>
    );
};
 
export default Ownership; */