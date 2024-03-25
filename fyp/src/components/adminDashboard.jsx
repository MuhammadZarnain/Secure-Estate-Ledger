import React, { useEffect, useState } from 'react';
import circle from "../assets/circle chart.png"
import image6 from "../assets/image 6.png"
import image7 from "../assets/image 7.png"
import chart from "../assets/chart.png"

const AdminDashboard = () => {
 
  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
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
                  <div className="justify-center items-center bg-slate-100 self-stretch flex aspect-square flex-col w-12 h-12 px-3 rounded-[100px]">
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
                  </div>
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
                    Register Land
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
                    Transfer Land
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
                    Transaction Ledgers
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
          <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full">
              
              <div className="items-stretch self-center flex w-full max-w-[1125px] flex-col p-6 max-md:max-w-full max-md:px-5">
                <div className="text-zinc-800 text-5xl font-bold leading-10 max-md:max-w-full">
                  Dashboard
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex grow basis-[0%] flex-col p-4 border-solid">
                    <div className="text-zinc-500 text-base leading-6 capitalize">
                      Total Land
                    </div>
                    <div className="items-stretch flex justify-between gap-2">
                      <div className="text-zinc-800 text-2xl font-bold leading-7 grow whitespace-nowrap">
                        11.8M
                      </div>
                      <div className="text-zinc-800 text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-slate-100 aspect-[2.5416666666666665] px-3 py-0.5 rounded-xl self-start">
                        +2,5%
                      </div>
                    </div>
                  </div>
                  <div className="items-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex grow basis-[0%] flex-col p-4 border-solid">
                    <div className="text-zinc-500 text-base leading-6">
                      New Land
                    </div>
                    <div className="items-stretch flex justify-between gap-2">
                      <div className="text-zinc-800 text-2xl font-bold leading-7 grow whitespace-nowrap">
                        8.236K
                      </div>
                      <div className="text-white text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-zinc-500 aspect-[2.375] px-3 py-0.5 rounded-xl self-start">
                        -1,2%
                      </div>
                    </div>
                  </div>
                  <div className="items-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex grow basis-[0%] flex-col p-4 border-solid">
                    <div className="text-zinc-500 text-base leading-6">
                      Active Users
                    </div>
                    <div className="items-stretch flex justify-between gap-2">
                      <div className="text-zinc-800 text-2xl font-bold leading-7 grow whitespace-nowrap">
                        2.352M
                      </div>
                      <div className="text-zinc-800 text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-slate-100 aspect-[2.4166666666666665] px-3 py-0.5 rounded-xl self-start">
                        +11%
                      </div>
                    </div>
                  </div>
                  <div className="items-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex grow basis-[0%] flex-col p-4 border-solid">
                    <div className="text-zinc-500 text-base leading-6">
                      New Users
                    </div>
                    <div className="items-stretch flex justify-between gap-2">
                      <div className="text-zinc-800 text-2xl font-bold leading-7 grow whitespace-nowrap">
                        8K
                      </div>
                      <div className="text-zinc-800 text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-slate-100 aspect-[2.5416666666666665] px-3 py-0.5 rounded-xl self-start">
                        +5,2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                      <div className="items-stretch self-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex w-full grow flex-col mx-auto pt-4 pb-12 px-2.5 border-solid max-md:mt-6">
                        <div className="text-zinc-800 text-lg font-bold leading-5 max-md:mr-1">
                          Target
                        </div>
                        <div className="items-stretch flex justify-between gap-4 mt-4 max-md:mr-1">
                          <div className="justify-between items-center flex gap-1">
                            <img
                              loading="lazy"
                              alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6764820d12774f0cc0983df3938d9a14013f2478512d2c3bff7dae02e1c665f3?"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
                              Achieved
                            </div>
                          </div>
                          <div className="justify-between items-center flex gap-1">
                            <img
                              loading="lazy"
                              alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5883ecbbe1470f69ca0b7f96e97aa8c110557dfd9d6afd1cae5722b263946f2b?"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
                              {" "}
                              Remaining
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          alt=''
                          src={circle}
                          className="aspect-[1.16] object-contain object-center w-full fill-zinc-200 overflow-hidden mt-8 mb-3"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch self-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex w-full grow flex-col mx-auto pt-4 pb-8 px-2 border-solid max-md:mt-6">
                        <div className="text-zinc-800 text-lg font-bold leading-5 whitespace-nowrap">
                          Most Active Account Types
                        </div>
                        <div className="items-stretch flex justify-between gap-4 mt-4">
                          <div className="justify-between items-center flex gap-1">
                            <img
                              loading="lazy"
                              alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d571e149257803e3b033a4dcd7f319bfb9d0ffb4927d176011737bd40ef1467b?"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
                              Very Active
                            </div>
                          </div>
                          <div className="justify-between items-center flex gap-1">
                            <img
                              loading="lazy"
                              alt=''
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/de8e501ba4e33a8a7a404b131847c94efa7210341742682018435afe1004c7f6?"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
                              {" "}
                              Inactive
                            </div>
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          alt=''
                          src={image6}
                          className="aspect-square object-contain object-center w-full overflow-hidden mt-8"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex grow flex-col w-full pt-4 pb-9 px-4 border-solid max-md:max-w-full max-md:mt-6">
                        <img
                          loading="lazy"
                          alt=''
                          src={image7}
                          className="aspect-[1.74] object-contain object-center w-full fill-zinc-200 stroke-[0.5px] stroke-white overflow-hidden max-md:max-w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch self-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex grow flex-col w-full p-4 border-solid max-md:max-w-full max-md:mt-6">
                        <div className="text-zinc-800 text-lg font-bold leading-5 max-md:max-w-full">
                          Users by State
                        </div>
                        <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-zinc-800 text-base leading-6">
                            Punjab
                          </div>
                          <div className="justify-between items-stretch flex gap-4">
                            <div className="text-zinc-800 text-right text-base leading-6">
                              27.5%
                            </div>
                            <div className="text-zinc-500 text-right text-base leading-6">
                              4.5M
                            </div>
                          </div>
                        </div>
                        <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-zinc-800 text-base leading-6">
                            FATA
                          </div>
                          <div className="justify-between items-stretch flex gap-4">
                            <div className="text-zinc-800 text-right text-base leading-6">
                              11.2%
                            </div>
                            <div className="text-zinc-500 text-right text-base leading-6">
                              2.3M
                            </div>
                          </div>
                        </div>
                        <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-zinc-800 text-base leading-6">
                            KPK
                          </div>
                          <div className="justify-between items-stretch flex gap-4">
                            <div className="text-zinc-800 text-right text-base leading-6">
                              9.4%
                            </div>
                            <div className="text-zinc-500 text-right text-base leading-6">
                              2M
                            </div>
                          </div>
                        </div>
                        <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-zinc-800 text-base leading-6">
                            Sindh
                          </div>
                          <div className="justify-between items-stretch flex gap-4">
                            <div className="text-zinc-800 text-right text-base leading-6">
                              8%
                            </div>
                            <div className="text-zinc-500 text-right text-base leading-6">
                              1.7M
                            </div>
                          </div>
                        </div>
                        <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-zinc-800 text-base leading-6">
                            Balochistan
                          </div>
                          <div className="justify-between items-stretch flex gap-4">
                            <div className="text-zinc-800 text-right text-base leading-6">
                              7.9%
                            </div>
                            <div className="text-zinc-500 text-right text-base leading-6">
                              1.6M
                            </div>
                          </div>
                        </div>
                        <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-zinc-800 text-base leading-6">
                            Gilgit Baltistan
                          </div>
                          <div className="justify-between items-stretch flex gap-4">
                            <div className="text-zinc-800 text-right text-base leading-6">
                              6.1%
                            </div>
                            <div className="text-zinc-500 text-right text-base leading-6">
                              1.2M
                            </div>
                          </div>
                        </div>
                        <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                          <div className="text-zinc-800 text-base leading-6">
                            Azad Kashmir
                          </div>
                          <div className="justify-between items-stretch flex gap-4">
                            <div className="text-zinc-800 text-right text-base leading-6">
                              5.9%
                            </div>
                            <div className="text-zinc-500 text-right text-base leading-6">
                              1M
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch self-stretch border border-[color:var(--CoolGray-20,#DDE1E6)] bg-white flex grow flex-col w-full pt-4 pb-12 px-4 border-solid max-md:max-w-full max-md:mt-6">
                        <div className="text-zinc-800 text-lg font-bold leading-5 max-md:max-w-full">
                          Top 5 Best Selling Users
                        </div>
                        <div className="mt-4 max-md:max-w-full">
                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
                              <img
                                loading="lazy"
                                alt=''
                                src={chart}
                                className="aspect-square object-contain object-center w-[219px] overflow-hidden shrink-0 max-w-full grow max-md:mt-6"
                              />
                            </div>
                            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                              <div className="items-stretch flex flex-col my-auto max-md:mt-10">
                                <div className="justify-between flex gap-1.5 items-start">
                                  <div className="justify-center items-center flex gap-1">
                                    <img
                                      loading="lazy"
                                      alt=''
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d571e149257803e3b033a4dcd7f319bfb9d0ffb4927d176011737bd40ef1467b?"
                                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div className="text-zinc-800 text-base leading-6 self-stretch grow whitespace-nowrap">
                                      User Name
                                    </div>
                                  </div>
                                  <div className="justify-between self-stretch flex gap-4 items-start">
                                    <div className="text-zinc-500 text-right text-base leading-6">
                                      $1.2M
                                    </div>
                                    <div className="text-zinc-800 text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-slate-100 self-stretch aspect-[2.6666666666666665] px-3.5 py-0.5 rounded-xl">
                                      +8,2%
                                    </div>
                                  </div>
                                </div>
                                <div className="justify-between flex gap-1.5 mt-4 items-start">
                                  <div className="justify-center items-center flex gap-1">
                                    <img
                                      loading="lazy"
                                      alt=''
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e19f0bc39eb2177bb6d075e386a994f6be836db7d127acfc8c3b39647eba573?"
                                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div className="text-zinc-800 text-base leading-6 self-stretch grow whitespace-nowrap">
                                      User Name
                                    </div>
                                  </div>
                                  <div className="justify-between self-stretch flex gap-4 items-start">
                                    <div className="text-zinc-500 text-right text-base leading-6">
                                      $800K
                                    </div>
                                    <div className="text-zinc-800 text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-slate-100 self-stretch aspect-[2.6666666666666665] px-5 py-0.5 rounded-xl">
                                      +7%
                                    </div>
                                  </div>
                                </div>
                                <div className="justify-between flex gap-1.5 mt-4 items-start">
                                  <div className="justify-center items-center flex gap-1">
                                    <img
                                      loading="lazy"
                                      alt=''
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace5c6d255241a64326ee8298d7035a0ff109b92ec969cea3b9325863db33923?"
                                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div className="text-zinc-800 text-base leading-6 self-stretch grow whitespace-nowrap">
                                      User Name
                                    </div>
                                  </div>
                                  <div className="justify-between self-stretch flex gap-4 items-start">
                                    <div className="text-zinc-500 text-right text-base leading-6">
                                      $645K
                                    </div>
                                    <div className="text-zinc-800 text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-slate-100 self-stretch aspect-[2.6666666666666665] px-3.5 py-0.5 rounded-xl">
                                      +2,5%
                                    </div>
                                  </div>
                                </div>
                                <div className="justify-between flex gap-1.5 mt-4 items-start">
                                  <div className="justify-center items-center flex gap-1">
                                    <img
                                      loading="lazy"
                                      alt=''
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d7385eabd9ea3b7ef70c3d7e7460f78a865da574c67e4912052c173a5ea834d?"
                                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div className="text-zinc-800 text-base leading-6 self-stretch grow whitespace-nowrap">
                                      User Name
                                    </div>
                                  </div>
                                  <div className="justify-between self-stretch flex gap-4 items-start">
                                    <div className="text-zinc-500 text-right text-base leading-6">
                                      $590K
                                    </div>
                                    <div className="text-white text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-zinc-500 self-stretch aspect-[2.6666666666666665] px-4 py-0.5 rounded-xl">
                                      -6,5%
                                    </div>
                                  </div>
                                </div>
                                <div className="justify-between flex gap-1.5 mt-4 items-start">
                                  <div className="justify-center items-center flex gap-1">
                                    <img
                                      loading="lazy"
                                      alt=''
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/18be799db2754447050f48acb4e2ef115744feec3b10bf3f9325d4a4f76e9dce?"
                                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div className="text-zinc-800 text-base leading-6 self-stretch grow whitespace-nowrap">
                                      User Name
                                    </div>
                                  </div>
                                  <div className="justify-between self-stretch flex gap-4 items-start">
                                    <div className="text-zinc-500 text-right text-base leading-6">
                                      $342K
                                    </div>
                                    <div className="text-zinc-800 text-center text-sm leading-5 whitespace-nowrap justify-center items-stretch bg-slate-100 self-stretch aspect-[2.6666666666666665] px-3.5 py-0.5 rounded-xl">
                                      +1,7%
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
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminDashboard