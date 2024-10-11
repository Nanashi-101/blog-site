import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggleBtn";
import logo from '../../public/blog-pics/newlogonoBg.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-[1220px] w-full flex relative items-center justify-between px-4 py-4 mx-auto">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tighter text-xl">
          <Image src={logo} alt="logo" width={90} height={90} />
          <span>Sam<span className="text-[#D9413B]">Blogs</span></span>
        </Link>
        <div className="flex items-center justify-center gap-5">
          <Link href="https://portfolio-site-olive-two.vercel.app"  className="flex items-center justify-center border-2 border-[#D9413B] text-[#D9413B] font-semibold text-xl dark:hover:text-black px-4 py-2 rounded-3xl hover:bg-[#D9413B] hover:text-white dark:border-white dark:text-white dark:hover:bg-white transition-all ease-in">
            connect with me for work
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
