import React, { useEffect, useState } from 'react';
const LandDetails = ({landContract, landId }) => {
    const [landDetails, setLandDetails] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadLandDetails = async () => {
  
        try {
          const details = await landContract.getLandDetails(landId);
          setLandDetails(details);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching land details:', error);
        }
      };
  
      loadLandDetails();
    }, [landContract,landId]);
  
    if (loading) return <div>Loading...</div>;
  
    return (<div className="bg-white shadow-md rounded-lg p-6 mt-6 mx-auto max-w-4xl">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
      Land Details for ID: {landId.toString()}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Full Name:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.fullName}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Email:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.email}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Father's Name:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.fatherName}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">CNIC:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.cnic}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Permanent Address:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.permanentAddress}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Temporary Address:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.temporaryAddress}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Size:</strong>
        <span className="w-2/3 text-gray-800">{landDetails._size}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Location:</strong>
        <span className="w-2/3 text-gray-800">{landDetails._location}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Owner:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.owner}</span>
      </div>
    </div>
  </div>
    );
  };
  
  export default LandDetails;