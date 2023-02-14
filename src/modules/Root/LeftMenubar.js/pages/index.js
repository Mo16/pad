import React from "react";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  DevIcon,
  MediumIcon,
} from "../../../../shared/components/Svgs";

export default function LeftMenubar(props) {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-full max-w-[340px] bg-[#8733FF] py-9 px-8">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div
            className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] border-solid bg-[#DAFF00] outline outline-[2px] outline-white"
            onClick={props.close}
          >
            <CloseIcon />
          </div>
          <div className="mt-[60px]">
            <div>
              <h3 className="font-sans text-xs font-bold leading-4 text-white">
                Pages
              </h3>
              <ul className="mt-3">
                <li>
                  <MyLink href="/">
                    <span>Home</span>
                  </MyLink>
                </li>

                <li>
                  <MyLink href="/dashboard">
                    <span>Dashboard</span>
                  </MyLink>
                </li>

                <li>
                  <MyLink href="/artefect">
                    <span>Artefact Chamber</span>
                  </MyLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[60px]">
            <div>
              <h3 className="font-sans text-xs font-bold leading-4 text-white">
                Useful Links
              </h3>
              <ul className="mt-3">
                <li>
                  <MyLink href="/home">
                    <span>OpenSea</span>
                  </MyLink>
                </li>

                <li>
                  <MyLink href="/looksrare">
                    <span>Looksrare</span>
                  </MyLink>
                </li>

                <li>
                  <MyLink href="/rarity-sniper">
                    <span>Rarity Sniper</span>
                  </MyLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <SocialList />
        </div>
      </div>
    </div>
  );
}
const MyLink = ({ children, href }) => {
  return (
    <Link
      to={href}
      className="inline-block py-[6px] font-serif text-[28px] font-bold leading-[28px] text-white"
    >
      {children}
    </Link>
  );
};

const SocialList = () => {
  return (
    <div>
      <div className="flex flex-row flex-nowrap gap-3">
        <div className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] border-solid bg-[#DAFF00] outline outline-[2px] outline-white">
          <TwitterIcon />
        </div>
        <div className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] border-solid bg-[#DAFF00] outline outline-[2px] outline-white">
          <InstagramIcon />
        </div>
        <div className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] border-solid bg-[#DAFF00] outline outline-[2px] outline-white">
          <YoutubeIcon />
        </div>
        <div className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] border-solid bg-[#DAFF00] outline outline-[2px] outline-white">
          <DevIcon />
        </div>
        <div className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] border-solid bg-[#DAFF00] outline outline-[2px] outline-white">
          <MediumIcon />
        </div>
      </div>
    </div>
  );
};
