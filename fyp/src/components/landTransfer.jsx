import React from 'react'
import Sidebar from './sidebar';
export default function land_Transfer({ contract, userAddress })
{
return(
  <div className="bg-white flex flex-col items-stretch">
  <div className="w-full max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <Sidebar contract={contract} userAddress={userAddress}/>



<div className='flex justify-center items-center h-full p-10'>
<div className='relative w-full h-screen white'> 

        <form className=' max-w-[500px] w-full rounded-[40px] mt-10 mx-auto bg-gray-100 p-8'>
            <h2 className='  text-2xl font-bold text-center mr-20 py-'>Transfer</h2>
         
<div className='flex flex-row mb-4 text-left'>
    <div className='flex flex-col mr-4 '>
        <label style={{ color: 'green' }}><b>Full Name </b></label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='fullname' type='text' placeholder='John Carter'/>
    </div>
    <div className='flex flex-col'>
        <label style={{ color: 'green' }}><b>Recipient Name</b></label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='recipient_name' type='text' placeholder='John Carter'/>
    </div>
</div>

<div className='flex flex-row mb-4 text-left '>
    <div className='flex flex-col mr-4'>
        <label style={{ color: 'green' }}><b>CNIC</b></label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='cnic' type='tel' placeholder=''/>
    </div>
    <div className='flex flex-col'>
        <label style={{ color: 'green' }}><b>Recipient CNIC</b> </label>
        <input className='border rounded-[40px] bg-white p-2 text-left' name='r_cnic' type='tel' placeholder='37725-12141109-7'/>
    </div>
</div>
 <div  className='flex flex-col mb-4 text-left'>
                <label style={{ color: 'green' }}><b>Current Address </b></label>
                <input className='border rounded-[20px]  bg-white p-10 ' name='Curr_add'  type='text' placeholder='Hno,street,religion'/>
                <label style={{ color: 'green' }}><b>Permanent Address</b></label>
                <input className='border rounded-[20px]  bg-white p-10 ' name='permanent_add'  type='text' placeholder='Hno,street,religion'/>
                <label style={{ color: 'green' }}><b> Email </b></label>
                <input className='border rounded-[40px]  bg-white p-2 ' name='email'  type='text' placeholder='Johncarter@gmail.com'/>
                
            </div>
           
            <a href='/transferCongrats' type='submit' className='w-full rounded-[20px] py-2 mt-8 bg-green-600 hover:bg-green-900 text-center relative text-white '>Continue</a>
           
        </form> 
        
    </div>

</div>
</div>
</div>
</div> 
    );
    
}