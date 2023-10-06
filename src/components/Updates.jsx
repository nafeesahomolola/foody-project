import React from 'react'
import tray from "../assets/tray.png"

function Updates() {
  return (
    <div className="w-full py-7 bg-[#FDF2DD]">
      <div className="container mx-auto px-40 py-9 ">
        <div className="grid grid-cols-2 items-center">
          <img src={tray} className='w-[20rem] rounded-3xl' alt="" />

          <div className="flex flex-col gap-4 ">
            <h1 className="text-zinc-950 text-5xl font-medium font-Commissioner">
              Subscribe for Get update every New Offers
            </h1>
            <p className="text-zinc-600 text-xl font-normal font-DM leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <p className="text-neutral-400 text-sm font-normal font-DM py-2 px-8 bg-white rounded-3xl leading-tight">
              Inter your email adderss
            </p>
            <p className="text-zinc-950 text-lg bg-amber-300 rounded-3xl shadow w-fit py-2 px-10 font-normal font-DM leading-normal">
              Subscribe Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates