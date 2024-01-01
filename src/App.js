
import Login from './components/login';
import View from './components/register'; 
import Header from './components/header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState,useEffect } from 'react';
import contABI from './artifacts/contracts/UserManagement.sol/UserManagement.json';
import Footer from './components/footer';
import Home from './components/home';
const conaddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'; 
const ethers = require("ethers");
import Connect_Wallet from './components/classes/Wallet';


function App() {
  // eslint-disable-next-line
  const [web3Provider, setWeb3Provider] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    
    const [con_Wallet] = useState(new Connect_Wallet());

    const handleConnectWallet = async () => {
      await connectWallet.connectMetaMask();
      // Access the connected wallet properties
      console.log(con_Wallet.web3Provider, con_Wallet.userAddress, con_Wallet.contract);
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
               <Route path='/register' element= {<View contract={contract} />}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;
