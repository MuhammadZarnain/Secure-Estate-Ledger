import React from 'react';
import pic from "../assets/picture.png"
import Sidebar from './sidebar';

const UserDashboard = ({ contract, userAddress }) => {
  
  return (
    <div className="bg-white flex flex-col items-stretch">
    <div className="w-full max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <Sidebar contract={contract} userAddress={userAddress}/>



        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="self-center flex w-full max-w-[1099px] flex-col items-stretch mt-5 px-5 max-md:max-w-full">
              <a href='/transfer'><div className="text-zinc-800 text-5xl font-bold leading-10 max-md:max-w-full">
                Transferable Land
              </div></a>
              <div className="mt-4 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch bg-zinc-200 flex w-full grow flex-col mx-auto pt-2 px-2 max-md:mt-6">
                      <div className="flex justify-between gap-4 items-start">
                        <div className="text-zinc-800 text-base leading-6 grow whitespace-nowrap">
                          In Progress
                        </div>
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee8b57a48456e39a10c880cc7b402844929e8557860f75ec0b3a44cb3837d8d?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                      </div>
                      <div className="items-start border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex w-full flex-col mt-2 pr-2 py-2 border-solid">
                        <div className="self-stretch text-zinc-800 text-xs leading-4 whitespace-nowrap max-md:ml-2">
                          Approval
                        </div>
                        <div className="self-stretch text-zinc-800 text-base leading-6 whitespace-nowrap mt-2 max-md:ml-2">
                          Land Ownership
                        </div>
                        <img
                          loading="lazy"alt=''
                          srcSet={pic}
                          className="aspect-[1.77] object-contain object-center w-full justify-center items-center self-stretch overflow-hidden mt-2 max-md:ml-2"
                        />
                        <img
                          loading="lazy"alt=''
                          src={"https://cdn.builder.io/api/v1/image/assets/TEMP/ecc8c2918124d57698695427b012bc4b449c48325ccbd371b6d94e6692e8ef5f?"}
                          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden max-w-full mt-2 self-start"
                        />
                        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2 max-md:ml-2">
                          <div className="items-stretch flex gap-4">
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5994f9d887a4044875ab00ac21a38c459de8e02fe877798c6ef3e0f949e509ba?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5c050251a8b4eb2dee0179fa0a41431da86bbe0afdd9c48d599b29382f2c1a?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca7c97d201c38658a301dc99f6885c8e8a07553c91f22c55f4e1c71306d684f?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1da9ac3ff70240c05a8308bfbe953d856963f88a176cd26c943a663b26d3cbbf?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <img
                            loading="lazy"alt=''
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee8b57a48456e39a10c880cc7b402844929e8557860f75ec0b3a44cb3837d8d?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                          />
                        </div>
                      </div>
                      <div className="items-start border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex w-full flex-col mt-2 pr-2 py-2 border-solid">
                        <div className="self-stretch text-zinc-800 text-xs leading-4 whitespace-nowrap max-md:ml-2">
                          Transfership
                        </div>
                        <div className="self-stretch text-zinc-800 text-base leading-6 whitespace-nowrap mt-2 max-md:ml-2">
                          Documents Verification Pending
                        </div>
                        <img
                          loading="lazy"alt=''
                          srcSet={pic}
                          className="aspect-[1.77] object-contain object-center w-full justify-center items-center self-stretch overflow-hidden mt-2 max-md:ml-2"
                        />
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a95b581febabebbd5e9a774f7a4f975ad73a9167fd3e7b3f1bcd6e90260173b?"
                          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden max-w-full mt-2 self-start"
                        />
                        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2 max-md:ml-2">
                          <div className="items-stretch flex gap-4">
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc24fbc77f7d37c1c1bd52adcaf9aecbf09a695d27148bbce3b231f6aef1f0a0?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5c050251a8b4eb2dee0179fa0a41431da86bbe0afdd9c48d599b29382f2c1a?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56f760f8e5c9847fe0d405e86e020e3681ab6a6192e3a37b6337f6306f764ed0?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1da9ac3ff70240c05a8308bfbe953d856963f88a176cd26c943a663b26d3cbbf?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <img
                            loading="lazy"alt=''
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee8b57a48456e39a10c880cc7b402844929e8557860f75ec0b3a44cb3837d8d?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch bg-zinc-200 flex w-full flex-col mx-auto p-2 max-md:mt-6">
                      <div className="flex justify-between gap-4 items-start">
                        <div className="text-zinc-800 text-base leading-6 grow whitespace-nowrap">
                          Ledgers
                        </div>
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2e13c2bcdb1bc8f50c7c3543b9489859ab41a026096117949c05fe89b3cfe5?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c24af5540b0cd83bfbb1a1c95225d16f178cf4f2d8a425202cba991db95b742e?"
                          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden max-w-full mt-2 self-start"
                        />
                        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2 max-md:ml-2">
                          <div className="items-stretch flex gap-4">
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dd5de2dde4e744f25dc3402b067531477e75ed0b8dec6ed5fac330ca776873b?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f827a098901936fe69d40d4ecbaa722d891d1c55cedb88db71b7e92d863b6187?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7264731dc054b9bef1917d0cfc0ed9477bd5e1a93c80240ea719b70531983d45?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3ddd43b2f14b8d60cc3a301cb6c3b2778dfc79bf7116b95711e7fa0a6d0f45b?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <img
                            loading="lazy"alt=''
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2e13c2bcdb1bc8f50c7c3543b9489859ab41a026096117949c05fe89b3cfe5?"
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/272230e5b3cd0ef4993c3185078e6fe0e3da515be7f88e8bcdf760e92e30669e?"
                          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden max-w-full mt-2 self-start"
                        />
                        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2 max-md:ml-2">
                          <div className="items-stretch flex gap-4">
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9cdd81322cd1362c31a7bba1c1fe2adc6210563223a61b988a158db40865936?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f827a098901936fe69d40d4ecbaa722d891d1c55cedb88db71b7e92d863b6187?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f622df1f31f16eab22d2cab326051a47d8e23d6060ea72302acb3982e0609c5?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3ddd43b2f14b8d60cc3a301cb6c3b2778dfc79bf7116b95711e7fa0a6d0f45b?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <img
                            loading="lazy"alt=''
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2e13c2bcdb1bc8f50c7c3543b9489859ab41a026096117949c05fe89b3cfe5?"
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0a95745470629b70beadab80b22c013b9fc356e3cf9ca852ada4aaf405ddb2?"
                          className="aspect-[3] object-contain object-center w-[72px] items-start overflow-hidden max-w-full mt-2 self-start"
                        />
                        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-2 max-md:ml-2">
                          <div className="items-stretch flex gap-4">
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a85a4323e0b87d012f7ca1c4cdd9e6a398963796283e09cddc8c5991b71f75e?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f827a098901936fe69d40d4ecbaa722d891d1c55cedb88db71b7e92d863b6187?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a4463cbdec08c26275bd090a0a4d4c721938e69d121d2c18d789dbf4f9623f?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                              loading="lazy"alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3ddd43b2f14b8d60cc3a301cb6c3b2778dfc79bf7116b95711e7fa0a6d0f45b?"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <img
                            loading="lazy"alt=''
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2e13c2bcdb1bc8f50c7c3543b9489859ab41a026096117949c05fe89b3cfe5?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                          />
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-2 mt-2">
                        <img
                          loading="lazy"alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a85a4323e0b87d012f7ca1c4cdd9e6a398963796283e09cddc8c5991b71f75e?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-zinc-800 text-base leading-6 grow whitespace-nowrap self-start">
                          New Task
                        </div>
                      </div>
                    </div>
                  </div>
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