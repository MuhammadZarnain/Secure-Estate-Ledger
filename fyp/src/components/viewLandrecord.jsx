import React, { useEffect, useState } from "react";
import AdminSidebar from './adminSidebar'
import LandDetails from './LandDetails';

const ViewLandrecord = ({ landContract }) => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLandId, setSelectedLandId] = useState(null);

  useEffect(() => {
    const fetchLandDetails = async () => {
      try {
        const allLands = await landContract.getAllLandDetails();
        setLands(allLands);
      } catch (error) {
        console.error("Error fetching land details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLandDetails(); // Fetch land details when the component mounts
  }, [landContract]);

  
  if (loading) {
    return <div>Loading land details...</div>;
  }
  const handleViewDetails = (landId) => {
    setSelectedLandId(landId);
  };

  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <AdminSidebar />
          <div className="bg-white flex flex-col items-stretch p-5">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center mb-6">Land Details</h2>
                <div className="w-full overflow-x-auto">
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
                {selectedLandId !== null && (
            <LandDetails landContract={landContract} landId={selectedLandId}/>
          
        
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

export default ViewLandrecord;  