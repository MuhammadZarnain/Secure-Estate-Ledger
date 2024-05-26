import React, { useState } from 'react';
import Sidebar from './sidebar';


const TrackApproval = ({landContract, userAddress, contract}) => {
  const [landId, setLandId] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setLandId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
        const pendingRequests = await landContract.getPendingRequests();
      console.log('Pending Requests:', pendingRequests);
      
      const landIdInt = parseInt(landId);
      const request = pendingRequests.find(req => parseInt(req.Land_id) === landIdInt);

      console.log('Pending Request for Land ID:', landIdInt, request);
      console.log('User Address:', userAddress);
      if (request) {
        if (request.owner.toLowerCase() === userAddress.toLowerCase()) {
          setStatus(`Request is pending for ${request.requestType}.`);
        } else {
          setStatus('You are not the owner of this land.');
        }
      } else {
        const landDetails = await landContract.getLandDetails(landId);
        if (landDetails.owner.toLowerCase() !== '0x0000000000000000000000000000000000000000') {
          if (landDetails.owner.toLowerCase() === userAddress.toLowerCase()) {
            setStatus('Land is registered.');
          } else {
            setStatus('You are not the owner of this land.');
          }
        } else {
          setStatus('Land does not exist.');
        }
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred while fetching the land status.');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <Sidebar contract={contract} userAddress={userAddress} />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Track Land Request Status</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="landId" className="block text-sm font-medium text-gray-700">Land ID</label>
          <input
            type="number"
            id="landId"
            value={landId}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#197902] hover:bg-[#1b461b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? 'Checking...' : 'Check Status'}
          </button>
        </div>
      </form>
      {status && <div className="mt-4 font-bold  text-xl">{status}</div>}
    </div>
    </div>
    </div>
    </div>
  );
};

export default TrackApproval;