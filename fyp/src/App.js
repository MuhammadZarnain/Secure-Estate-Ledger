
import Login from './components/login';
import AdminLogin from './components/adminLogin';
import View from './components/register';
import Header from './components/header'
import UpdatePolicy  from './components/updatePolicy';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState,useEffect } from 'react';
import UsercontABI from './artifacts/contracts/UserManagement.sol/UserManagement.json';
import landcontractABI from './artifacts/contracts/LandRegistration.sol/LandRegistration.json';
import Description from './components/description'
import Transfer from './components/transfer'
import UploadDocs from './components/uploadDoc'
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
import OTP from './components/otp';
import DemoPgae from './components/demoPage'
const Userconaddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';  
const landRegistrationadress= '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
/*const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'; 
const Adminconaddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';   
const adminAddress='0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'; 
const adminPassword='@#Sel123#@'; */

const ethers = require("ethers");



function App() {
  // eslint-disable-next-line
  const [web3Provider, setWeb3Provider] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
 /*  const [Admincontract, setAdminContract] = useState(null); */
  const [Usercontract, setUserContract] = useState(null);
  const [landcontract, setlandContract] = useState(null);

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
         const signer = await provider.getSigner();
      /*    const wallet = new ethers.Wallet(privateKey, providers);  */
         /* const Admincontract = new ethers.Contract(Adminconaddress,AdmincontABI.abi,wallet); */
          
          // Create ethers contract instance
          const Usercontract = new ethers.Contract(Userconaddress,UsercontABI.abi, signer);
          const LandRegistration= new ethers.Contract(landRegistrationadress,landcontractABI.abi,signer);

         /*  const add= await Admincontract.addAdmin(adminAddress, adminPassword);
          await add.wait();
          console.log("Admin Added Sucessfully"); */
          // Get the user's address
          const address = await signer.getAddress();
          /* setAdminContract(Admincontract); */
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
               <Route path='/updatePolicy' element={<UpdatePolicy />}/>
               <Route path='/login' element= {<Login contract={Usercontract} setUserAddress={setUserAddress} userAddress={userAddress}/>}/>
               <Route path='/adminlogin' element= {<AdminLogin userAddress={userAddress}  />}/>
               <Route path='/register' element= {<View contract={Usercontract}  />}/>
               <Route path='/otp' element= {<OTP/>}/>
               <Route path='/Dashboard' element= {<UserDashboard contract={Usercontract} userAddress={userAddress}/>}/>
               <Route path='/AdminDashboard' element= {<AdminDashboard/>}/>
               <Route path='/LandRegistration' element= {<LandRegistration contract={landcontract} Usercontract={Usercontract} userAddress={userAddress}/>}/>
               <Route path='/pendingRequest' element={<PendingRequest />}/>
               <Route path='/Description' element= {<Description contract={Usercontract} userAddress={userAddress} />}/>
               <Route path='/Transfer' element= {<Transfer contract={Usercontract} userAddress={userAddress} />}/>
               <Route path='/uploaddoc' element={<UploadDocs contract={Usercontract} userAddress={userAddress}/>}/>
               <Route path='/awaiting' element={<Awaiting contract={Usercontract} userAddress={userAddress} />}/>
               <Route path='/landcongrats' element={<Lcongrats contract={Usercontract} userAddress={userAddress} />}/>
               <Route path='/landTransfer' element={<LandTransfer contract={Usercontract} userAddress={userAddress} />}/>
               <Route path='/transferDashboard' element={<Tdashboard contract={Usercontract} userAddress={userAddress} />}/>
               <Route path='/transferCongrats'element={<TransferCongrats contract={Usercontract} userAddress={userAddress} />}/>
               <Route path='/userinfo'element={<Userinfo contract={Usercontract} userAddress={userAddress} />}/>
               <Route path='/policyNewsLtr'element={<Policynews contract={Usercontract} userAddress={userAddress}/>}/>
               <Route path='/Demo'element={<DemoPgae contract={Usercontract} userAddress={userAddress}/>}/>
               
        </Routes>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;
