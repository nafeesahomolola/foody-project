import React from "react";
import salad from "../assets/salad.svg";
import iconly from "../assets/iconly.png";
import dots from "../assets/dots.png";
import star from "../assets/star.svg";
import dish from "../assets/dish.png";
import star2 from "../assets/star2.svg";


function Hero() {
  return (
    <div className="w-full py-7">
      <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-40 place-items-center lg:gap-9 relative">
        <div className="flex items-start flex-col gap-4 relative">
          <img src={star} className="absolute -top-10 right-5" alt="" />
          <aside className=" flex gap-2 bg-[#F2BD57] font-DM text-zinc-600 w-fit px-6 py-2 bg-opacity-20 rounded-[50px]">
            <img src={salad} alt="" />
            <p>Qualityfull Food</p>
          </aside>
          <h1 className="text-zinc-950 text-[60px] font-Commissioner leading-12 font-semibold">
            Enjoy Your Delicious Food
          </h1>
          <p className="text-zinc-600 text-lg font-normal font-DM leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's...
          </p>

          <aside className="flex items-center gap-4">
            <p className="text-zinc-950 text-lg font-normal font-DM px-6 py-2 bg-amber-300 rounded-[50px] shadow">
              Order Now
            </p>
            <img src={iconly} alt="" />
          </aside>
          <img src={dots} className="absolute -left-10 -bottom-10" alt="" />
        </div>

        <div className="relative flex flex-col item-center gap-4">
          <img src={dish} className="z-10" alt="" />
          <img src={dots} className="absolute left-5 -top-6" alt="" />
          <img src={star2} className="absolute bottom-10 -left-20" alt="" />

          <div className="flex items-center justify-between">
            <article className="flex items-center flex-col gap-2">
              <h1 className="text-zinc-950 text-4xl font-bold font-Commissioner  leading-10">
                120K
              </h1>
              <p className="text-zinc-600 text-lg font-normal font-DM leading-[30px]">
                Website Visitor
              </p>
            </article>
            <article className="flex items-center flex-col gap-2">
              <h1 className="text-zinc-950 text-4xl font-bold font-Commissioner  leading-10">
                65K
              </h1>
              <p className="text-zinc-600 text-lg font-normal font-DM leading-[30px]">
                Use online order{" "}
              </p>
            </article>
            <article className="flex items-center flex-col gap-2">
              <h1 className="text-zinc-950 text-4xl font-bold font-Commissioner leading-10">
                45K
              </h1>
              <p className="text-zinc-600 text-lg font-normal font-DM leading-[30px]">
                5 star review
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
