"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";

import Avatar from "../common/Avatar";
import NavList from "../navigations/NavList";
import SideBar from "../navigations/SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true); // 임시 로그인 상태 state
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 top-0 flex h-[60px] w-full items-center justify-center bg-white md:justify-start">
      <SideBar isOpen={isOpen} onToggle={toggleSideBar} />
      <div className="base-wrap flex justify-between">
        <div className="flex items-center">
          <Link href="/" className="md:mr-16">
            <Image
              src="/images/logo.png"
              alt="logo-image"
              width={70}
              height={15}
            />
          </Link>
          <div className="hidden md:flex">
            <NavList />
          </div>
        </div>
        {isLoggedIn ? (
          <Popover>
            <PopoverTrigger className="hidden md:block">
              <Avatar type="default" size="default" />
            </PopoverTrigger>
            <PopoverContent align="end" sideOffset={1} className="w-28 p-0">
              <ul>
                <li className="px-4 py-2 text-sm text-gray-800 hover:text-purple-700">
                  <Link href="/">마이페이지</Link>
                </li>
                <li
                  className="cursor-pointer px-4 py-2 text-sm text-gray-800 hover:text-purple-700"
                  onClick={() => setIsLoggedIn(false)}
                >
                  로그아웃
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        ) : (
          <Link
            href="/"
            className="hidden text-sm text-gray-700 hover:text-purple-600 md:block"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
