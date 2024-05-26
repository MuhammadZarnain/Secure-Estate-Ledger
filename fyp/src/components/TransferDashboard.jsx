import React from 'react';
import Sidebar from './sidebar';
import OwnedLandDetails from './ownedLandDetails'
const UserDashboard = ({landContract, contract, userAddress }) => {
  
  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <Sidebar contract={contract} userAddress={userAddress}/>



        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="self-center flex w-full max-w-[1099px] flex-col items-stretch mt-5 px-5 max-md:max-w-full">
              <div className="text-zinc-800 text-5xl font-bold leading-10 max-md:max-w-full">
                Transferable Land
              </div>
              <div className="mt-4 max-md:max-w-full" >
               <a href='/transfer'> <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <OwnedLandDetails landContract={landContract} userAddress={userAddress} />
                 
                </div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserDashboard