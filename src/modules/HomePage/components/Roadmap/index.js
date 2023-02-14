import React from "react";
import { H2 } from "../../../../shared/components/Typography";

import VisualRoadmap from "../../../../assets/images/visual-roadmap.png";
import RoadmapAsset1 from "../../../../assets/images/roadmap-asset1.png";

import Partnership from "../../../../assets/images/partnership-mobile.png";
import Briefcase from "../../../../assets/images/briefcase-mobile.png";
import PAD from "../../../../assets/images/pad-mobile.png";
import Staking from "../../../../assets/images/staking-mobile.png";

export default function Roadmap(props) {
  return (
    <div className="w-full px-5 py-[100px]">
      <div className="relative flex w-full justify-between">
        <div className="relative mx-auto flex w-full max-w-[1328px] flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <div className="max-w-[574px] text-center md:text-left">
              <H2>ROADMAP</H2>
              <div className="font-sans text-base font-medium leading-[150%] text-white sm:text-xl md:text-[22px]">
                <p>
                  We pride ourselves on delivering for our Psychonauts. See the
                  image on the right for our roadmap, a lot of which we have
                  already delivered upon.{" "}
      
                  <span className="text-[#DAFF00] hidemobile">
                    Hover over each deliverable to find out more about it.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full max-w-[496px]">
                <img src={VisualRoadmap} alt="" className="w-full" />
                {/* clickable areas */}

                {/* partnership */}

                <div className="group absolute left-[45%] bottom-[30%] h-[100px] w-[100px] bg-transparent ">
                  <div className="absolute right-[0px] -bottom-[70px] hidden w-[472px] rounded-[6px] border-[2px] border-solid border-black bg-[#FFAA00] py-3 px-4 outline outline-[4px] outline-white group-hover:block">
                    <p className="font-sans text-sm font-medium leading-[19px] text-black">
                      A strategic partnership with Psychonaut Anonymous and Mad
                      Honey Bears where holders will benefit from opportunity to
                      earn passive income through the Brand Ambassadors program.
                    </p>
                  </div>
                </div>

                {/* staking */}
                <div className="group absolute left-[30%] top-[40%] h-[100px] w-[100px] bg-transparent">
                  <div className="absolute -left-[465px] bottom-[0px] hidden  max-w-[458px] rounded-[6px] border-[2px] border-solid border-black bg-[#E20087] py-3 px-4 outline outline-[4px] outline-white group-hover:block">
                    <p className="font-sans text-sm font-medium leading-[19px] text-white">
                      Briefcases are an essential part of the PAD ecosystem and
                      act as an access pass for our entire marketplace. They
                      allow holders to earn additional fragments per day when
                      staked with their PADs. Briefcase mint launched on 21 Dec
                      2022 at 0.03eth.
                    </p>
                  </div>
                </div>
              </div>

              {/* briefcase */}

              <div className="group absolute right-[25%] top-[46%] h-[100px] w-[100px] bg-transparent">
                <div className="absolute right-[30px] -bottom-[180px] hidden w-[270px] rounded-[6px] border-[2px] border-solid border-black bg-[#0092FF] py-3 px-4 outline outline-[4px] outline-white group-hover:block">
                  <p className="font-sans text-sm font-medium leading-[19px] text-white">
                    Briefcases are an essential part of the PAD ecosystem and
                    act as an access pass for our entire marketplace. They allow
                    holders to earn additional fragments per day when staked
                    with their PADs. Briefcase mint launched on 21 Dec 2022 at
                    0.03eth.
                  </p>
                </div>
              </div>

              {/* pad */}
              <div className="group absolute left-[22%] top-[50%] h-[100px] w-[100px] bg-transparent">
                <div className="absolute right-[30px] -bottom-[140px] hidden w-[472px] rounded-[6px] border-[2px] border-solid border-black bg-[#E20000] py-3 px-4 outline outline-[4px] outline-white group-hover:block">
                  <p className="font-sans text-sm font-medium leading-[19px] text-white">
                    A massive milestone completed in our Roadmap. Each day
                    holders stake their PADs and Briefcases they acquire
                    fragments. Holders can use accrued fragments to purchase
                    items within our marketplace. Fragments are an off-chain
                    point system and can only be utilised within the PAD
                    ecosystem. Staking commenced on the 23 Dec 2022.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div>
              <div>
                <img src={Partnership} alt="" className="" />
              </div>
              <div className="-mt-7 pl-4">
                <p className="font-sans text-sm font-medium leading-[19px] text-white">
                  A strategic partnership with Psychonaut Anonymous and Mad
                  Honey Bears where holders will benefit from opportunity to
                  earn passive income through the Brand Ambassadors program.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={PAD} alt="" className="" />
              </div>
              <div className="-mt-7 pl-4">
                <p className="font-sans text-sm font-medium leading-[19px] text-white">
                  PAD was one of the early partnerships formed with Ether Royale
                  who designed a custom battle royale game for the PAD server,
                  along with a player dashboard. Special PAD holders were able
                  to create their own killfeeds for PAD Royale which are
                  included amongst the 150 custom custom kills used in each
                  battle. From inception in June 2022, and first game being
                  played in November 2022.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src={Briefcase} alt="" className="" />
              </div>
              <div className="-mt-7 pl-4">
                <p className="font-sans text-sm font-medium leading-[19px] text-white">
                  Briefcases are an essential part of the PAD ecosystem and act
                  as an access pass for our entire marketplace. They allow
                  holders to earn additional fragments per day when staked with
                  their PADs. Briefcase mint launched on 21 Dec 2022 at 0.03eth.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src={Staking} alt="" className="" />
              </div>
              <div className="-mt-7 pl-4">
                <p className="font-sans text-sm font-medium leading-[19px] text-white">
                  Briefcases are an essential part of the PAD ecosystem and act
                  as an access pass for our entire marketplace. They allow
                  holders to earn additional fragments per day when staked with
                  their PADs. Briefcase mint launched on 21 Dec 2022 at 0.03eth.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-[240px] -left-[2%] hidden md:-bottom-[200px] md:block">
            <img
              src={RoadmapAsset1}
              alt=""
              className="max-w-[250px] md:max-w-[318px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
