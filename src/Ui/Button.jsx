import React from 'react'

function Button(Props) {
  return (
    <div className="">
      <button
        className={`font-normal ${
          Props.val === true ? "bg-amber-300 border-none" : "bg-transparent text-zinc-600"
        } text-xl rounded-3xl border border-zinc-600 px-8 py-2 font-DM leading-normal`}
      >
        {Props.text}"
      </button>
    </div>
  );
}

export default Button