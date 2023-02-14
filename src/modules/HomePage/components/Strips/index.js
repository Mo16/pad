import React from "react";
import Union from "../../../../assets/images/union.png";

export function Strip1(props) {
  return (
    <div className="border-y-[6px] border-solid border-y-white ">
      <div className="box-content flex h-[58px]  flex-row flex-nowrap items-center gap-4 overflow-hidden border-y-[1px] border-solid  border-y-black bg-[#00F1FF] md:h-[86px]">
        {[1, 1, 1, 1].map((val, index) => (
          <div
            className="flex animate-marquee flex-row flex-nowrap gap-4 "
            key={index}
          >
            <div className="flex w-[28px] items-center md:w-[54px]">
              <img src={Union} alt="" />
            </div>
            <div className="w-max whitespace-nowrap font-serif text-[34px] font-bold leading-[34px] md:text-[53px] md:leading-[54px]">
              BUY THE TICKET, TAKE THE RIDE
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Strip2(props) {
  return (
    <div className="border-y-[6px] border-solid border-y-white ">
      <div className="box-content flex h-[58px]  flex-row flex-nowrap items-center gap-4 overflow-hidden border-y-[1px] border-solid  border-y-black bg-[#8733FF] md:h-[86px]">
        {[1, 1, 1, 1].map((val, index) => (
          <div
            className="flex animate-marquee flex-row flex-nowrap gap-4 "
            key={index}
          >
            <div className="flex w-[28px] items-center md:w-[54px]">
              <img src={Union} alt="" />
            </div>
            <div className="w-max whitespace-nowrap font-serif text-[34px] font-bold leading-[34px] md:text-[53px] md:leading-[54px]">
              BUY THE TICKET, TAKE THE RIDE
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
