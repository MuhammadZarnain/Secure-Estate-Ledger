import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import transfervalidation from './transfervalidate';
export default function Land_Transfer({ landContract,contract,userAddress })
{
    const [state, setState] = useState({
        landID:"",
        useraddress:"",
        fullName:"",
        recipientName:"",
        recipientCnic:"",
        currentAddress:"",
        permanentAddress:"",
        email:"",
        
        });
       const navigate = useNavigate();
       const[errors,setErrors]=useState({});
        const{landID,useraddress,fullName,recipientName,recipientCnic,currentAddress,permanentAddress,email} = state;
    const handleChange =(e) =>{
        setState(prev =>({...prev,[e.target.name]:[e.target.value]}))
    }
    const handleTransfer = async (userData) => {
        userData.preventDefault();

        setErrors(transfervalidation(state));
        console.log(state);
        
        try {
            if(landContract){
                const transaction = await landContract.transferLand(
                    parseInt(landID),
                    useraddress.toString(),
                    recipientName.toString(),
                    recipientCnic.toString(),
                    fullName.toString(),
                    currentAddress.toString(),
                    permanentAddress.toString(),
                    email.toString()
                 );
                   
                   // Wait for transaction to be mined
                   await transaction.wait();
                   navigate("/TransferCongrats");
             
                   console.log('Land transfered successfully!');
                   
                   
            }else{console.error('Contract not initialized');}
          
         
        } catch (error) {
          console.error('Error transfering Land:', error);
        }
      };
return(
  <div className="bg-white flex flex-col items-stretch">
  <div className="w-full max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <Sidebar contract={contract} userAddress={userAddress}/>



<div className='flex justify-center items-center h-full p-10'>
<div className='relative w-full h-screen white'> 

        <form className='max-w-[900px] w-full rounded-[40px] mx-auto  bg-gray-100 p-9' onSubmit={handleTransfer}>
            <h2 className='  text-2xl font-bold text-center mr-20 py-'>Transfer</h2>
         
<div className='flex flex-row mb-4 text-left'>
<div className='flex flex-col'>
        <label  style={{ color: 'green' }}><b>Land ID</b></label>
        <input  className='border rounded-[40px] bg-white p-2 text-left' name='landID' type='number' placeholder='Khasra Number' value={landID} onChange={handleChange} required/>
     
    </div>
    <div className='flex flex-col'>
        <label style={{ color: 'green' }}><b>Recipient Full Name</b></label>
        <input id='recipientName' className='border rounded-[40px] bg-white p-2 text-left' name='recipientName' value={recipientName} type='text' placeholder='John Carter' onChange={handleChange} required/>
        {errors.recipientName && <span className='text-red-700'>{errors.recipientName}</span>}
    </div>
    <div className='flex flex-col mr-4 '>
        <label style={{ color: 'green' }}><b>Recipient Father Name </b></label>
        <input id='fullName' className='border rounded-[40px] bg-white p-2 text-left' name='fullName' value={fullName} type='text' placeholder='John Carter' onChange={handleChange} required/>
        {errors.fullName && <span className='text-red-700'>{errors.fullName}</span>}
    </div>
</div>

<div className='flex flex-row mb-4 text-left '>
    <div className='flex flex-col'>
        <label style={{ color: 'green' }}><b>Recipient CNIC</b> </label>
        <input id='recipientCnic' className='border rounded-[40px] bg-white p-2 text-left' name='recipientCnic' value={recipientCnic} type='text' placeholder='37725-12141109-7' onChange={handleChange} required/>
        {errors.recipientCnic && <span className='text-red-700'>{errors.recipientCnic}</span>}
    </div>
    <div className='flex flex-col'>
        <label  style={{ color: 'green' }}><b>Recipient Account Address</b> </label>
        <input id='useraddress' className='border rounded-[40px] bg-white p-2 text-left' name='useraddress' value={useraddress} type='text' placeholder='0xf39Fd6e51aad....'  onChange={handleChange} required/>
        {errors.useraddress && <span className='text-red-700'>{errors.useraddress}</span>}
    </div>
</div>
 <div  className='flex flex-col mb-4 text-left'>
                <label style={{ color: 'green' }}><b>Current Address </b></label>
                <input id='currentAddress' className='border rounded-[20px]  bg-white p-10 ' name='currentAddress' value={currentAddress}  type='text' placeholder='Hno,street,religion' onChange={handleChange} required/>
                <label style={{ color: 'green' }}><b>Permanent Address</b></label>
                <input id='permanentAddress' className='border rounded-[20px]  bg-white p-10 ' name='permanentAddress' value={permanentAddress} type='text' placeholder='Hno,street,religion' onChange={handleChange} required/>
                <label style={{ color: 'green' }}><b> Email </b></label>
                <input id='email' className='border rounded-[40px]  bg-white p-2 ' name='email' value={email} type='text' placeholder='Johncarter@gmail.com' onChange={handleChange} required/>
                {errors.email && <span className='text-red-700'>{errors.email}</span>}
            </div>
           
            <button type='submit' className='w-full rounded-[20px] py-2 mt-8 bg-green-600 hover:bg-green-900 text-center relative text-white '>Continue</button>
           
        </form> 
        
    </div>

</div>
</div>
</div>
</div> 
    );
    
}