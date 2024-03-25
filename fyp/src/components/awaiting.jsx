import React from "react";
import Sidebar from "./sidebar";

export default function Awaiting({ contract, userAddress }) {
    return (
      <div className="bg-white flex flex-col items-stretch">
        <div className="w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <Sidebar contract={contract} userAddress={userAddress}/>
            <div className="flex flex-col mt-20 mr-200 text-lg leading-5 items-center w-[1050px]  max-md:w-full max-md:mt-10 max-md:mr-2.5 font-bold">
      <div className="self-end text-center text-black whitespace-nowrap">
        Step 3 of 4
      </div>
      <div className="flex flex-col px-10 py-12 mt-5 rounded-3xl bg-slate-100 h-[450px] w-[750px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-w-full text-2xl leading-5 text-center text-black whitespace-nowrap w-[393px] max-md:ml-2">
          <a href="/uploaddoc"><img
            loading="lazy" alt=""
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5ea3c6f8419ffe94502812358689cbee7313d4a5b0586819d614865bddccdf?"
            className="shrink-0 self-start w-6 aspect-[1.09]"
          /></a>
          <div className="items-center">Registration</div>
        </div>
        <div className="mt-16 ml-10 text-lime-800 max-md:mt-10 max-md:max-w-full">
          Awaiting Approval
        </div>
        <div className="mt-7 ml-10 leading-5 text-black text-opacity-60 max-md:max-w-full">
          <ol>
            <li>Your Documents are being reviewed</li>
            <br></br>
            <li>Officer will verify your documents</li>
            </ol> 
        </div>
        <div className="flex gap-2 self-center px-12 py-6 mt-16 text-center text-white whitespace-nowrap bg-[#197902] rounded-[40px] max-md:px-5 max-md:mt-10">
          <div className="flex-auto">
            <a href="/landcongrats">Continue</a></div>
          <img
            loading="lazy" alt=""
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e499001e27b92b2b07b17c088aef4f3f15a8eb63dee839b1a2cf1ce2a9e79375?"
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
      </div>
    </div>
                        </div>
                        </div>
                        </div>
                );
                }