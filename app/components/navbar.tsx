"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggleBtn";
import logo from "../../public/blog-pics/newlogonoBg.png";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaUserAstronaut } from "react-icons/fa6";

const Navbar = () => {
  const [windowSize, setWindowSize] = React.useState<number>(0);
  React.useEffect(() => {
    setWindowSize(window.innerWidth);
    console.log(windowSize);
  }, [windowSize]);
  return (
    <div>
      <nav className="max-w-[1220px] w-full flex relative items-center justify-between px-4 py-4 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tighter text-xl"
        >
          <Image src={logo} alt="logo" className="w-[50px] h-[40px] sm:w-[100px] sm:h-[80px]"/>
          <span>
            Sam<span className="text-[#D9413B]">Blogs</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center justify-center gap-5">
          <AlertDialog>
            <AlertDialogTrigger className="flex items-center justify-center border-2 border-[#D9413B] text-[#D9413B] font-semibold text-xl dark:hover:text-black px-4 py-2 rounded-3xl hover:bg-[#D9413B] hover:text-white dark:border-white dark:text-white dark:hover:bg-white transition-all ease-in">
              Connect with me for work
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle >Wanna Connect?</AlertDialogTitle>
                <AlertDialogDescription>
                  By Clicking Continue, you will be redirected to my portfolio
                  site.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Link
                    href="https://portfolio-site-olive-two.vercel.app"
                    target="_blank"
                  >
                    Continue
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <ModeToggle />
        </div>
        <div className="flex md:hidden items-center justify-center gap-5">
          <AlertDialog>
            <AlertDialogTrigger>
              <FaUserAstronaut
                size={50}
                className="text-[#D9413B] border-2 border-[#D9413B] rounded-full p-2"
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Wanna Connect?</AlertDialogTitle>
                <AlertDialogDescription>
                  By Clicking Continue, you will be redirected to my portfolio
                  site.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Link
                    href="https://portfolio-site-olive-two.vercel.app"
                    target="_blank"
                  >
                    Continue
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
