import React from 'react'
import Sidebar from './sidebar'
const demoPage = ({ contract, userAddress }) => {
  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar contract={contract} userAddress={userAddress}/>
        
<div className='flex justify-center items-center h-full p-10'>
<div className='relative w-full h-screen white'> 

        <form className=' max-w-[900px] w-full rounded-[40px] mx-auto  bg-gray-100 p-9'>
            <h2 className='text-2xl font-bold text-center py-'>Registration</h2>
         <br/> <br/>
<div className='flex flex-row mb-4 text-left'>
<div className='flex flex-col'>
        <label style={{ color: 'green' }}><b>Land ID</b></label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='landID' type='number' placeholder='Khasra Number' />
       {/* {errors.landid && <span className='text-red-700'>{errors.landid}</span>}  */}
    </div>
    <div className='flex flex-col mr-4 '>
        <label style={{ color: 'green' }}><b>Full Name </b></label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='fname' type='text' placeholder='John Carter' />
        {/* {errors.fname && <span className='text-red-700'>{errors.fname}</span>} */}
    </div>
    <br /> <br/>
    <div className='flex flex-col'>
        <label style={{ color: 'green' }}><b>Father Name</b></label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='fathername' type='text' placeholder='John Carter'/>
        {/* {errors.father_name && <span className='text-red-700'>{errors.father_name}</span>} */}
    </div>
    
</div>
<div className='flex flex-row mb-4 text-left '>
    <div className='flex flex-col mr-4'>
        <label style={{ color: 'green' }}><b>CNIC</b></label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='cnic' type='tel' placeholder='37725-12141109-7' />
       {/*  {errors.cnic && <span className='text-red-700'>{errors.cnic}</span>} */}
    </div>
    <div className='flex flex-col'>
        <label style={{ color: 'green' }}><b>Size</b> </label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='size' type='text' placeholder='Square meters' />
       {/*  {errors.size && <span className='text-red-700'>{errors.size}</span>} */}
    </div>
    <div className='flex flex-col'>
        <label style={{ color: 'green' }}><b>Location</b> </label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='location' type='text' placeholder='Street,Area'/>
       {/*  {errors.location && <span className='text-red-700'>{errors.location}</span>} */}
    </div>
</div>
 <div  className='flex flex-col mb-4 text-left'>
                <label style={{ color: 'green' }}><b>Current Address </b></label>
                <input className='border rounded-[20px]  bg-white p-10 ' name='caddress'  type='text' placeholder='Hno,street,religion'/>
              {/*   {errors.taddress && <span className='text-red-700'>{errors.taddress}</span>} */}
                <label style={{ color: 'green' }}><b>Permanent Address</b></label>
                <input className='border rounded-[20px]  bg-white p-10 ' name='paddress'  type='text' placeholder='Hno,street,religion' />
               {/*  {errors.paddress && <span className='text-red-700'>{errors.paddress}</span>} */}
                <label style={{ color: 'green' }}><b> Email </b></label>
                <input className='border rounded-[40px]  bg-white p-2 ' name='email'  type='text' placeholder='Johncarter@gmail.com'  />
                {/* {errors.email && <span className='text-red-700'>{errors.email}</span>} */}
                
            </div>
           
            <button type='submit' className='w-full rounded-[20px] py-2 mt-8 bg-[#197902] hover:bg-green-900 relative text-white '>Continue</button>
           
        </form> 
        
    </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default demoPage