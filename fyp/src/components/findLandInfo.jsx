import React, {useState } from 'react';
import AdminSidebar from './adminSidebar';
import LandDetails from './LandDetails';
const LandInfo = ({landContract}) => {
    const [landInfo, setlandInfo] = useState(null);
    const [landID, setlandID] = useState('');



    const handleChange = (event) => {
        setlandID(event.target.value);
    };

    const handleViewDetails = (landId) => {
      setlandInfo(landId);
    };

    return (
        <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <AdminSidebar/>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Land Info</h1>
            <input
                type="text"
                value={landID}
                onChange={handleChange}
                placeholder="Enter user landID"
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
            />
            <button onClick={async()=>handleViewDetails(landID)} className=" bg-[#197902]  text-white font-bold py-2 px-4 rounded">
                Get Land Info
            </button>
            <br/>
            <br/>
            <br/>
            {landInfo && <LandDetails landContract={landContract} landId={landInfo} />}
        </div>
        </div></div></div>
    );
};

export default LandInfo;












