
import Login from './components/login';
import AdminLogin from './components/adminLogin';
import View from './components/register';
import Header from './components/header'
import UpdatePolicy  from './components/updatePolicy';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState,useEffect } from 'react';
import UsercontABI from './artifacts/contracts/UserManagement.sol/UserManagement.json';
import landcontractABI from './artifacts/contracts/LandRegistration.sol/LandRegistration.json';
import AdmincontABI from './artifacts/contracts/AdminAuthentication.sol/AdminAuthentication.json';
import Description from './components/description'
import Transfer from './components/transfer'
import UploadDocs from './components/uploadDoc'
import ViewLandrecord from './components/viewLandrecord'
import Userinfo from './components/userInfo';
import Awaiting from './components/awaiting';
import Lcongrats from './components/congralutions'
import LandTransfer from './components/landTransfer';
import Tdashboard from './components/TransferDashboard'
import TransferCongrats from './components/TransferCongrats';
import Policynews from './components/policynews';
import Footer from './components/footer';
import Home from './components/home';
import UserDashboard from './components/userDashboard';
import AdminDashboard from './components/adminDashboard'
import LandRegistration from './components/landRegistration';
import PendingRequest from './components/pendingRequest';
const Userconaddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';  
const landRegistrationadress= '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
const Adminconaddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; 
const ethers = require("ethers");



function App() {
  // eslint-disable-next-line
  const [web3Provider, setWeb3Provider] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [usercontract, setUserContract] = useState(null);
  const [landcontract, setlandContract] = useState(null);
  const [admincontract, setAdminContract] = useState(null);

// Function to connect to MetaMask

 
  useEffect(() => {
    
    const connectMetaMask = async () => {
      if (window.ethereum) {
        try {
          // Request MetaMask account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
         /*  const providers = new ethers.JsonRpcProvider('http://localhost:8545')  */
          
          // Create ethers provider and signer
         const provider = new ethers.BrowserProvider(window.ethereum);
         const providers = new ethers.JsonRpcProvider('http://localhost:8545')
         const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
         const wallet = new ethers.Wallet(privateKey, providers);
         const signer = await provider.getSigner();
      /*    const wallet = new ethers.Wallet(privateKey, providers);  */
         /* const Admincontract = new ethers.Contract(Adminconaddress,AdmincontABI.abi,wallet); */
          
          // Create ethers contract instance
          const Usercontract = new ethers.Contract(Userconaddress,UsercontABI.abi, signer);
          const LandRegistration= new ethers.Contract(landRegistrationadress,landcontractABI.abi,signer);
          const Admincontract = new ethers.Contract(Adminconaddress,AdmincontABI.abi,wallet);

          const address = await signer.getAddress();
          setAdminContract(Admincontract);
          setWeb3Provider(provider);
          setUserAddress(address);
          setUserContract(Usercontract);
          setlandContract(LandRegistration);
          
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask not installed');
      }
    };
    connectMetaMask();
  },[]);
 
  
  
  

  return (
 
    
    <BrowserRouter>
    <Header/>

    <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/updatePolicy' element={<UpdatePolicy contract={admincontract} />}/>
               <Route path='/login' element= {<Login contract={usercontract} setUserAddress={setUserAddress} userAddress={userAddress}/>}/>
               <Route path='/adminlogin' element= {<AdminLogin contract={admincontract} userAddress={userAddress}  />}/>
               <Route path='/register' element= {<View contract={usercontract}  />}/>
               <Route path='/Dashboard' element= {<UserDashboard contract={usercontract} userAddress={userAddress}/>}/>
               <Route path='/AdminDashboard' element= {<AdminDashboard/>}/>
               <Route path='/LandRegistration' element= {<LandRegistration contract={landcontract} Usercontract={usercontract} userAddress={userAddress}/>}/>
               <Route path='/pendingRequest' element={<PendingRequest />}/>
               <Route path='/Description' element= {<Description contract={usercontract} userAddress={userAddress} />}/>
               <Route path='/Transfer' element= {<Transfer contract={usercontract} userAddress={userAddress} />}/>
               <Route path='/uploaddoc' element={<UploadDocs contract={usercontract} userAddress={userAddress}/>}/>
               <Route path='/awaiting' element={<Awaiting contract={usercontract} userAddress={userAddress} />}/>
               <Route path='/landcongrats' element={<Lcongrats contract={usercontract} userAddress={userAddress} />}/>
               <Route path='/landTransfer' element={<LandTransfer contract={usercontract} userAddress={userAddress} />}/>
               <Route path='/transferDashboard' element={<Tdashboard contract={usercontract} userAddress={userAddress} />}/>
               <Route path='/transferCongrats'element={<TransferCongrats contract={usercontract} userAddress={userAddress} />}/>
               <Route path='/userinfo'element={<Userinfo contract={usercontract} userAddress={userAddress} />}/>
               <Route path='/policyNewsLtr'element={<Policynews contract={usercontract} userAddress={userAddress} admin={admincontract}/>}/>
               <Route path='/viewLandRecord'element={<ViewLandrecord  landContract={landcontract} />}/>
               
        </Routes>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;
