import React, {useState } from 'react';
import AdminSidebar from './adminSidebar';

const UserInfo = ({usercontract}) => {
    const [userInfo, setUserInfo] = useState(null);
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);


    const handleChange = (event) => {
        setAddress(event.target.value);
    };

    const fetchUserInfo = async () => {
        setLoading(true);


        try {
            const result = await usercontract.getUser(address);
            const user = {
                cnic: result[0],
                name: result[1],
                fatherName: result[2],
                phoneNumber: result[3],
                email: result[4],
                password:result[5],
                permanentAddress: result[6],
                currentAddress: result[7],
            };

            setUserInfo(user);
        } catch (err) {
            console.error('Failed to fetch user information');
        }

        setLoading(false);
    };

    return (
        <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <AdminSidebar/>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">User Info</h1>
            <input
                type="text"
                value={address}
                onChange={handleChange}
                placeholder="Enter user address"
                className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
            />
            <button onClick={fetchUserInfo} className=" bg-[#197902]  text-white font-bold py-2 px-4 rounded">
                Get User Info
            </button>
            <br/>
            <br/>
            <br/>
            {loading && <p className="mt-4 text-gray-600">Loading...</p>}
            {userInfo && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Full Name:</strong>
        <span className="w-2/3 text-gray-800">{userInfo.name}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Email:</strong>
        <span className="w-2/3 text-gray-800">{userInfo.email}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Father's Name:</strong>
        <span className="w-2/3 text-gray-800">{userInfo.fatherName}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">CNIC:</strong>
        <span className="w-2/3 text-gray-800">{userInfo.cnic}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Permanent Address:</strong>
        <span className="w-2/3 text-gray-800"> {userInfo.permanentAddress}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Temporary Address:</strong>
        <span className="w-2/3 text-gray-800">{userInfo.currentAddress}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Phone Number:</strong>
        <span className="w-2/3 text-gray-800">{userInfo.phoneNumber}</span>
      </div>
      </div>
            )}
        </div>
        </div></div></div>
    );
};

export default UserInfo;












