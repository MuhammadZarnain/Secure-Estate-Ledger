
import React, { useState, useEffect } from 'react';
import placeholder from '../assets/imageholder.jpg'
const LandDetailsPopup = ({ landContract, landId, onClose }) => {
    const [landDetails, setLandDetails] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchLandDetail = async () => {
        setLoading(true);
        try {
            const details = await landContract.getLandDetails(landId);
            setLandDetails(details);
          } catch (error) {
            console.error('Error fetching land details:', error);
          } finally {
          setLoading(false);
        }
      };
  
      fetchLandDetail();
    }, [landContract, landId]);
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
          <button onClick={onClose} className="text-red-500 float-right">Close</button>
          {loading ? (
            <div className="text-center text-lg">Loading...</div>
          ) : (
            <div>
              <h2 className="font-bold text-xl mb-2">Land ID: {landId.toString()}</h2>
              <p className="text-gray-700 font-bold text-base">Name: {landDetails?.fullName}</p>
              <p className="text-gray-700 font-bold text-base">Email: {landDetails?.email}</p>
              <p className="text-gray-700 font-bold text-base">CNIC: {landDetails?.cnic}</p>
              <p className="text-gray-700 font-bold text-base">Size: {landDetails?._size}</p>
              <p className="text-gray-700 font-bold text-base">Location: {landDetails?._location}</p>
              
            </div>
          )}
        </div>
      </div>
    );
  };





const OwnedLandDetails = ({ landContract, userAddress }) => {
    const [landDetails, setLandDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedLandId, setSelectedLandId] = useState(null);
  
    useEffect(() => {
      const fetchOwnedLandDetails = async () => {
        if (!userAddress) return;
  
        setLoading(true);
        try {
          const details = await landContract.getOwnedLandDetails(userAddress);
          setLandDetails(details);
        } catch (error) {
          console.error('Error fetching land details:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchOwnedLandDetails();
    }, [landContract, userAddress]);
  
    const handleCardClick = (landId) => {
      setSelectedLandId(landId);
    };
  
    const closePopup = () => {
      setSelectedLandId(null);
    };
  
    return (
      <div className="container mx-auto p-4">
        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {landDetails.length === 0 ? (
              <div className="text-center text-lg col-span-full">You do not own any land.</div>
            ) : (
              landDetails.map((land, index) => (
                <div
                  key={index}
                  className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer"
                  onClick={() => handleCardClick(land.Land_id)}
                >
                  <img
                    className="w-full"
                    src={placeholder}
                    alt="Land"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Land ID: {land.Land_id.toString()}</div>
                    <p className="text-gray-700 text-base">Name: {land.fullName}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        {selectedLandId && (
          <LandDetailsPopup
            landContract={landContract}
            landId={selectedLandId}
            onClose={closePopup}
          />
        )}
      </div>
    );
  };
  
  export default OwnedLandDetails;