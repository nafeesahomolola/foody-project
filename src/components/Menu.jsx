import React from "react";
import Button from "../Ui/Button";
import Food from "../Ui/Food";
import data from "../Data/Data";
import star from "../assets/star.svg";


function Menu() {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto relative px-10">
        <article className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-center text-zinc-950 text-5xl font-medium font-Commissioner">
            Our Popular Recopies
          </h1>
          <p className="text-center w-[55%] text-zinc-600 text-lg font-normal font-DM  leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's...
          </p>
        </article>

        <div className="w-full flex items-start justify-between py-7 ">
          <Button text="Fast Food" />
          <Button text="Special Food" val={true} />
          <Button text="Healthy" />
          <Button text="Drinks" />
          <Button text="Lunch" />
          <Button text="Breackfast" />
          <Button text="More menu+" />
        </div>

        <div className="grid grid-cols-3 gap-7 ">
          {data.map((ele) => {
            return (
              <Food
                img={ele.img}
                desc={ele.desc}
                text={ele.text}
                price={ele.price}
                cart={ele.cart}
              />
            );
          })}
        </div>
        <article className="flex items-center w-fit m-auto bg-[#F2BD57] py-2 px-8 rounded-3xl ">
          <p className="text-zinc-950 text-lg font-normal font-DM leading-normal">
            See More Food
          </p>
        </article>

        <img src={star} className="absolute -bottom-20 right-20" alt="" />
      </div>
    </div>
  );
}

export default Menu;
