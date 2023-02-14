import React, { useState, useEffect } from "react";
import { Btn1 } from "../../../../shared/components/Buttons";
import { TwitterIcon } from "../../../../shared/components/Svgs";

export default function MemberCard({
  id,
  imageAddress,
  name,
  role,
  description,
  follow,
}) {
  const [translatedCards, setTranslatedCards] = useState([2, 3, 6, 7, 9, 10]);
  return (
    <div
      className={`${
        translatedCards.includes(id) ? "md:-mt-[50px]" : ""
      } flex w-full max-w-[350px] flex-col text-left text-white sm:max-w-[246px] sm:items-center sm:text-center ${
        id == 9 ? "col-start-2 " : ""
      }`}
    >
      <div className="flex flex-row flex-nowrap items-start sm:flex-col sm:items-center">
        <div className="mr-4 w-full max-w-[100px] rounded-[12px] border-[5px] border-solid border-white bg-[#D9D9D9] sm:mr-0 sm:max-w-[170px]">
          <img src={imageAddress} alt="" className="w-full" />
        </div>
        <div>
          <div className="sm:mt-4">
            <span className="font-sans text-xl font-bold leading-[27px] md:text-[26px] md:leading-[35px] ">
              {name}
            </span>
          </div>
          <div className="mt-0 sm:mt-1">
            <span className="font-sans text-sm font-medium leading-[19px] md:text-xl md:leading-[27px] ">
              {role}
            </span>
          </div>

          {follow ? (
            <div className="mt-2 block sm:hidden">
              <Btn1>
                <span className="w-[18px] ">
                  <TwitterIcon />
                </span>
                <span>FOLLOW</span>
              </Btn1>
            </div>
          ) : null}
        </div>
      </div>

      {description ? (
        <div className="mt-4 sm:mt-3">
          <span className="font-sans text-sm font-medium leading-[150%]">
            {description}
          </span>
        </div>
      ) : null}
      {follow ? (
        <div className="mt-4 hidden sm:block">
          <Btn1>
            <span className=" w-[18px] ">
              <TwitterIcon />
            </span>
            <span>FOLLOW</span>
          </Btn1>
        </div>
      ) : null}
    </div>
  );
}
