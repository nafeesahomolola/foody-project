import React from 'react'

function Abouts(Props) {
  return (
    <div className="flex items-center gap-2">
      <img src={Props.img} className='w-[5rem]' alt="" />

      <aside className="flex flex-col gap-1 items-start">
        <h1 className="text-zinc-950 text-lg font-medium font-Commissioner leading-[30px]">
          {Props.desc}
        </h1>
        <p className="text-sm text-zinc-600 font-normal font-DM leading-tight">
          {Props.txt}
        </p>
      </aside>
    </div>
  );
}

export default Abouts