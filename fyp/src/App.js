
import Login from './components/login';
import View from './components/register';
import Header from './components/header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState,useEffect } from 'react';
import contABI from './artifacts/contracts/UserAuthenticationManagement.sol/UserAuthenticationManagement.json';
import Footer from './components/footer';
import Home from './components/home';
import UserDashboard from './components/userDashboard';
import OTP from './components/otp';
import AdminDashboard from './components/adminDashboard';
const conaddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'; 
const ethers = require("ethers");



function App() {
  // eslint-disable-next-line
  const [web3Provider, setWeb3Provider] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    // Function to connect to MetaMask
    const connectMetaMask = async () => {
      if (window.ethereum) {
        try {
          // Request MetaMask account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          
          // Create ethers provider and signer
         const provider = new ethers.BrowserProvider(window.ethereum);
         const signer = await provider.getSigner();
          
          // Create ethers contract instance
          const contract = new ethers.Contract(conaddress,contABI.abi, signer);

          // Get the user's address
          const address = await signer.getAddress();

          setWeb3Provider(provider);
          setUserAddress(address);
          setContract(contract);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask not installed');
      }
    };

    // Connect to MetaMask when the component mounts
    connectMetaMask();
  }, []);

  return (
 
    
    <BrowserRouter>
    <Header/>

    <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/login' element= {<Login contract={contract} setUserAddress={setUserAddress} userAddress={userAddress}/>}/>
               <Route path='/register' element= {<View contract={contract}  />}/>
               <Route path='/otp' element= {<OTP/>}/>
               <Route path='/Dashboard' element= {<UserDashboard contract={contract} userAddress={userAddress}/>}/>
               <Route path='/Admin' element= {<AdminDashboard contract={contract} userAddress={userAddress}/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;
