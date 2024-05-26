import React,{useEffect, useState}from 'react';
import { useNavigate } from 'react-router-dom';
const adminAddress='0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
const adminPassword='@#SEL12345#@'
export default function AdminLogin({contract,userAddress}){
  useEffect(() => {
    const addAdmin = async () => {
      try {
        if (contract) {
          const transaction = await contract.addAdmin(adminAddress, adminPassword);
          await transaction.wait();
          console.log("Admin added successfully!");
        } else {
          console.error("Contract not initialized");
        }
      } catch (error) {
        console.error("Error Adding Admin:", error);
      }
    };
  
    // Delay execution to ensure contract is ready
    if (contract) {
      addAdmin();
    } else {
      console.error("Contract not available");
    }
  }, [contract]);
    const navigate= useNavigate();
    const [state, setState] = useState({
        password:"",
        });
        const{password} = state;
        const handleChange =(e) =>{
            setState(prev =>({...prev,[e.target.name]:[e.target.value]}))
        }
        const handleLogin = async (e) => {
            e.preventDefault();
            try {
                if(contract){
                    const isValidUser = await contract.login(userAddress,password.toString());
                    console.log(isValidUser)
                    if (isValidUser) {
                      // Login successful
                      console.log('Login successful!');
                      navigate('/AdminDashboard')
                    } else {
                     console.error("Invalid Login");
                    }
               
                }else{
                    console.error("contract doesnot deployed");
                }
               
            } catch (error) {
              alert("Invalid Login");
                console.error('Error logging in user:', error);
            }
            };
                


  return (
    
    <div className="relative w-full h-full bg-banner bg-cover">
    <div className='relative w-full h-screen bg-zinc-400/80 ]'>
    <div className='flex justify-center items-center h-full'>
        <form className=' max-w-[400px] w-full rounded-[40px] mx-auto bg-white p-8' onSubmit={handleLogin}>
            <h2 className='text-4xl font-bold text-center py-4'>Login</h2>
            <div className='flex flex-col mb-4'>
                <label htmlFor='password'>Password</label>
                <input id='password' className='border rounded-[40px] relative bg-gray-100 p-2' name='password' value={password} onChange={handleChange} type='password'/>
              
            </div>
            <p className=' flex items-center mt-2'><input className='mr-2' type='checkbox'/>Remember Me</p>
            <button type='submit' className='w-full rounded-[40px] py-3 mt-8 bg-green-600 hover:bg-green-900 relative text-white'>Signin</button>
        </form> 
       
    </div>
    </div>
    </div>
   
  )
}


