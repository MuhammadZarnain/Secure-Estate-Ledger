import React,{useState}from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import landregistervalidation from './landregistervalidate';

export default function Land_registration({contract,Usercontract,userAddress})
{

    const [state, setState] = useState({
        landID:"",
        fname:"",
        fathername:"",
        cnic:"",
        paddress:"",
        email:"",
        size:"",
        location:"",
        caddress:"",
        });
        const navigate = useNavigate();
        const[errors,setErrors]= useState({});
        const{landID,fname,fathername,cnic,paddress,email,size,location,caddress} = state;
    const handleChange =(e) =>{
        setState(prev =>({...prev,[e.target.name]:[e.target.value]}))
    }
    const handleRegistration = async (userData) => {
        userData.preventDefault();
        setErrors(landregistervalidation(state));
        console.log(state);
        
        try {
            if(contract){
                const transaction = await contract.registerLand(
                    fname.toString(),
                    parseInt(landID),
                    size.toString(),
                    location.toString(),
                    fathername.toString(),
                    email.toString(),
                    cnic.toString(),
                    paddress.toString(),
                    caddress.toString()
                 );
                   
                   // Wait for transaction to be mined
                   await transaction.wait();
                   navigate("/uploaddoc");
             
                   console.log('User registered successfully!');
                   
                   
            }else{console.error('Contract not initialized');}
          
         
        } catch (error) {
          console.error('Error registering Land:', error);
        }
      };
return(

  <div className="bg-white flex flex-col items-stretch">
  <div className="w-full max-md:max-w-full">
  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
  <Sidebar contract={Usercontract} userAddress={userAddress}/>

  <div className='flex justify-center items-center min-h-screen p-5 sm:p-10'>
  <div className='relative w-full h-full sm:h-screen bg-white sm:ml-30'> 

    <form className='max-w-[900px] w-full rounded-[20px] mx-auto bg-gray-100 p-5 sm:p-9' onSubmit={handleRegistration}>
      <h2 className='text-2xl font-bold text-center py-2'>Registration</h2>
      <div className='flex flex-col sm:flex-row mb-4'>
        <div className='flex flex-col mb-4 sm:mb-0 sm:mr-5'>
          <label htmlFor="landId" style={{ color: 'green' }}><b>Land ID</b></label>
          <input id='landId' className='border rounded-[40px] bg-white p-2 text-left' name='landID' type='number' placeholder='Khasra Number' value={landID} onChange={handleChange} />
        </div>
        <div className='flex flex-col mb-4 sm:mb-0 sm:mr-5'>
          <label htmlFor='fname' style={{ color: 'green' }}><b>Full Name </b></label>
          <input id='fname' className='border rounded-[40px] bg-white p-2 text-left' name='fname' type='text' placeholder='John Carter' value={fname} onChange={handleChange} />
          {errors.fname && <span className='text-red-700'>{errors.fname}</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='fathername' style={{ color: 'green' }}><b>Father Name</b></label>
          <input id='fathername' className='border rounded-[40px] bg-white p-2 text-left' name='fathername' type='text' placeholder='John Carter' value={fathername} onChange={handleChange} />
          {errors.fathername && <span className='text-red-700'>{errors.fathername}</span>}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row mb-5'>
        <div className='flex flex-col mb-4 sm:mb-0 sm:mr-5'>
          <label htmlFor='cnic' style={{ color: 'green' }}><b>CNIC</b></label>
          <input id='cnic' className='border rounded-[40px] bg-white p-2 text-left' name='cnic' type='text' placeholder='40579-1191471-9' value={cnic} onChange={handleChange} />
          {errors.cnic && <span className='text-red-700'>{errors.cnic}</span>}
        </div>
        <div className='flex flex-col mb-4 sm:mb-0 sm:mr-5'>
          <label htmlFor='size' style={{ color: 'green' }}><b>Size</b></label>
          <input id='size' className='border rounded-[40px] bg-white p-2 text-left' name='size' type='text' placeholder='Square meters' value={size} onChange={handleChange} />
          {errors.size && <span className='text-red-700'>{errors.size}</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='location' style={{ color: 'green' }}><b>Location</b></label>
          <input id='location' className='border rounded-[40px] bg-white p-2 text-left' name='location' type='text' placeholder='Street,Area' value={location} onChange={handleChange} />
          {errors.location && <span className='text-red-700'>{errors.location}</span>}
        </div>
      </div>
      <div className='flex flex-col mb-4 text-left'>
        <label htmlFor='caddress' style={{ color: 'green' }}><b>Current Address</b></label>
        <input id='caddress' className='border rounded-[20px] bg-white p-4' name='caddress' type='text' placeholder='Hno, street, religion' value={caddress} onChange={handleChange} />
        {errors.caddress && <span className='text-red-700'>{errors.caddress}</span>}
        <label htmlFor='paddress' style={{ color: 'green' }}><b>Permanent Address</b></label>
        <input id='paddress' className='border rounded-[20px] bg-white p-4' name='paddress' type='text' placeholder='Hno, street, religion' value={paddress} onChange={handleChange} />
        {errors.paddress && <span className='text-red-700'>{errors.paddress}</span>}
        <label htmlFor='email' style={{ color: 'green' }}><b>Email</b></label>
        <input id='email' className='border rounded-[40px] bg-white p-2' name='email' type='text' placeholder='Johncarter@gmail.com' value={email} onChange={handleChange} />
        {errors.email && <span className='text-red-700'>{errors.email}</span>}
      </div>
      <button type='submit' className='w-full rounded-[20px] py-2 mt-8 bg-[#197902] hover:bg-green-900 text-white'>Continue</button>
    </form>

  </div>
</div>
</div>
</div>
</div>

    );
    
}