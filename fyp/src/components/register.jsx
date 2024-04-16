import React,{useState}from 'react';
import registervalidation from './registerValidate';
import { useNavigate } from 'react-router-dom';


const SERVER_IP = 'http://localhost:5005';
const Register=({ contract })=>{
    const [state, setState] = useState({
    name:"",
    fname:"",
    cnic:"",
    paddress:"",
    email:"",
    password:"",
    caddress:"",
    });
    const navigate = useNavigate();
    const[errors,setErrors]= useState({});
    const [phone_number,setPhoneNumber] = useState("");
    const [codeSent, setCodeSent] = useState(false);
    const [code, setCode] = useState("")

    async function sendCode(){
        try {
            const response = await fetch(SERVER_IP+'/api/send-code',{
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({phone_number:phone_number})
            });
            if(response.ok === true) {
                window.alert("Verification code sent successfully")
            } else {
                window.alert("Oh no we have an error")
            }
        } catch (error) {
           /* console.error('Error sending code:', error)*/;
        }
    }
    
    async function verifyCode(){
        try {
            const response = await fetch(SERVER_IP+'/api/verify-code',{
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({phone_number:phone_number, code:code})
            });
            if(response.ok === true) {
                window.alert("Number verified successfully")
                navigate('/Dashboard')
            } else {
                window.alert("Oh no we have an error")
            }
        } catch (error) {
            console.error('Error verifying code:', error);
        }
    }
    
    const{name,fname,cnic,paddress,email,password,caddress} = state;
    const handleChange =(e) =>{
        setState(prev =>({...prev,[e.target.name]:[e.target.value]}))
    }

    const handleRegistration = async (userData) => {
        userData.preventDefault();
       
        setErrors(registervalidation(state));
        console.log(state);
        
        try {
            if(contract){
                const transaction = await contract.registerUser(
                    cnic.toString(),
                    name.toString(),
                    fname.toString(),
                    phone_number.toString(),
                    email.toString(),
                    password.toString(),
                    paddress.toString(),
                    caddress.toString()
                 );
                   
                   // Wait for transaction to be mined
                   await transaction.wait();
             
                   console.log('User registered successfully!');
                   setCodeSent(true);
                   
                   
            }else{/*console.error('Contract not initialized');*/}
          
         
        } catch (error) {
          console.error('Error registering user:', error);
        }
      };
  return (
    !codeSent?
    <div className="relative w-full h-full bg-banner bg-cover">
    
    <div className='relative w-full h-full  bg-zinc-400/80'>
    <div className='flex justify-center items-center h-full '>
        <form className=' max-w-[600px]  w-screen mx-auto rounded-[40px] bg-white m-8 ' onSubmit={handleRegistration}>
            <h2 className='text-2xl font-bold text-center py-8'>Registeration</h2>
            <div className='flex justify-around mr-[50px]'>
            <div  className='flex flex-col  '>
                <label htmlFor="full-name" className='text-green-700'>Full Name</label>
                <input id='full-name' className='border rounded-[40px]  relative bg-gray-100 p-2' name='name' value={name}type='text' onChange={handleChange}/>
                {errors.name && <span className='text-red-700'>{errors.name}</span>}
            </div>
            <div  className='flex flex-col '>
                <label htmlFor="father-name" className='text-green-700'>Father Name</label>
                <input id='father-name' className='border  rounded-[40px]  relative bg-gray-100 p-2' name='fname' value={fname} type='text'  onChange={handleChange}/>
                {errors.fname && <span className='text-red-700'>{errors.fname}</span>}
            </div>
            </div>
            <div className='flex justify-around mr-[50px] py-2'>
            <div  className='flex flex-col'>
                <label htmlFor="cnic" className='text-green-700'>CNIC</label>
                <input id='cnic' className='border rounded-[40px]  relative bg-gray-100 p-2' name='cnic' value={cnic} type='text'  onChange={handleChange}/>
                {errors.cnic&& <span className='text-red-700'>{errors.cnic}</span>}
            </div>
            <div  className='flex flex-col '>
                <label htmlFor="phone-number" className='text-green-700'>Phone Number</label>
                <input id='phone-number' className='border rounded-[40px] relative bg-gray-100 p-2' name='phone_number' onChange={(e) =>setPhoneNumber(e.target.value)} type='text'/>
                
                {errors.phone_number && <span className='text-red-700'>{errors.phone_number}</span>}
            </div>
            </div>
            <div  className='flex flex-col ml-[35px] mr-[90px]  py-2'>
                <label htmlFor="current-address" className='text-green-700'>Current Address</label>
                <input id='current-address' className='border rounded-[40px]  relative bg-gray-100 p-2' name='caddress' type='textbox' value={caddress}  onChange={handleChange}/>
                {errors.caddress && <span className='text-red-700'>{errors.caddress}</span>}
            </div>
            <div  className='flex flex-col ml-[35px] mr-[90px] py-2'>
                <label htmlFor="permanent-address" className='text-green-700'>Permanent Address</label>
                <input id='permanent-address' className='border  rounded-[40px] relative bg-gray-100 p-2' name='paddress' type='textbox' value={paddress} onChange={handleChange}/>
                {errors.paddress && <span className='text-red-700'>{errors.paddress}</span>}
            </div>
            <div className='flex justify-around mr-[50px] py-2' >
            <div  className='flex flex-col '>
                <label  htmlFor="email" className='text-green-700'>Email</label>
                <input id='email' className='border rounded-[40px]  relative bg-gray-100 p-2' name='email' type='email' value={email} onChange={handleChange}/>
                {errors.email && <span className='text-red-700'>{errors.email}</span>}
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='text-green-700'>Password</label>
                <input id='password' className='border rounded-[40px]  relative bg-gray-100 p-2' name='password' type='password' value={password}  onChange={handleChange}/>
                {errors.password && <span className='text-red-700'>{errors.password}</span>}
            </div>
            </div>
            <p className=' flex items-center ml-[35px] mr-[90px] py-2'><input className='mr-2' type='checkbox'/>Remember Me</p>
            <button type='submit' onClick={async() =>await sendCode()} className='w-[200px] rounded-[40px]  h-[40px] ml-[180px] mr-[180px]items-center bg-green-600 hover:bg-green-900  relative  text-white'>Register</button>
            <p className='text-center py-8'>Already have an account?<a href='/login'>Login Now</a></p>
        </form>
    </div>
    </div>
    
    </div>:
    <div className="relative w-full h-full bg-banner bg-cover">
    <div className='relative w-full h-screen bg-zinc-400/80 ]'>
    <div className='flex justify-center items-center h-full'>
        <div className=' max-w-[400px] w-full rounded-[40px] mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>OTP Verify</h2>
            <div  className='flex flex-col mb-4'>
                <label>CODE</label>
                <input className='border rounded-[40px] relative bg-gray-100 p-2' name='phone_number' onChange={(e) =>setCode(e.target.value)} type='text'/>
    
                
            </div>
            <button onClick={async() =>await verifyCode()} className='w-full rounded-[40px] py-3 mt-8 bg-green-600 hover:bg-green-900 relative text-white'>Verify</button>
        </div> 
    </div>
    </div>
    </div>
  )
}


export default Register;