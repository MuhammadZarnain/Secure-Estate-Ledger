import React from 'react'
import banner from '../assets/banner.png'
import centerpic from '../assets/center-home.png'
import lefttop from '../assets/left-top.png'
import leftbottom from '../assets/left-bottom.png'
import righttop from '../assets/right-top.png'
import rightbottom from '../assets/right-bottom.png'
import person from '../assets/body-outline.png'
import house from '../assets/home-outline.png'
import report from '../assets/Report.png'


export default function Home(){
    return(
        <div className="bg-white flex flex-col">

       <div className='relative w-full h-full bg-banner bg-cover'> 
       <div className="flex-col overflow-hidden self-stretch relative bg-zinc-950/60 flex min-h-[683px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="relative flex w-[680px] max-w-full flex-col items-stretch mt-40 mb-40 max-md:my-10 max-sm:w-[698px]">
            <div className="text-white text-center text-2xl font-bold leading-4 self-center whitespace-nowrap">
              <span>Welcome To</span>
            </div>
            <div className="text-white text-center text-5xl font-bold leading-5 mt-12 max-md:max-w-full max-md:text-3xl max-md:mt-10 ">
              <span>SECURE ESTATE LEDGER</span>
            </div>
            <div className="text-white text-center text-2xl font-bold leading-8 self-center max-w-[465px] mt-14 max-md:max-w-full max-md:mt-10">
              To Reform and Modernize the System of Land Records
            </div>
          </div>
        </div>
        </div>
        <div className="bg-slate-100 self-stretch w-full mt-36 pl-20 py-px max-md:max-w-full max-md:mt-10 max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full max-md:text-2xl ">
                  <span>Register and secure your land today!</span>
                </div>
                <a href='./register'className="text-white text-center text-xl font-bold leading-5 whitespace-nowrap items-stretch bg-[#197902] justify-center mt-5 px-14 py-7 rounded-[47.273px] self-start max-md:mt-10 max-md:px-5">
                  <span>Get started</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow flex-col justify-center items-stretch w-full py-px max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet={banner}
                  alt=''
                  className="aspect-[1.1] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-black text-4xl font-bold leading-5 self-stretch items-stretch text-center justify-between gap-3.5 mt-28 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 max-md:text-2xl">
          <span>ABOUT US</span>
        </div>
        <div className="bg-slate-100 self-stretch w-full mt-20 px-5 py-px max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet={banner}
                alt=''
                className="aspect-[1.1] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center text-zinc-600 text-2xl leading-10 my-auto max-md:max-w-full max-md:mt-10">
                <span>Welcome to Secure Estate Ledger, where innovation meets security
                in the world of land registration. Our mission is simple yet
                transformative: to revolutionize land registration through the
                power of blockchain technology, making property transactions
                secure, transparent, and efficient.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black text-4xl font-bold leading-5 grow shrink basis-auto self-stretch text-center items-stretch justify-between gap-5 mt-28 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 max-md:text-2xl">
          <span>VISION & MISSION</span>
        </div>
        <div className="text-zinc-800 text-2xl leading-8 bg-stone-200 self-stretch w-full justify-center items-stretch mt-20 pt-24 pb-24 px-12 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-10">
         <span> &quot;Our mission is to modernize and enhance land registration through
          blockchain technology, revolutionizing property ownership and
          management. We are committed to delivering secure, transparent, and
          efficient solutions that empower individuals and organizations in their
          real estate.
          <br />
          Our vision is to create a future where land registration is synonymous
          with security, transparency, and accessibility. We aspire to build a
          global ecosystem where property transactions are seamless, fraud-proof,
          and cost-effective. Through the power of blockchain, we aim to make
          property ownership and management easier and more reliable, ultimately
          driving positive change in real estate markets worldwide.
          <br /></span>
        </div>
        <div className="text-black text-4xl font-bold leading-5 self-stretch text-center items-stretch justify-between gap-5 mt-40 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 max-md:text-2xl">
          <span>GALLERY</span>
        </div>
        <div className=" bg-white max-w-[842px] mt-12 mx-60 items-center py-12 max-md:mx-0 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-center my-auto max-md:mt-10">
            <img
              loading="lazy"
              srcSet={lefttop}
                alt=''
              className="aspect-[1.01] object-contain object-center w-[180px] overflow-hidden"
            />
            <img
              loading="lazy"
              srcSet={leftbottom}
                alt=''
              className="aspect-[1.01] object-contain object-center w-[180px] overflow-hidden mt-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet={centerpic}
            alt=''
            className="aspect-square object-contain object-center w-full overflow-hidden my-auto max-md:mt-10"
          />
        </div>
        <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-center my-auto max-md:mt-10">
            <img
              loading="lazy"
              srcSet={righttop}
              alt=''
              className="aspect-square object-contain object-center w-[179px] overflow-hidden"
            />
            <img
              loading="lazy"
              srcSet={rightbottom}
              alt=''
              className="aspect-square object-contain object-center w-[179px] overflow-hidden mt-4"
            />
          </div>
        </div>
      </div>
    </div>
        <div className="bg-white self-stretch flex w-full flex-col items-stretch mt-3.5 pl-1 pr-4 py-12 max-md:max-w-full">
          <div className="text-black text-4xl font-bold leading-5 grow shrink basis-auto items-stretch text-center justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:text-2xl">
          <span>INFORMATION DESK</span>
          </div>
          <div className="self-center flex w-full max-w-[1239px] items-stretch justify-between gap-2 mt-40 mb-11 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:my-10">
            <div className="flex flex-col items-stretch">
              <img
                loading="lazy"
                src={report}
                alt=''
                className="aspect-[0.94] object-contain object-center w-24 justify-center items-center overflow-hidden self-center max-w-full"
              />
              <div className="text-[#197902] text-opacity-50 text-center text-5xl font-bold leading-[50px] self-center whitespace-nowrap mt-7">
                <span className="text-black">
                  <span className="text-black">99</span>
                </span>
                <span className="text-[#197902]">
                  <span className="text-[#197902]">%</span>
                </span>
              </div>
              <div className="text-black text-center text-2xl font-bold leading-9 whitespace-nowrap mt-5 max-md:text-xl">
              <span>Customer satisfaction</span>
              </div>
            </div>
            <div className="self-center flex flex-col items-center my-auto">
              <img
                loading="lazy"
                src={person}
                alt=''
                className="aspect-square object-contain object-center w-[88px] overflow-hidden max-w-full"
              />
              <div className="text-[#197902] text-opacity-50 text-center text-5xl font-bold leading-[50px] self-stretch whitespace-nowrap mt-8">
                <span className="text-black">
                  <span className="text-black">1250</span>
                </span>
                <span className="text-[#197902]">
                  <span className="text-[#197902]">+</span>
                </span>
              </div>
              <div className="text-black text-center text-2xl font-bold leading-9 self-stretch whitespace-nowrap mt-5 max-md:text-xl">
              <span>Active users</span>
              </div>
            </div>
            <div className="flex flex-col items-stretch mt-2.5 self-start">
              <img
                loading="lazy"
                src={house}
                alt=''
                className="aspect-square object-contain object-center w-[84px] overflow-hidden self-center max-w-full"
              />
              <div className="text-[#197902] text-opacity-50 text-center text-5xl font-bold leading-[50px] self-center whitespace-nowrap mt-9">
                <span className="text-black">
                  <span className="text-black">2254</span>
                </span>
                <span className="text-[#197902]">
                  <span className="text-[#197902]">+</span>
                </span>
              </div>
              <div className="text-black text-center text-2xl font-bold leading-9 whitespace-nowrap mt-5 max-md:text-xl">
              <span>Land Registered</span>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

