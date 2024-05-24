import React, { useState, useEffect } from 'react'; 
import { FaEye, FaCheck } from 'react-icons/fa';
import AdminSidebar from './adminSidebar'
import LandDetails from './LandDetails';
const PendingRequest= ({landContract}) => {
  const [confirming, setConfirming] = useState(false);
  const [selectedLandId, setSelectedLandId] = useState(null);
  const [pendingRequests, setPendingRequests] = useState([]);


  
  useEffect(() => {
    const fetchPendingRequests = async () => {
      if (landContract) {
        const requests = await landContract.getPendingRequests();
        setPendingRequests(requests);
      }
    };

    fetchPendingRequests();
  }, [landContract]);
  const handleVerify = () => {
    setConfirming(true);
  };

  const handleConfirmation = async(index) => {
    if (landContract) {
      const request = await landContract.verifyRequest(index);
      await request.wait();
    setConfirming(false);
  }
  };

  const handleCancel = () => {
    setConfirming(false);
  };

  const handleViewDetails = (landId) => {
    setSelectedLandId(landId);
  };

  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
      <AdminSidebar />
        <div className="container mx-auto">
  <h1 className="text-2xl text-center font-bold mb-4">Pending Requests</h1>
  <div className="overflow-x-auto">
    <table className="w-full table-auto">
      <thead>
        <tr className='bg-gray-100 text-left'>
          <th className="px-4 py-2 border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">Land ID</th>
          <th className="px-4 py-2 border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">Full Name</th>
          <th className="px-4 py-2 border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">CNIC</th>
          <th className="px-4 py-2 border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">Owner</th>
          <th className="px-4 py-2 border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">Request Type</th>
          <th colspan="2" className="px-4 py-2 text-center border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">Action</th>
        </tr>
      </thead>
      <tbody>
        {pendingRequests.map((request, index) => (
          <tr key={index}>
          <td className="border px-4 py-2 sm:w-1/6 md:w-1/6 lg:w-1/6">{request.Land_id.toString()}</td>
  <td className="border px-4 py-2 sm:w-1/6 md:w-1/6 lg:w-1/6">{request.fullName}</td>
  <td className="border px-4 py-2 sm:w-1/6 md:w-1/6 lg:w-1/6">{request.cnic}</td>
  <td className="border px-4 py-2 sm:w-1/6 md:w-1/6 lg:w-1/6">{request.owner}</td>
  <td className="border px-4 py-2 sm:w-1/6 md:w-1/6 lg:w-1/6">{request.requestType}</td>
  <td className="border px-4 py-2 sm:w-1/6 md:w-1/6 lg:w-1/6">
    <button className="flex items-center justify-center text-blue-500" onClick={() => handleViewDetails(request.Land_id)}>
      <FaEye className="mr-1" /> View Detail
    </button>
  </td>
  <td className="border px-4 py-2 sm:w-1/6 md:w-1/6 lg:w-1/6">
    <button className="flex items-center justify-center text-green-500"  onClick={handleVerify}>
      <FaCheck className="mr-1" /> Verify Request
    </button>
    {confirming && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
            <div className="bg-white p-8 rounded shadow-md">
              <p>Are you sure you want to verify this request?</p>
              <div className="flex justify-end mt-4">
                <button className="mr-4 px-4 py-2 bg-red-500 text-white rounded" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={async() =>await handleConfirmation(index)}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
  </td>
          </tr>
        ))}
      </tbody>
    </table>
    {selectedLandId !== null && <LandDetails landContract={landContract} landId={selectedLandId} />}
  </div>
</div>
    </div>
    </div>
    </div>
  );
};

export default PendingRequest;
