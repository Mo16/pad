import React from "react";
import Header from "../../Root/Header/pages";
import { H2 } from "../../../shared/components/Typography";
import { WalletIcon } from "../../../shared/components/Svgs";
import Dashboard from "../../../assets/images/briefcase-dashboard.png";
import Skull from "../../../assets/images/skull.png";

export default function DashboardPage(props) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center  justify-center bg-bg-pattern px-5 pt-[100px]">
      <Header full={false} />
      <div className="relative flex w-full  justify-between">
        <div className=" relative mx-auto flex w-full max-w-[1400px] flex-col items-start md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-center md:max-w-[562px] md:text-left">
              <H2>BRIEFCASE DASHBOARD</H2>
              <div className="font-sans text-base font-medium leading-[150%] text-white sm:text-xl md:text-[22px]">
                <p>
                  Connect your wallet to view the stuff you’ve collected,
                  including the daily and total number of fragments accrued from
                  staking, your PADs and Briefcases.
                </p>
              </div>
              <div className="mx-auto mt-[32px] w-max cursor-pointer md:mx-0 ">
                <div className="flex flex-row flex-nowrap items-center justify-start gap-2 rounded-[6px] border-[1px]  border-solid bg-[#DAFF00] py-[26px] px-[20px] text-center font-serif text-[22px] font-bold leading-[22px] text-black outline outline-[2px] outline-white sm:py-[26px] sm:px-[26px]">
                  <span className="w-[22px] ">
                    <WalletIcon />
                  </span>
                  <span className="relative top-[2px]">CONNECT WALLET</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[60px] flex w-full justify-center md:mt-0 md:w-auto">
            <div className="relative">
              <div className="w-full max-w-[400px] md:max-w-[470px]">
                <img src={Dashboard} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20px] right-[20px] hidden md:block">
        <img src={Skull} alt="" className="max-w-[250px] md:max-w-none" />
      </div>
    </div>
  );
}
