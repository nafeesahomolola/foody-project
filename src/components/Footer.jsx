import React from 'react'
import logo from "../assets/logof.png"
import message from "../assets/Message.png";
import calling from "../assets/Calling.png";
import location from "../assets/Location.png";

import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai";


function Footer() {
  return (
    <div className="w-full pt-10 bg-[#FFFCF7] pb-7">
      <div className="container mx-auto px-8 py-7 flex items-start justify-between">
        <article className="flex flex-col items-start gap-4">
          <aside className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h1>Foodi</h1>
          </aside>
          <p className="text-stone-500 w-[250px] text-lg font-normal font-DM leading-7">
            2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
          </p>

          <aside className="flex items-center gap-3">
            <BiLogoFacebook className="bg-amber-300 rounded-xl  p-5 " />
            <AiOutlineTwitter className="bg-amber-300 rounded-xl border p-5  " />
            <BiLogoLinkedin className="bg-amber-300 rounded-xl border " />
            <AiOutlineInstagram className="bg-amber-300 rounded-xl border" />
          </aside>
        </article>

        <article className="flex flex-col items-start gap-4">
          <h1 className="text-zinc-950 text-xl font-bold font-Commissioner leading-loose">
            Our Services
          </h1>
          <span className="text-stone-500 flex items-start gap-4 flex-col text-base font-normal font-DM Sans">
            <p>Easy to order</p>
            <p>Fasted delivery</p>
            <p>Best quality</p>
            <p>Home delivery</p>
            <p>24/8 Service</p>
            <p>Supper offer</p>
          </span>
        </article>

        <article className="flex flex-col items-start gap-5">
          <h1 className="text-zinc-950 text-xl font-bold font-Commissioner leading-loose">
            Company
          </h1>
          <span className="text-stone-500 flex items-start gap-4 flex-col text-base font-normal font-DM Sans">
            <p>Project</p>
            <p>About</p>
            <p>Service</p>
            <p>Menu</p>
            <p>Contact</p>
          </span>
        </article>

        <article className="flex flex-col items-start gap-5">
          <h1 className="text-zinc-950 text-xl font-bold font-Commissioner leading-loose">
            Contact Us
          </h1>

          <aside className="flex items-center gap-2 ">
            <img
              src={message}
              className="px-3 py-2 bg-transparent rounded-2xl border-[#FBE9C7] border-[0.5px]"
              alt=""
            />
            <p className="text-stone-500 text-base font-normal font-DM">
              Foodi@gmail.com
            </p>
          </aside>

          <aside className="flex items-center gap-2">
            <img
              src={calling}
              className="px-3 py-2 bg-transparent rounded-2xl border-[#FBE9C7] border-[0.5px]"
              alt=""
            />
            <p className="text-stone-500 text-base font-normal font-DM">
              +(303) 555-0105
            </p>
          </aside>

          <aside className="flex items-center gap-2">
            <img
              src={location}
              className="px-3 py-2 bg-transparent rounded-2xl border-[#FBE9C7] border-[0.5px]"
              alt=""
            />
            <p className="text-stone-500 text-base font-normal font-DM">
              2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
            </p>
          </aside>
        </article>
      </div>
    </div>
  );
}

export default Footer