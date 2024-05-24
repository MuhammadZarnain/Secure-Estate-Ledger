import React from "react";
import Sidebar from "./sidebar";

export default function userinfo({ contract, userAddress }) {
    return (
      <div className="bg-white flex flex-col items-stretch">
        <div className="w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <Sidebar contract={contract} userAddress={userAddress}/>

                        </div>
                        </div>
                        </div>
                );
                }