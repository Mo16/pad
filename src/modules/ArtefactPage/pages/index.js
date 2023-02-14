import React from "react";
import Header from "../../Root/Header/pages";
import { H2 } from "../../../shared/components/Typography";

import ArtefactChamber from "../../../assets/images/artefact-chamber.png";
import Skull from "../../../assets/images/skull.png";

export default function ArtefactPage(props) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center  justify-center bg-bg-pattern px-5 pt-[100px]">
      <Header full={false} />
      <div className="relative flex w-full justify-between">
        <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <div className="max-w-[800px] text-center md:text-left">
              <H2>ARTEFACT CHAMBER</H2>
              <div className="font-sans text-base font-medium leading-[150%] text-white sm:text-xl md:text-[22px]">
                <p>
                  The Artefact Chamber marketplace is not yet available. The
                  galactic postal service is very busy at the moment, but they
                  will get it to the Waystation soon! Please bear with us.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative">
              <div className="w-full max-w-[800px]">
                <img src={ArtefactChamber} alt="" className="w-full" />
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
