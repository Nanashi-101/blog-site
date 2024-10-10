import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggleBtn";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-[1240px] w-full flex relative items-center justify-between text-6xl px-4 py-5 mx-auto">
        <Link href="/" className="font-bold tracking-tighter">
          Sam<span className="text-red-600">Blogs</span>
        </Link>
        <div className="flex items-center justify-center gap-5">
          <Link href="https://portfolio-site-olive-two.vercel.app"  className="flex items-center justify-center bg-red-600 text-white font-semibold text-xl dark:hover:text-black px-4 py-2 rounded-3xl hover:bg-black dark:hover:bg-white transition-all ease-in">
            connect with me for work
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
