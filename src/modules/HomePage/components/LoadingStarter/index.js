import React from "react";
import PortalBlue from "../../../../assets/images/portal-blue.gif";

export default function LoadingStarter({ startScaling }) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-[10] flex items-center justify-center bg-black bg-bg-pattern bg-cover bg-repeat">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-20">
          <img
            src={PortalBlue}
            alt=""
            className={`${startScaling ? " scale-[8] animate-scale " : ""} `}
          />
        </div>
        {
          <div
            className={`h-[6px] w-[250px] rounded-[7px] bg-[#36364A] transition duration-200 sm:h-[12px] sm:w-[460px] ${
              startScaling ? "hidden opacity-0" : ""
            }`}
          >
            <div className="h-full w-full animate-load rounded-[7px] bg-[#00F1FF]"></div>
          </div>
        }
      </div>
    </div>
  );
}
