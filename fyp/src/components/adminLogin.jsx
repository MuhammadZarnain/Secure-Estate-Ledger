import React,{useEffect, useState}from 'react';
import AdmincontABI from '../artifacts/contracts/AdminAuthentication.sol/AdminAuthentication.json';
import { useNavigate } from 'react-router-dom';
const ethers = require("ethers");
export default function AdminLogin({userAddress}){
    const Adminconaddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; 
    const [AdminAddress, setAdminAddress] = useState(null);
    const [Admincontract, setAdminContract] = useState(null);
    const navigate= useNavigate();
    const [state, setState] = useState({
        password:"",
        });
        const{password} = state;
        const handleChange =(e) =>{
            setState(prev =>({...prev,[e.target.name]:[e.target.value]}))
        }

        useEffect(()=>{
            const addAdmin = async()=>{
                const provider = new ethers.JsonRpcProvider('http://localhost:8545')
          
                const privateKey = '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d';
                const wallet = new ethers.Wallet(privateKey, provider);
                const Admincontract = new ethers.Contract(Adminconaddress,AdmincontABI.abi,wallet);
                const AdminAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
                const AdminPassword= '@#SEL12345#@';
                setAdminAddress(AdminAddress);
                setAdminContract(Admincontract);
                try{
                  if(Admincontract){
                    const add= await Admincontract.addAdmin(AdminAddress,AdminPassword.toString());
                    await add.wait();
                    console.log('Admin added successfully');
                    console.log(AdminAddress)
                  }else{console.error('Contract not initialized');}
          
                }catch (err){
                  console.error('Error adding admin:', err);
                }
          
              }
          
              // Connect to MetaMask when the component mounts
              addAdmin(); 
        },[]);
        const handleLogin = async (e) => {
            e.preventDefault();
            try {
                if(Admincontract){
                    const isValidUser = await Admincontract.login(password.toString());

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
                <label>current User address:{userAddress} </label>
               
              
            </div>
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


