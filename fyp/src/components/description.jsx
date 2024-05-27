import React from 'react'
import Sidebar from './sidebar';


export default function rgland({ contract, userAddress }) {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar contract={contract} userAddress={userAddress}/>

          <div className="flex flex-col self-center px-5 py-12 mt-2 w-full bg-white max-w-[1193px] max-md:max-w-full">
      <div className="mt-8 text-xl font-bold tracking-wider leading-5 text-center uppercase text-blue-950 max-md:max-w-full">
        REGISTRATION
      </div>
      <div className="mt-2 text-3xl font-bold leading-8 text-center text-zinc-800 max-md:max-w-full">
        Register Your Own Land Or Register a New Land
      </div>
      <div className="flex flex-col self-center mt-14 mb-5 w-full max-w-[986px] max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-black max-md:mt-10">
                <div className="text-lg leading-6 text-center">
                  Protocol To Follow Before you Register Land:
                </div>
                <div className="mt-5 text-sm leading-5">
                  Obtain Fard from Arazi Record Center
                  <br />
                  Payment of the Stamp Duty Capital Value Tax and Registration
                  Fee at Bank of Punjab Only
                  <br />
                  Hire the Deed Writer or Lawyer by the Customer
                  <br />
                  Execution & Registration of a Deed Before Registration
                  Authority & Mutation in Revenue Record at Sub Registrar Office
                  <br />
                  Submission of Documents at Sub-Registrar Office
                  <br />
                  Online Verification of Receipt of Stamp Paper and Fee Online
                  Verification of Fard Electronic Capturing of Deed Details
                  <br />
                  Automatic Attestation of Mutation by Assistant Director Land
                  Record
                  <br />
                  Scanning of Passed Registry and Online Transmission to Arazi
                  Record CenterApproval of Registry by Sub-Registrar
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-black max-md:mt-10">
                <div className="text-lg leading-6 text-center">
                  Documents Required Before you Register Land:
                </div>
                <div className="mt-5 text-sm leading-5">
                  Land Ownership Proof (in Original)
                  <br />
                  CNIC of Seller, Purchaser and Witnesses
                  <br />
                  Passport (for Foreigners Only)
                  <br />
                  NOC from M/o Interior regarding sale / purchase of land (for
                  Foreigners only)
                  <br />
                  NOC from Foreign Office regarding sale / purchase of land (for
                  Foreigners only)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center self-center px-5 py-2.5 mt-48 text-base font-medium tracking-wide leading-4 text-white whitespace-nowrap bg-[#197902] rounded-[40px] max-md:mt-10">
          <a href='/LandRegistration'>Register Land</a>
        </div>
      </div>
    </div>
          </div>
          </div>
          </div>
              );
              }