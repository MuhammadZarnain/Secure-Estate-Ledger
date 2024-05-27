import React from 'react';
import pic from "../assets/picture.png"
import Sidebar from './sidebar'
import OwnedLandDetails from './ownedLandDetails'
const UserDashboard = ({ landContract,contract, userAddress }) => {

  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <Sidebar contract={contract} userAddress={userAddress}/>
        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="self-center flex w-full max-w-[1099px] flex-col items-stretch mt-5 px-5 max-md:max-w-full">
              <div className="text-zinc-800 text-5xl font-bold leading-10 max-md:max-w-full">
                Dashboard
              </div>
              <div className="mt-4 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <OwnedLandDetails landContract={landContract} userAddress={userAddress} />
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch bg-zinc-200 flex w-full flex-col mx-auto p-2 max-md:mt-6">
                      <div className="flex justify-between gap-4 items-start">
                        <div className="text-zinc-800 text-base leading-6 grow whitespace-nowrap">
                          News Flash
                        </div>
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d471888911f387b5c054e3d7520472a9565fb773eb5fd8bd565e75909ae5429?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                      </div>
                      <div className="items-start border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex w-full flex-col mt-2 pr-2 py-2 border-solid">
                        <div className="self-stretch text-zinc-800 text-xs leading-4 whitespace-nowrap max-md:ml-2">
                          Updated Policy
                        </div>
                        <div className="self-stretch text-zinc-800 text-base leading-6 whitespace-nowrap mt-2 max-md:ml-2">
                          Description Top
                        </div>
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/811b3fd6b8945cf13fc7689fe0d088f198aa831cd28e0418c3fbceb2ed0e90a7?"
                          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden max-w-full mt-2 self-start"
                        />
                        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2 max-md:ml-2">
                          <div className="items-stretch flex gap-4">
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1675c09ed9a0e1c9d45ef71a52f1d0cded5cade688b6f93bb6725336b1823?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/233eb37738b31133cadeda350da8e6e4e00cfbfbb5a1184bb1e2e60b5919ecd8?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f4ba74106c4fb04da139225d4dc467088c729050a91cc329d69ba4d9d092da?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79f5f6d4dfd53699049c5cfa9ea2197c1b91a845431ece76f738c4a35e13c27?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <img
                            loading="lazy"alt=''
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d471888911f387b5c054e3d7520472a9565fb773eb5fd8bd565e75909ae5429?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                          />
                        </div>
                      </div>
                      <div className="items-start border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex w-full flex-col mt-2 pr-2 py-2 border-solid">
                        <div className="self-stretch text-zinc-800 text-xs leading-4 whitespace-nowrap max-md:ml-2">
                          revise policy
                        </div>
                        <div className="self-stretch text-zinc-800 text-base leading-6 whitespace-nowrap mt-2 max-md:ml-2">
                          Description Top
                        </div>
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07175c190810f4c039e260fc3f76a0f2f075ac6d0fd9ef5cc424778cfd827ad5?"
                          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden max-w-full mt-2 self-start"
                        />
                        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2 max-md:ml-2">
                          <div className="items-stretch flex gap-4">
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12b7ed85a611608fd4feb86692a75a40401f79afe84150950b2a3e1b20601578?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/233eb37738b31133cadeda350da8e6e4e00cfbfbb5a1184bb1e2e60b5919ecd8?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bbcf8fbd03b71b006705775bbff64077a36494fe26e5dfac902ee343173a6eb?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79f5f6d4dfd53699049c5cfa9ea2197c1b91a845431ece76f738c4a35e13c27?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <img
                            loading="lazy"alt=''
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d471888911f387b5c054e3d7520472a9565fb773eb5fd8bd565e75909ae5429?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                          />
                        </div>
                      </div>
                      <div className="items-start border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex w-full flex-col mt-2 pr-2 py-2 border-solid">
                        <div className="self-stretch text-zinc-800 text-xs leading-4 whitespace-nowrap max-md:ml-2">
                          Category
                        </div>
                        <div className="self-stretch text-zinc-800 text-base leading-6 whitespace-nowrap mt-2 max-md:ml-2">
                          Description Top
                        </div>
                        <img
                          loading="lazy"alt=''
                          srcSet={pic}
                          className="aspect-[1.77] object-contain object-center w-full justify-center items-center self-stretch overflow-hidden mt-2 max-md:ml-2"
                        />
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/811b3fd6b8945cf13fc7689fe0d088f198aa831cd28e0418c3fbceb2ed0e90a7?"
                          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden max-w-full mt-2 self-start"
                        />
                        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2 max-md:ml-2">
                          <div className="items-stretch flex gap-4">
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1675c09ed9a0e1c9d45ef71a52f1d0cded5cade688b6f93bb6725336b1823?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/233eb37738b31133cadeda350da8e6e4e00cfbfbb5a1184bb1e2e60b5919ecd8?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80f4ba74106c4fb04da139225d4dc467088c729050a91cc329d69ba4d9d092da?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79f5f6d4dfd53699049c5cfa9ea2197c1b91a845431ece76f738c4a35e13c27?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <img
                            loading="lazy"alt=''
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d471888911f387b5c054e3d7520472a9565fb773eb5fd8bd565e75909ae5429?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                          />
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-2 mt-2">
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d1675c09ed9a0e1c9d45ef71a52f1d0cded5cade688b6f93bb6725336b1823?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-zinc-800 text-base leading-6 grow whitespace-nowrap self-start">
                          New Task
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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