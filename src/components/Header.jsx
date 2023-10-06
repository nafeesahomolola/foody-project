import React, { useState } from "react";
import logo from "../assets/logof.png";
import Bag from "../assets/Bag.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  let [showIt, setShowIt] = useState(false);
  return (
    <header className="w-full ">
      <nav className="container mx-auto px-10 py-8 flex items-center justify-between">
        <aside className=" flex items-center gap-2">
          <img src={logo} alt="" />
          <h1 className="text-black font-DM">Foodi</h1>
        </aside>

        <ul
          className={`flex absolute lg:static flex-col ${
            showIt === true ? "top-0" : "-top-[500px]"
          } bg-white display py-5 px-8 items-start lg:items-center w-[100%] lg:max-w-fit lg:bg-transparent -top-[500px] lg:flex-row left-0  gap-10 lg:gap-8 font-DM capitalize z-40 `}
        >
          <a href="">
            <li>home</li>
          </a>
          <a href="">
            <li>about</li>
          </a>
          <a href="">
            <li>service</li>
          </a>
          <a href="">
            <li>menu</li>
          </a>
          <a href="">
            <li>contact</li>
          </a>
        </ul>

        <div className=" items-center gap-7 hidden lg:flex">
          <img src={search} className=" h-5 object-cover" alt="" />

          <aside className="flex items-center gap-1">
            <img src={Bag} className=" h-5 object-cover" alt="" />
            <p>cart</p>
          </aside>

          <aside className="flex items-center gap-1">
            <img src={profile} className=" h-5 object-cover" alt="" />
            <p>Sign In</p>
          </aside>
        </div>

        <div className="flex lg:hidden z-50">
          <AiOutlineMenu className="text-2xl cursor-pointer"
          onClick={() =>{
            setShowIt(!showIt)
          }} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
