import React from "react";
import { Player, ControlBar, PlayToggle, LoadingSpinner } from "video-react";

export default function AboutVideo(props) {
  return (
    <div className="mb-[0px] mt-[50px] flex w-full justify-center px-5 py-[50px] md:pt-[180px] md:pb-[80px]">
      <div className="">
        {/*<iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/f4Iq60qIxJY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
  ></iframe>*/}
        <video controls className="w-[1073px]">
          <source
            src="https://cdn.discordapp.com/attachments/1025731505202401330/1069240856118296596/HAT_EP2_iOSReady.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
