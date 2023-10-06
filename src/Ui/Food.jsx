import React from 'react'
import {AiFillStar} from "react-icons/ai"

function Food(Props) {
  return (
    <div className="w-fit py-6">
      <div className="flex flex-col px-4 py-4 item-center gap-3 relative w-[350px] h-30 bg-white rounded-xl shadow-xl ">
        <img src={Props.img} className="w-[20rem]" alt="" />
        <div className="flex items-center gap-1 rounded-xl py-1 px-3 bg-white absolute right-7 top-7">
          <AiFillStar className="text-[#F2BD57]" />
          <p>4.9</p>
        </div>
        <h2 className="text-zinc-950 text-xl font-medium font-Commissioner leading-9">
          {Props.desc}
        </h2>
        <p className="text-zinc-600 text-sm font-normal font-DM leading-normal">
          {Props.text}
        </p>
        <div className="w-80 h-px border border-gray-200"></div>

        <aside className="flex items-center justify-between ">
          <h2 className="text-zinc-950 text-2xl font-medium font-DM leading-loose">
            ${Props.price}
          </h2>
          <p className="text-zinc-950 text-sm font-medium font-DM px-4 py-1 rounded-3xl border border-amber-300 leading-tight">
            {Props.cart}
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Food