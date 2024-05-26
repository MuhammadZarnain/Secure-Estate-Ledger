import React from 'react'

const adminSidebar = () => {
  return (
    <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch">
                  
                  <div className="justify-center items-start border-r-[color:var(--CoolGray-20,#DDE1E6)] border-l-[color:var(--CoolGray-20,#DDE1E6)] bg-white z-[1] flex mt-0 w-full flex-col px-4 py-12 border-r border-solid border-l">
                    <div className="items-stretch self-center flex gap-1 mt-4">
                     <a href='/adminDashboard'> <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9aeed7e9e64972bf23675492b3aebcb50f9f48c4bdbd90a90bdce10daca6111?"
                        className="aspect-square object-contain object-center w-6 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
                      /></a>
                    
                    </div>
                    <div className="justify-center items-center self-stretch flex gap-3 mt-9 pl-10 pr-12 max-md:px-5">
                    </div>
                    
                    <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-10,#F2F4F8)] flex justify-between gap-2 mt-4 px-2 py-3 border-b border-solid">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec69bc322ec8315c81a59c9445d999bcda18897a520a766a4caa96be345b02e?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-800 text-base font-medium leading-4 self-center grow whitespace-nowrap my-auto">
                      <a href='/viewLandrecord'>View Land Records</a>
                      </div>
                    </div>
                    <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-10,#F2F4F8)] border-l-[color:var(--CoolGray-10,#F2F4F8)] bg-slate-100 flex justify-between gap-2 px-2 py-3 border-l-2 border-b border-solid">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/acd4378f939c7ec34b92353f1d6c3eaa95610188f3f8244deca0deee5a7dc7e2?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-800 text-base font-medium leading-4 self-center grow whitespace-nowrap my-auto">
                      <a href='/pendingRequest'>Pending Requests</a>
                      </div>
                    </div>
                    <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-10,#F2F4F8)] flex justify-between gap-2 px-2 py-3 border-b border-solid">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e26315a03827dd7d3904620bfc997e4cae032821662fa1f72f491ba17b87ea33?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-800 text-base font-medium leading-4 self-center grow whitespace-nowrap my-auto">
                      <a href='/transactionledgers'>Ownership History</a>
                      </div>
                    </div>
                    <div className="items-stretch self-stretch border border-[color:var(--CoolGray-10,#F2F4F8)] flex justify-between gap-2 px-2 py-3 border-solid">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60428fc5756c29bc6dab4691dc2ada7f8a21dfa4b7f9bbd46e56fbbb0def286e?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-800 text-base font-medium leading-4 self-center grow whitespace-nowrap my-auto">
                        <a href='/userinfo'>User Info </a>
                      </div>
                    </div>
                    <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-10,#F2F4F8)] flex justify-between gap-2 px-2 py-3 border-b border-solid">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c246f1a987f6f49f59f763ebf68538024b4c21b0215f45c4bb66bd7fa78068c8?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-800 text-base font-medium leading-4 self-center grow whitespace-nowrap my-auto">
                      <a href='/updatePolicy'> Policies & Updates</a>
                      </div>
                    </div>
                    <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-10,#F2F4F8)] flex gap-2 pl-2 pr-4 py-3 border-b border-solid">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93799cda4ddabc482a8bc8d6c6469347f56a924c6de2ade895839ca3e4596f17?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-800 text-base font-medium leading-4 my-auto">
                      <a href='/finduser'> Track User Info</a>
                      </div>
                      
                     
                    </div>
                    <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-10,#F2F4F8)] flex gap-2 pl-2 pr-4 py-3 border-b border-solid">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93799cda4ddabc482a8bc8d6c6469347f56a924c6de2ade895839ca3e4596f17?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-800 text-base font-medium leading-4 my-auto">
                      <a href='/findland'> Track Land </a>
                      </div>
                      
                     
                    </div>
                    <div className="text-neutral-100 text-base font-medium leading-4 tracking-wide whitespace-nowrap justify-center items-center self-stretch  bg-[#197902]  mt-10 mb-4 px-16 py-2.5 rounded-[40px] max-md:mt-10 max-md:px-5">
                      Log Out
                    </div>
                    
                  </div>
                </div>
              </div>
  )
}

export default adminSidebar