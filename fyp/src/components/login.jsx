import React,{useState}from 'react';
import loginvalidation from './validation'
import { useNavigate } from 'react-router-dom';
export default function Login({contract, userAddress, setUserAddress}){
    const navigate= useNavigate();
    const [state, setState] = useState({
        email:"",
        password:"",
        });
        const{email,password} = state;
        const[errors,setErrors]= useState({});
        const handleChange =(e) =>{
            setState(prev =>({...prev,[e.target.name]:[e.target.value]}))
        }
        const handleLogin = async (e) => {
            e.preventDefault();
            
            setErrors(loginvalidation(state));
            console.log(state)
            try {
                if(contract){
                    const isValidUser = await contract.loginUser(email.toString(), password.toString());

                    if (isValidUser) {
                      // Login successful
                      console.log('Login successful!');

                      // Perform additional actions if needed
              
                      // Set the logged-in user's address
                      setUserAddress(userAddress);
                      navigate('/Dashboard')
                    } else {
                      // Display an error if login fails
                      setErrors({ login: 'Invalid email or password' });
                    }
               
                }else{
                    console.error("contract doesnot deployed");
                }
               
            } catch (error) {
                console.error('Error logging in user:', error);
            }
            };
                


  return (
    <div className="relative w-full h-full bg-banner bg-cover">
    <div className='relative w-full h-screen bg-zinc-400/80 ]'>
  {/*  <img className="absolute w-full h-full object-cover mix-blend-overlay" src={Imges} alt="banner"/>  */}

    <div className='flex justify-center items-center h-full'>
        <form className=' max-w-[400px] w-full rounded-[40px] mx-auto bg-white p-8' onSubmit={handleLogin}>
            <h2 className='text-4xl font-bold text-center py-4'>Login</h2>
            <div  className='flex flex-col mb-4'>
                <label>CNIC/Email</label>
                <input className='border rounded-[40px] relative bg-gray-100 p-2' name='email' value={email} onChange={handleChange} type='email'/>
                {errors.email && <span className='text-red-700'>{errors.email}</span>}
                
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border rounded-[40px] relative bg-gray-100 p-2' name='password' value={password} onChange={handleChange} type='password'/>
                {errors.password && <span className='text-red-700'>{errors.password}</span>}
            </div>
            <p className=' flex items-center mt-2'><input className='mr-2' type='checkbox'/>Remember Me</p>
            <button type='submit' className='w-full rounded-[40px] py-3 mt-8 bg-green-600 hover:bg-green-900 relative text-white'>Login</button>
            <p className='text-center mt-8'>Don't have an account? <a href='./register'>Register Now</a></p>
        </form> 
    </div>
    </div>
    </div>
  )
}


