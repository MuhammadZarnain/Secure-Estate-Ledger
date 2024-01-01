
class Connect_Wallet
{
     connectMetaMask = async () => 
    {
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
          } catch (error) 
          {
            console.error('Error connecting to MetaMask:', error);
          }
        } else 
        {
          console.error('MetaMask not installed');
        }
      
    }
}
