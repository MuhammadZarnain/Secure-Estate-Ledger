import React from 'react'

const adminSidebar = () => {
  return (
    <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch">
                  
                  <div className="justify-center items-start border-r-[color:var(--CoolGray-20,#DDE1E6)] border-l-[color:var(--CoolGray-20,#DDE1E6)] bg-white z-[1] flex mt-0 w-full flex-col px-4 py-12 border-r border-solid border-l">
                    <div className="items-stretch self-center flex gap-1 mt-4">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9aeed7e9e64972bf23675492b3aebcb50f9f48c4bdbd90a90bdce10daca6111?"
                        className="aspect-square object-contain object-center w-6 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-500 text-xl font-bold leading-6 grow whitespace-nowrap self-start">
                      
                      </div>
                    </div>
                    <div className="justify-center items-center self-stretch flex gap-3 mt-9 pl-10 pr-12 max-md:px-5">
                     {/*  <div className="justify-center items-center bg-slate-100 self-stretch flex aspect-square flex-col w-12 h-12 px-3 rounded-[100px]">
                        <img
                          loading="lazy"
                          alt=''
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/331817604c39a1f7a95a7689e95dc368a6c196f86eb4bfce5feae7ad3091b7ff?"
                          className="aspect-square object-contain object-center w-full overflow-hidden"
                        />
                      </div>
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e57a63e972b4e352ced586b154b97431563dc78a312c1c57c24ff60515d0462?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="justify-center items-center self-stretch flex aspect-square flex-col pl-3 pr-1.5 py-2.5">
                        <img
                          loading="lazy"
                          alt=''
                          srcSet="..."
                          className="aspect-[1.07] object-contain object-center w-[30px] overflow-hidden"
                        />
                      </div> */}
                    </div>
                    <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-30,#C1C7CD)] bg-slate-100 flex justify-between gap-2 mt-4 px-4 py-8 border-b border-solid">
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f8f30bfa13ba77ab6fea18abbdedd112517b8c19e0170c616d12357e6a942a?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-zinc-500 text-base leading-6 grow whitespace-nowrap self-start">
                        Search for...
                      </div>
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
                      <a href='/transactionledgers'>Transaction Ledgers</a>
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
                        User Info
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
                      <a href='/updatePolicy'> Policies & Regulations</a>
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
                        Track Request
                      </div>
                      <div className="text-white text-center text-xs leading-4 whitespace-nowrap justify-center items-stretch bg-zinc-500 self-center aspect-[1.7777777777777777] my-auto px-1.5 py-px rounded-xl">
                        99+
                      </div>
                      <img
                        loading="lazy"
                        alt=''
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdf7d14093091de023b13d15a77f788af0bee1e9e05e56d0fd0606fd93cfbc84?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <div className="text-neutral-100 text-base font-medium leading-4 tracking-wide whitespace-nowrap justify-center items-center self-stretch bg-lime-800 mt-80 mb-4 px-16 py-2.5 rounded-[40px] max-md:mt-10 max-md:px-5">
                      Log Out
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default adminSidebar