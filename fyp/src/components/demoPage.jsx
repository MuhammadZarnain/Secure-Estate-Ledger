import React, { useEffect, useState } from 'react';
import CardDataStats from './CardDataStats';
import AdminSidebar from './adminSidebar';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';
const UserDashboard = ({contract,landcontract,useraddress}) => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalLands, setTotalLands] = useState(0);
  const [pendingRequestsCount, setPendingRequestsCount] = useState(0);

  useEffect(() => {
    const fetchContractData = async () => {
      if (contract) {
        const totalUsers = await contract.totalUsers();
        setTotalUsers(parseInt(totalUsers));

      } else {
        console.error("Ethereum wallet is not connected");
      }
      if(landcontract){
        const landCounter = await landcontract.landCounter();
      setTotalLands(parseInt(landCounter));
      const pendingRequests = await landcontract.getPendingRequests();
      setPendingRequestsCount(pendingRequests.length);
      }
    };

    fetchContractData();
  }, [contract,landcontract]);
 

  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <AdminSidebar/>
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <a href='/userinfo'><CardDataStats title="Total User" total= {totalUsers} /> </a>
        <a href='/userinfo'><CardDataStats title="New User" total={totalUsers} /> </a>
        <a href='/viewlandrecord'> <CardDataStats title="Total Land" total={totalLands} /> </a>
        <a href='/pendingRequest'>  <CardDataStats title="Pending Land" total={pendingRequestsCount} /> </a>
      </div>   
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />      
        <ChartTwo/>
     </div>
     
      </div>
      </div>
      </div>
      </div>
     
    
      
  );
};


export default UserDashboard;