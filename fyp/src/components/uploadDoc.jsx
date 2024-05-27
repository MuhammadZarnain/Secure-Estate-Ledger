import React, { useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Updoc({ contract, userAddress }) {
  const [file,setFile]=useState("");
 const [file1,setFile1]=useState("");
  const [file2,setFile2]=useState("");
  const [file3,setFile3]=useState("");
  const navigate = useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    //console.log(file);
  try{

    const fileData = new FormData();
    fileData.append("file",file);

    const responseData = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data:fileData,
      headers:{
        pinata_api_key:"c7ce592f91ef64cd9c24",
        pinata_secret_api_key: "371b874d23c09fda20625ed30017824921f450bf710994be36f1678592539e9c",
        "Content-Type": "multipart/form-data"
      }
    })
// for Cnic image:

const fileData1= new FormData();
fileData1.append("file",file1);

const responseData1 = await axios({
  method: "post",
  url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  data:fileData1,
  headers:{
    pinata_api_key:"c7ce592f91ef64cd9c24",
    pinata_secret_api_key: "371b874d23c09fda20625ed30017824921f450bf710994be36f1678592539e9c",
    "Content-Type": "multipart/form-data"
  }
})

// for NOC image:

const fileData2 = new FormData();
fileData2.append("file",file2);

const responseData2 = await axios({
  method: "post",
  url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  data:fileData2,
  headers:{
    pinata_api_key:"c7ce592f91ef64cd9c24",
    pinata_secret_api_key: "371b874d23c09fda20625ed30017824921f450bf710994be36f1678592539e9c",
    "Content-Type": "multipart/form-data"
  }
})

// for power of attorney


const fileData3 = new FormData();
fileData3.append("file",file3);

const responseData3 = await axios({
  method: "post",
  url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  data:fileData3,
  headers:{
    pinata_api_key:"c7ce592f91ef64cd9c24",
    pinata_secret_api_key: "371b874d23c09fda20625ed30017824921f450bf710994be36f1678592539e9c",
    "Content-Type": "multipart/form-data"
  }
})
    const fileUrl="https://gateway.pinata.cloud/ipfs/" + responseData.data.IpfsHash;
    console.log(fileUrl);

    const fileUrl1="https://gateway.pinata.cloud/ipfs/" + responseData1.data.IpfsHash;
    console.log(fileUrl1);

    const fileUrl2="https://gateway.pinata.cloud/ipfs/" + responseData2.data.IpfsHash;
    console.log(fileUrl2);

    const fileUrl3="https://gateway.pinata.cloud/ipfs/" + responseData3.data.IpfsHash;
    console.log(fileUrl3);
    navigate("/awaiting");

  }catch(err){
    console.log(err);
  }
  }
    return (
      <div className="bg-white flex flex-col items-stretch">
        <div className="w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <Sidebar contract={contract} userAddress={userAddress}/>


        <div className="flex flex-col mt-20 mr-200 text-lg leading-5 items-center w-[1050px]  max-md:w-full max-md:mt-10 max-md:mr-2.5 font-bold">
      <div className="self-end text-center text-black whitespace-nowrap">
        Step 2 of 4
      </div>
      <div className="flex flex-col px-10 py-12 mt-5 rounded-3xl bg-slate-100 h-[650px] w-[750px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-w-full text-2xl leading-5 text-center text-black whitespace-nowrap w-[393px] max-md:ml-2">
          <a href="/LandRegistration"><img 
          alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5ea3c6f8419ffe94502812358689cbee7313d4a5b0586819d614865bddccdf?"
            className="shrink-0 self-start w-6 aspect-[1.09]"
          /></a>
          <div className="items-center ">Registration</div>
        </div>
        <div className="mt-16 text-lime-700 max-md:mt-10 max-md:max-w-full">
          Upload Documents
        </div>
        <div className="items-start pt-6 pr-16 pb-12 pl-6 mt-3 leading-5 bg-white rounded-3xl text-neutral-600 w-[600px] max-md:px-5 max-md:max-w-full">
          <label className=" text-lg clear-both">Prove of Ownership</label><br /><input type="file" onChange={(e)=>setFile(e.target.files[0])}></input>
          <br /> <br /> <br />
         <label className="clear-both"> CNIC</label><br /><input type="file" onChange={(e)=>setFile1(e.target.files[0])}></input>
          <br /> <br /><br />
          <label className="clear-both">NOC</label><br /><input type="file" onChange={(e)=>setFile2(e.target.files[0])} ></input>
          <br /><br /><br />
          <label className="clear-both">Power of Attorny</label><br /><input type="file" onChange={(e)=>setFile3(e.target.files[0])}></input>
        </div>
     
        <div className="flex gap-2 self-center px-12 py-6 mt-5 text-center text-white whitespace-nowrap bg-[#197902] rounded-[40px] max-md:px-5 max-md:mt-10">
          <div className="flex-auto">
           <button type="submit" onClick={handleSubmit}>Continue</button></div>
          <img
            loading="lazy"
            alt=""
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