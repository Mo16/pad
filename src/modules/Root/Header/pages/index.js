import React, { useState } from "react";
import { Btn1 } from "../../../../shared/components/Buttons";
import LeftMenubar from "../../LeftMenubar.js/pages";

import { BarIcon, WalletIcon } from "../../../../shared/components/Svgs";
import Logo from "../../../../assets/logos/logo.png";

export default function Header(props) {
  const [LeftMenue, setLeftMenue] = useState(false);
  return (
    <div className="absolute top-5 z-10 w-full px-5">
      <div className="flex h-[80px] flex-row items-center justify-between">
        {/* left */}
        <div
          className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] border-solid bg-[#DAFF00] outline outline-[2px] outline-white"
          onClick={() => setLeftMenue(true)}
        >
          <BarIcon />
        </div>
        {/* logo */}

        {props.full == false ? null : (
          <div className="absolute left-[calc((100%-118px)/2)] w-[118px] sm:left-[calc((100%-160px)/2)] sm:w-[160px]">
            <img src={Logo} alt="" className="w-full" />
          </div>
        )}
        {/* right */}

        {props.full == false ? null : (
          <div className="cursor-pointer">
            <div className="flex h-[44px] w-[44px] flex-row flex-nowrap items-center justify-center gap-2  rounded-[6px] border-[1px] border-solid bg-[#DAFF00] py-[10px] px-[12px] text-center font-serif text-sm font-bold leading-[21px] text-black outline outline-[2px] outline-white sm:h-auto sm:w-auto sm:py-3 sm:px-[26px]">
              <span className="h-[16px] w-[17px]">
                <WalletIcon />
              </span>
              <span className="hidden sm:block">CONNECT WALLET</span>
            </div>
          </div>
        )}
      </div>
      {LeftMenue ? <LeftMenubar close={() => setLeftMenue(false)} /> : null}
    </div>
  );
}
