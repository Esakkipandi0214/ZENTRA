// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Wattsapp from '../../../public/whatsapp.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-1 bg-[#001219] relative ">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex items-center text-lg">
          <Link href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <svg width="157" height="38" viewBox="0 0 167 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7907_4333)">
<g clip-path="url(#clip1_7907_4333)">
<g clip-path="url(#clip2_7907_4333)">
<path d="M17.8806 28.3778C16.8603 27.7383 15.84 27.6187 10.6214 27.4527C7.27733 27.3575 5.97144 27.2868 5.54428 27.1672C5.04634 27.05 4.83154 26.74 4.83154 26.1469C4.83154 24.985 5.1635 24.8898 9.2447 24.8898C12.6595 24.8898 13.2527 24.9362 13.6579 25.1729C14.0142 25.3877 14.085 25.6001 14.1314 26.4788H18.7813C18.8057 26.1713 18.8057 25.8393 18.8057 25.7441C18.8057 23.8696 18.425 22.8737 17.4779 22.2342C16.3624 21.4751 14.7026 21.2627 10.099 21.2627C6.30341 21.2627 4.12123 21.3579 3.19613 21.5483C1.01395 22.0218 0.159641 23.3741 0.159641 26.3885C0.159641 29.8766 1.25072 30.8725 5.16594 30.9921L6.44742 31.0409L9.01038 31.158L12.806 31.2996C14.3486 31.324 14.705 31.5608 14.705 32.5103C14.705 33.9089 14.705 33.9089 9.53273 33.9089C6.13987 33.9089 5.61751 33.8626 5.16839 33.577C4.79004 33.3402 4.69485 33.0327 4.69485 32.0831H0.0205078V32.8423C0.0205078 35.0244 0.376878 35.9495 1.46796 36.6379C2.58346 37.3506 4.50446 37.563 9.41557 37.563C14.1363 37.563 16.1281 37.4458 17.0776 37.0895C18.7154 36.4719 19.3794 35.1196 19.3794 32.3687C19.3745 30.1573 18.9717 29.0906 17.8806 28.3778Z" fill="white"/>
<path d="M20.1357 25.5316H27.1826V37.3212H32.2353V25.5316H39.2822V21.4993H20.1357V25.5316Z" fill="white"/>
<path d="M60.5403 22.3538C59.3296 21.4287 57.8602 21.2627 51.2405 21.2627C44.6207 21.2627 43.1513 21.4287 41.9406 22.3538C40.7299 23.2789 40.376 24.8922 40.376 29.3054C40.376 33.9553 40.7079 35.5199 41.9406 36.4695C43.1513 37.3946 44.6207 37.5605 51.2868 37.5605C57.8334 37.5605 59.3296 37.3946 60.5379 36.4695C61.7486 35.5444 62.1049 33.9553 62.1049 29.4006C62.1049 24.8678 61.7486 23.2789 60.5403 22.3538ZM56.5787 32.8862C55.9392 33.3597 55.1557 33.4549 51.2868 33.4549C47.3008 33.4549 46.5417 33.3842 45.9022 32.8862C45.3335 32.4346 45.1894 31.7951 45.1894 29.8253C45.1894 27.8091 45.2846 26.9084 45.5702 26.3617C46.0438 25.4366 46.4953 25.3658 51.2405 25.3658C55.6536 25.3658 56.176 25.4366 56.7203 26.0785C57.1475 26.6009 57.289 27.5016 57.289 29.8497C57.289 31.7707 57.1231 32.459 56.5787 32.8862Z" fill="white"/>
<path d="M79.0252 31.2264C79.0008 33.5745 78.93 33.599 73.6405 33.599C68.5635 33.599 68.4927 33.5501 68.4927 29.4933C68.4927 27.0964 68.6831 26.1713 69.2518 25.6977C69.7253 25.3169 70.6041 25.2242 73.6161 25.2242C76.6526 25.2242 78.0537 25.3658 78.4076 25.6758C78.6932 25.9125 78.7396 26.1273 78.7884 27.1696H83.6043V26.3861C83.6043 23.8476 83.1308 22.6857 81.7785 21.9974C80.6875 21.4287 79.2156 21.2627 74.9928 21.2627C66.7132 21.2627 64.9826 21.6654 64.1283 23.8012C63.772 24.6799 63.6768 25.9833 63.6768 29.5178C63.6768 31.5339 63.7231 32.8398 63.7939 33.5501C63.9843 35.1636 64.4578 36.0399 65.5026 36.6354C66.784 37.3702 68.7758 37.5605 74.9684 37.5605C78.4784 37.5605 80.2115 37.419 81.493 37.0138C83.248 36.4451 83.9119 35.2832 83.9119 32.7202C83.9119 32.4835 83.8875 32.1271 83.8631 31.2264H79.0252Z" fill="white"/>
<path d="M114.778 13.7079L114.031 13.1196L93 27.2403H90.3687V21.4993H85.5527V37.3212H90.3687V31.2727H93L100.096 37.3212H107.401L97.4839 29.2565L114.778 13.7079Z" fill="#14A800"/>
<path d="M130.557 33.335H129.657L126.054 21.499H120.24L116.656 33.335H115.778L111.609 21.5942L107.908 24.7674L112.575 37.321H120.047L123.179 25.7193L126.359 37.321H133.787L139.928 21.499H134.827L130.557 33.335Z" fill="white"/>
<path d="M145.794 21.499H140.741V37.3234H145.794V21.499Z" fill="white"/>
<path d="M155.023 33.5254L166.601 25.1286V21.499H147.647V25.4606L158.819 25.2946L147.386 33.6206V37.321H166.957V33.3594L155.023 33.5254Z" fill="white"/>
<path d="M117.343 20.8548L116.687 14.2278C116.548 14.2278 116.406 14.2205 116.267 14.2034L114.854 20.7133C115.676 20.8573 116.511 20.9061 117.343 20.8548Z" fill="#14A800"/>
<path d="M113.24 8.8748L107.487 5.51855C107.091 6.25571 106.789 7.03924 106.581 7.85206L113.091 9.25803C113.135 9.12622 113.184 8.99929 113.24 8.8748Z" fill="#14A800"/>
<path d="M114.326 7.47866C114.48 7.35418 114.646 7.2419 114.819 7.14182L112.129 1.04932C111.358 1.42522 110.638 1.89387 109.979 2.44795L112.341 4.98161L114.326 7.47866Z" fill="#14A800"/>
<path d="M117.111 6.67308L118.514 0.160743C117.692 0.0142881 116.857 -0.032089 116.024 0.0216109L116.693 6.64867C116.832 6.64867 116.971 6.65599 117.111 6.67308Z" fill="#14A800"/>
<path d="M112.981 11.2009L106.354 11.8649C106.468 12.6948 106.681 13.5051 106.988 14.2838L113.086 11.6012C113.044 11.4694 113.007 11.3376 112.981 11.2009Z" fill="#14A800"/>
<path d="M124.206 3.19476C123.626 2.58941 122.976 2.05972 122.271 1.61548L118.922 7.37359C119.034 7.45414 119.142 7.54202 119.242 7.63721L124.206 3.19476Z" fill="#14A800"/>
<path d="M120.147 11.9943L125.908 15.3384C126.301 14.6012 126.601 13.8201 126.809 13.0048L120.296 11.6086C120.252 11.7405 120.204 11.8698 120.147 11.9943Z" fill="#14A800"/>
<path d="M120.401 9.66563L127.028 8.99438C126.913 8.16447 126.698 7.35409 126.388 6.57544L120.296 9.26776C120.337 9.39713 120.374 9.53138 120.401 9.66563Z" fill="#14A800"/>
<path d="M123.399 18.4333L121.17 16.0119L118.971 13.4636C118.839 13.5637 118.7 13.654 118.559 13.7346L121.236 19.8344C122.012 19.4585 122.737 18.9898 123.399 18.4333Z" fill="#14A800"/>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_7907_4333">
<rect width="167" height="37.59" fill="white"/>
</clipPath>
<clipPath id="clip1_7907_4333">
<rect width="167" height="37.59" fill="white"/>
</clipPath>
<clipPath id="clip2_7907_4333">
<rect width="166.958" height="37.59" fill="white" transform="translate(0.0205078)"/>
</clipPath>
</defs>
</svg>

          </Link>
        </div>
        <div className="items-center hidden lg:flex gap-7">
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Home
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Features
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Courses
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Community
          </Link>
          <button className="text-sm font-semibold bg-transparent border-2 border-[#F9B208] rounded-[30px] hover:bg-[#060e15f1] hover:text-[#F9B208] py-1 px-4">
            <p className='bg-[#F9B208] py-1 px-2 rounded-[25px] hover:bg-[#060e15f1]'>App Coming Soon</p>
          </button>
        </div>
        <div className="items-center hidden lg:flex">
          <Image src={Wattsapp} alt="WhatsApp" width={30} height={30} className="filter invert-[1] grayscale mr-5 transition-all duration-300" />
          <button className="px-6 py-2 text-lg font-medium text-[#f8f9fa] hover:text-[#16FF00] hover:border-[#16FF00]/50 rounded-[25px] border-2 backdrop-blur-lg hover:bg-white/10 border-[#f8f9fa]">
            Sign up
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <Image src={Wattsapp} alt="WhatsApp" width={30} height={30} className="filter invert-[1] grayscale mr-4 transition-all duration-300" />
          <button onClick={toggleMenu} className="text-[#f8f9fa] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute left-0 top-16 w-full min-h-[700px] bg-black/80 z-50 flex flex-col items-start space-y-4 p-7 mt-2">
               <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Home
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Features
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Courses
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Community
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Pricing
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            About Us
          </Link>
          <Link href="#" className="text-[#adb5bd] hover:bg-white/10 hover:text-[#16FF00] py-2 px-4 font-semibold text-lg rounded-[25px]">
            Contact Us
          </Link>
          <button className="px-6 py-2 ml-4 text-lg font-medium text-[#16FF00] rounded-[25px] border-2 backdrop-blur-lg bg-[#16FF00]/5 border-[#16FF00]/5">
            Sign up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
