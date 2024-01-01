import {React, useState} from 'react'

const SERVER_IP = 'http://localhost:5005';

export default function OTP({Phone}){
    const [code, setCode] = useState("")
    console.log(Phone);
    async function verifyCode() {
      
      await fetch(SERVER_IP + '/api/verify-code', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Phone: Phone, code: code })
      }).then(response => {
        console.log(response);
        if (response.ok === true) {
          alert("Number verified successfully");
        } else {
          alert("Oh no we have an error");
        }
      });
    }

  return (

    <div className="relative w-full h-full bg-banner bg-cover">
    <div className='relative w-full h-screen bg-zinc-400/80 ]'>
    <div className='flex justify-center items-center h-full'>
        <div className=' max-w-[400px] w-full rounded-[40px] mx-auto bg-white p-8' >
            <h2 className='text-4xl font-bold text-center py-4'>OTP Verify</h2>
            <div  className='flex flex-col mb-4'>
                <label>CODE</label>
                <input className='border rounded-[40px] relative bg-gray-100 p-2' name='code' onChange={(e) =>setCode(e.target.value)} type='text'/>
    
                
            </div>
            <button onClick={async() =>await verifyCode()} className='w-full rounded-[40px] py-3 mt-8 bg-green-600 hover:bg-green-900 relative text-white'>Verify</button>
        </div> 
    </div>
    
    </div>
    </div>

    
  );
}


