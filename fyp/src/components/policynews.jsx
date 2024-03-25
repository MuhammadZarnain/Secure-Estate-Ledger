
import React from 'react'
import Sidebar from './sidebar';
export default function policy_news({ contract, userAddress })
{
 
return(
  
<div className="bg-white flex flex-col items-stretch">
<div className="w-full max-md:max-w-full">
<div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
<Sidebar contract={contract} userAddress={userAddress} />
<div className='relative w-full h-full'>
<div className='relative w-full h-screen white'> 

        <form className=' max-w-[500px] w-full rounded-[40px] mt-10 mx-auto bg-gray-100 p-8'>
            <h2 className='text-2xl font-bold text-center py- '>NEWS LETTER AND POLICCY</h2>
         
<div className='flex flex-row mb-4 text-center'>
    <div className='flex flex-col mr-4 '>
        <label style={{ color: 'green' }}><b>Policy for Land Registration "LAND ADMINISTRATION SYSTEM IN PAKISTAN – CURRENT
SITUATION AND STAKEHOLDERS’ PERCEPTION" updated on 13-03-2024 </b></label>
<a href="https://www.fig.net/resources/proceedings/fig_proceedings/fig2010/papers/fs03f/fs03f_ali_nasir_3901.pdf"  ><b>CLICK HERE!</b></a>
    </div>
    
</div>

<div className='flex flex-row mb-4 text-center '>
    <div className='flex flex-col mr-4'>
        <label style={{ color: 'green' }}><b>Policy for Property Rights In Pakistan "Laws, Regulations, Transfers & Enforcement" updated on 1-09-2020</b></label>
        <a href="https://pide.org.pk/research/property-rights-in-pakistan-laws-regulations-transfers-enforcement/"  ><b>CLICK HERE!</b></a>
    </div>
    
</div>
 <div  className='flex flex-col mb-4 text-center'>
                <label style={{ color: 'green' }}><b>"Policies of Governement of Pakistan Regarding the land of Oversea's Pakistani"updated on 3-08-2022</b></label>
                <a href="http://punjablaws.gov.pk/laws/36a.html"  ><b>CLICK HERE!</b></a>
            </div>
           
            
        </form> 
        
    </div>

</div>
</div>
</div>
</div>

    );
    
}