import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Buttons from '../components/Shared/Buttons';





const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-[16px] text-white">
      <div>
        {/* <Link href="./">
          <Image
            src="/assets/logo.png"
            alt=""
            width={120}
            height={100}
            unoptimized
          />
        </Link> */}
        <p>AquaVault</p>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-12">
          <li className="relative">
            Products{" "}
            {/* <span className=" absolute w-[65px] h-[3px] bg-[#ae701390] rounded-md bottom-[-4px] left-0"></span> */}
          </li>
          <li>Business</li>
          <li>Developer</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <Buttons/>
      </div>
    </nav>
  );
}

export default Navbar