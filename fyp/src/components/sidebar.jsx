import React,{useState,useEffect} from 'react'

const Sidebar = ({ contract, userAddress }) => {
    const [userName, setUserName] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (contract) {
       
          const userDetails = await contract.getUser(userAddress);

         
          const [, fetchedName] = userDetails;

 
          setUserName(fetchedName);
        } else {
          console.error("Contract not deployed");
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserName();
  }, [contract, userAddress]);
  return (
<div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0 relative">
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center justify-between p-4">
        <a href='/Dashboard'>
          <img
            loading="lazy"
            alt=''
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9aeed7e9e64972bf23675492b3aebcb50f9f48c4bdbd90a90bdce10daca6111?"
            className="aspect-square object-contain object-center w-6 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
          />
        </a>
        <div className="text-zinc-500 text-xs font-bold leading-6 grow whitespace-nowrap self-start">
              {userName}
          </div>
        <button onClick={toggleMenu} className="text-zinc-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col items-stretch absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto z-10 bg-white md:bg-transparent shadow-lg md:shadow-none`}>
        <div className="justify-center items-start border-r-[color:var(--CoolGray-20,#DDE1E6)] border-l-[color:var(--CoolGray-20,#DDE1E6)] bg-white z-[1] flex mt-0 w-full flex-col px-4 py-12 border-r border-solid border-l">
          <div className="items-stretch self-center flex gap-1 mt-4">
            <a href='/Dashboard'>
              <img
                loading="lazy"
                alt=''
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9aeed7e9e64972bf23675492b3aebcb50f9f48c4bdbd90a90bdce10daca6111?"
                className="aspect-square object-contain object-center w-6 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <div className="text-zinc-500 text-xs font-bold leading-6 grow whitespace-nowrap self-start">
              {userName}
            </div>
          </div>
          <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-10,#F2F4F8)] flex justify-between gap-2 mt-20 px-2 py-3 border-b border-solid">
            <img
              loading="lazy"
              alt=''
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec69bc322ec8315c81a59c9445d999bcda18897a520a766a4caa96be345b02e?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-800 text-base font-medium leading-4 self-center grow whitespace-nowrap my-auto">
              <a href='/Description'> Register Land </a>
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
              <a href='transferDashboard'>Transfer Land</a>
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
          <div className="items-stretch self-stretch border-b-[color:var(--CoolGray-10,#F2F4F8)] flex justify-between gap-2 px-2 py-3 border-b border-solid">
            <img
              loading="lazy"
              alt=''
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c246f1a987f6f49f59f763ebf68538024b4c21b0215f45c4bb66bd7fa78068c8?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-800 text-base font-medium leading-4 self-center grow whitespace-nowrap my-auto">
              <a href='/policyNewsLtr'>Policies & Updates</a>
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
              <a href='/trackapproval'>Track Request</a>
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
          <div className="text-neutral-100 text-base font-medium leading-4 tracking-wide whitespace-nowrap justify-center items-center self-stretch bg-[#197902] mt-80 mb-4 px-16 py-2.5 rounded-[40px] max-md:mt-10 max-md:px-5">
            <a href='/'>Log Out</a>
          </div>
        </div>
      </div>
    </div>

  )
}


export default Sidebar