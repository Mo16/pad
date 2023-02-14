import React, { useState, useEffect } from "react";
import VideoAdd from "../../../assets/videos/bg.mp4";
import Header from "../../Root/Header/pages";
import NewEra from "../components/NewEra";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import AboutVideo from "../components/AboutVideo";
import LoadingStarter from "../components/LoadingStarter";
import HeroImageComponent, {
  MobileHeroImageComponent,
} from "../components/HeroImageComponent";
import { Strip1, Strip2 } from "../components/Strips";

import { Player, ControlBar, PlayToggle, LoadingSpinner } from "video-react";

const BgVideo = () => {
  return (
    <div className="relative h-[560px] overflow-hidden sm:h-auto">
      <Player
        className="absolute -left-[50%] h-[560px] w-[400%] !p-0 sm:relative sm:left-auto sm:h-auto sm:w-full"
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={VideoAdd} type="video/mp4" />
        <ControlBar autoHide={false} className="hidden" />
      </Player>
    </div>
  );
};
export default function Homepage(props) {
  const [loading, setLoading] = useState(true);
  const [startScaling, setStartScaling] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartScaling(true);
    }, [7000]);

    setTimeout(() => {
      setLoading(false);
    }, [12000]);
  }, []);

  return (
    <div className="relative">
      <div className="relative h-auto overflow-hidden ">
        <Header />
        <BgVideo />
        <MobileHeroImageComponent />
        <HeroImageComponent />
      </div>
      <div className="bg-black bg-bg-pattern bg-cover bg-repeat pb-[40px] sm:pb-0">
        <Strip1 />
        <AboutVideo />
        <Roadmap />
        <NewEra />
        <Team />
        <Strip2 />
      </div>
      {loading ? <LoadingStarter startScaling={startScaling} /> : null}
    </div>
  );
}
