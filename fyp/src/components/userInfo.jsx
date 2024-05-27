import React, { useEffect, useState } from 'react';
import AdminSidebar from './adminSidebar';

export default function Userinfo({ contract, userAddress }) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (contract) {
        try {
          const totalUsers = await contract.totalUsers();
          const usersArray = [];
          for (let i = 0; i < totalUsers; i++) {
            const user = await contract.users(contract.registeredUsers(i));
            usersArray.push(user);
          }
          setUserInfo(usersArray);
        } catch (err) {
          console.error(err);
        }
      } else {
        console.error('contract not initialized');
      }
    };

    fetchUserInfo();
  }, [contract]);

  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
      <AdminSidebar />
    <div className="container mx-auto p-4">
  <h1 className="text-2xl text-center font-bold mb-4">User Information</h1>
      
        <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead>
            <tr  className='bg-gray-100 text-left'>
              <th className="px-4 py-2 border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">CNIC</th>
              <th className="px-4 py-2 border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">Name</th>
              <th className="px-4 py-2 border border-gray-200 sm:w-1/6 md:w-1/6 lg:w-1/6">Email</th>
            </tr>
          </thead>
          <tbody>
          {userInfo.map((request, index) => (
            <tr key={index}>
              <td className="border py-2 px-4">{request.cnic}</td>
              <td className="border py-2 px-4">{request.name}</td>
              <td className="border py-2 px-4">{request.email}</td>
            </tr>
            ))}
          </tbody>
        </table>
     
    </div>
    </div></div></div>
  );    

}