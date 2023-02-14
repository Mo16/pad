import React from "react";

export function Btn1({ children }) {
  return (
    <button className="flex flex-row flex-nowrap items-center justify-center gap-2 rounded-[6px] border-[1px]  border-solid bg-[#DAFF00] py-3 px-[26px] text-center font-serif text-sm font-bold leading-[14px] text-black outline outline-[2px] outline-white">
      {children}
    </button>
  );
}
