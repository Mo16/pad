import React, { useState } from "react";
import ApngComponent from "react-apng";
import { Link } from "react-router-dom";

import Img1 from "../../../../assets/images/waystation/1.gif";
import Img2 from "../../../../assets/images/waystation/2.png";
import Img3 from "../../../../assets/images/waystation/3.png";
import Img4 from "../../../../assets/images/waystation/4.png";
import Img5 from "../../../../assets/images/waystation/5.png";
import Img6 from "../../../../assets/images/waystation/6.png";

import Img7 from "../../../../assets/images/waystation/7.png";
import Img8 from "../../../../assets/images/waystation/8.png";
import Img9 from "../../../../assets/images/waystation/9.png";
import Img10 from "../../../../assets/images/waystation/10.png";
import Img11 from "../../../../assets/images/waystation/11.png";
import Img12 from "../../../../assets/images/waystation/12.png";
import Img13 from "../../../../assets/images/waystation/13.png";
import Img14 from "../../../../assets/images/waystation/14.png";
import Img15 from "../../../../assets/images/waystation/15.png";
import Img16 from "../../../../assets/images/waystation/16.png";
import Img17 from "../../../../assets/images/waystation/17.png";
import Img18 from "../../../../assets/images/waystation/18.png";
import Img19 from "../../../../assets/images/waystation/19.png";
import Img20 from "../../../../assets/images/waystation/20.png";
import Img21 from "../../../../assets/images/waystation/21.png";
import Img22 from "../../../../assets/images/waystation/22.png";
import Img23 from "../../../../assets/images/waystation/23.gif";
import Img24 from "../../../../assets/images/waystation/24.png";
import Img25 from "../../../../assets/images/waystation/25.png";
import Img26 from "../../../../assets/images/waystation/26.png";
import Img27 from "../../../../assets/images/waystation/27.png";
import Img28 from "../../../../assets/images/waystation/28.png";

import Artefact from "../../../../assets/images/artefact-mobile.png";
import Shroome from "../../../../assets/images/shroome-mobile.png";
import MerchBuilding from "../../../../assets/images/merch-building-mobile.png";
import DiscordHQ from "../../../../assets/images/discordhq-mobile.png";

import { ExpandedIcon } from "../../../../shared/components/Svgs";

export default function HeroImageComponent(props) {
  const [artefactHover, setArtefactHover] = useState(false);
  const [merchHover, setMerchHover] = useState(false);
  const [discordHqHover, setDiscordHqHover] = useState(false);
  const [shroomePortalHover, setShroomePortalHover] = useState(false);
  return (
    <div className="absolute -right-[17%] top-[0%] flex w-[138%] justify-center overflow-hidden max-[480px]:top-[7%] sm:right-0 sm:-top-[20%] sm:w-full">
      <div className="relative top-[12%] -left-[15%] w-auto max-w-[2420px]">
        <div className="relative w-[120%] ">
          <img
            src={Img27}
            alt=""
            className="absolute left-[24%] top-[24%] z-0 w-[52%]"
          />
          <img src={Img26} alt="" className="relative w-full" />
          <img
            src={Img25}
            alt=""
            className="absolute left-[26%] top-[1%] w-[59%]"
          />
        </div>

        <div className="absolute top-[22%] left-[24%] w-[82%]">
          <img src={Img24} alt="" className="absolute  left-[1%] " />
          <img src={Img23} alt="" className="absolute  left-[1%] " />
        </div>
        <img
          src={Img22}
          alt=""
          className="absolute top-[27%] left-[8%]  w-full"
        />
        <div className="absolute top-[24%] left-[20%] w-[82%]">
          <img
            src={Img21}
            alt=""
            className="absolute top-[31.7%] left-[34.5%]  w-[31%]"
          />
          <img src={Img20} alt="" className=" w-full" />

          <img
            src={Img19}
            alt=""
            className="absolute left-[41%] top-[12%] w-[20%]"
          />
        </div>
        {/*<img src={Img18} alt="" className="absolute top-0" />*/}

        <div className="absolute top-[23%] left-[18%] z-[1] mx-auto w-[86%]">
          <img src={Img3} alt="" className="absolute top-0 w-full" />
          <img
            src={Img2}
            alt=""
            className="absolute -left-[1%] top-[19%] w-full"
          />
          <img src={Img1} alt="" className="top-0 w-full" />

          <img
            src={Img28}
            alt=""
            className={`absolute left-[0.5%] top-[1%] w-full ${
              shroomePortalHover ? "block" : "hidden"
            }`}
          />
        </div>
        {/*
        <img
          src={Img3}
          alt=""
          className="absolute top-[23.4%] left-[18.4%] z-[1] w-[85%] max-w-none"
        />
        <img
          src={Img2}
          alt=""
          className="absolute top-[32%] right-[1%] z-[1] w-[80%]"
        />
        <img
          src={Img1}
          alt=""
          className="absolute top-[24%] left-[20%] mx-auto max-w-[83%]"
        />

        <img
          src={Img28}
          alt=""
          className={`absolute top-[24.5%] left-[20.5%] mx-auto max-w-[83%] ${
            shroomePortalHover ? "block" : "hidden"
          }`}
        />
        */}

        <div className="absolute left-[20.5%] top-[25%] w-[82%] max-w-none">
          {/*<img src={Img17} alt="" className="absolute top-0" />
          <img src={Img16} alt="" className="absolute top-0" />*/}
          <img src={Img15} alt="" className=" w-full" />
          <img
            src={Img14}
            alt=""
            className="absolute top-[39.6%] left-[23.3%] w-[50%]"
          />
          <img src={Img13} alt="" className="absolute top-0" />

          <img
            src={Img11}
            alt=""
            className="absolute top-[29%] left-[21.1%] w-[60%]"
          />

          <img
            src={Img12}
            alt=""
            className={`absolute top-[0%] -left-[0%] ${
              artefactHover ? "block" : "hidden"
            }`}
          />
        </div>
        <div className=" absolute top-[25.8%] left-[21%] w-[78%]">
          <img src={Img7} alt="" className="w-full" />
          <img src={Img4} alt="" className="absolute top-0 " />

          <img src={Img6} alt="" className="absolute top-0" />
          <img
            src={Img5}
            alt=""
            className={`absolute top-0 ${merchHover ? "block" : "hidden"}`}
          />
        </div>
        <div className="absolute top-[22%] left-[17.5%] h-full w-[86%]">
          <img src={Img10} alt="" className="absolute top-0 w-full" />
          <img
            src={Img9}
            alt=""
            className="absolute top-[20%] left-[41.5%] z-[1] w-[17%]"
          />
          <img
            src={Img8}
            alt=""
            className={`absolute top-0 ${discordHqHover ? "block" : "hidden"}`}
          />
        </div>
        {/** artefact overlay */}
        <Link
          to="/artefect"
          className="absolute top-[46%] left-[38%] z-[1] block h-[10%] w-[7%]"
          onMouseOver={() => setArtefactHover(true)}
          onMouseOut={() => setArtefactHover(false)}
        ></Link>
        {/** merch overlay */}
        <Link
          to="/merch"
          className="absolute top-[50%] left-[44%] z-[1] block h-[12%] w-[7%]"
          onMouseOver={() => setMerchHover(true)}
          onMouseOut={() => setMerchHover(false)}
        ></Link>
        {/** discordhq overlay */}
        <Link
          to="/discordhq"
          className="absolute top-[50%] left-[56%] z-[1]  block h-[12%] w-[12%]"
          onMouseOver={() => setDiscordHqHover(true)}
          onMouseOut={() => setDiscordHqHover(false)}
        ></Link>
        {/*shroom*/}
        <Link
          to="/shroom"
          className="absolute top-[59%] left-[73%] z-[1]  block h-[14%] w-[12%] "
          onMouseOver={() => setShroomePortalHover(true)}
          onMouseOut={() => setShroomePortalHover(false)}
        ></Link>
      </div>
    </div>
  );
}

export function MobileHeroImageComponent(props) {
  return (
    <div className="flex flex-col items-start bg-black px-5 py-7 sm:hidden">
      <Link to="/artefect" className="block">
        <div className="flex cursor-pointer flex-row items-center">
          <div>
            <img src={Artefact} alt="" />
          </div>
          <div>
            <p className="font-serif text-2xl font-bold leading-6 text-white">
              ARTEFACT CHAMBER
            </p>
          </div>
          <div className="ml-[24px]">
            <span className="block -rotate-90">
              <ExpandedIcon />
            </span>
          </div>
        </div>
      </Link>
      <Link to="/shroome" className="block">
        <div className="flex cursor-pointer flex-row items-center">
          <div>
            <img src={Shroome} alt="" />
          </div>
          <div>
            <p className="font-serif text-2xl font-bold leading-6 text-white">
              SHROOMIE PORTAL
            </p>
          </div>
          <div className="ml-[24px]">
            <span className="block -rotate-90">
              <ExpandedIcon />
            </span>
          </div>
        </div>
      </Link>

      <Link to="/merch" className="block">
        <div className="flex cursor-pointer flex-row items-center">
          <div>
            <img src={MerchBuilding} alt="" />
          </div>
          <div>
            <p className="font-serif text-2xl font-bold leading-6 text-white">
              MERCH BUILDING
            </p>
          </div>
          <div className="ml-[24px]">
            <span className="block -rotate-90">
              <ExpandedIcon />
            </span>
          </div>
        </div>
      </Link>
      <Link to="/discordhq" className="block">
        <div className="flex cursor-pointer flex-row items-center">
          <div>
            <img src={DiscordHQ} alt="" />
          </div>
          <div>
            <p className="font-serif text-2xl font-bold leading-6 text-white">
              DISCORD HQ
            </p>
          </div>
          <div className="ml-[24px]">
            <span className="block -rotate-90">
              <ExpandedIcon />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
