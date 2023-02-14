import React from "react";
import { H2 } from "../../../../shared/components/Typography";
import MemberCard from "./MemberCard";

import TeamGuard1 from "../../../../assets/images/team-guard1.png";
import TeamGuard2 from "../../../../assets/images/team-guard2.png";

const teamMembers = [
  {
    id: 1,
    imageAddress: "/assets/images/ap-spicy.png",
    name: "AP_Spicy",
    role: "Co-Founder & Marketing",
    description:
      "Boss Lady entrepreneur AP has extensive experience in marketing and in fashion/jewellery industries. Loves NFT's and can't wait to bring some exciting innovations to the space.",
    follow: true,
  },
  {
    id: 2,
    imageAddress: "/assets/images/gengeth-khan.png",
    name: "Gengeth Khan",
    role: "Co-Founder",
    description:
      "Involved in crypto and NFT's for years and a proud member of the BAYC and MAYC communities. Understands the space and the power of a real team with a quality product and vision.",
    follow: true,
  },
  {
    id: 3,
    imageAddress: "/assets/images/woahJonny.png",
    name: "WoahJonny",
    role: "Co-Founder & Artist",
    description:
      "An acclaimed artist for 12 years with an internationally recognized portfolio. PAD is his first official NFT project and what he loves most is the idea of truly bringing his art to life.",
    follow: true,
  },
  {
    id: 4,
    imageAddress: "/assets/images/jMoyer.png",
    name: "JMoyer",
    role: "Developer",
    description:
      "A core developer who is no stranger to NFT's having worked on numerous top projects as well as designing unique backend utilities to help NFT projects set themselves apart.",
    follow: true,
  },
  {
    id: 5,
    imageAddress: "/assets/images/botedr.png",
    name: "Botedr",
    role: "Animator",
    description: null,
    follow: false,
  },
  {
    id: 6,
    imageAddress: "/assets/images/jurassicKings.png",
    name: "JurassicKings",
    role: "Assistant Artist",
    description: null,
    follow: false,
  },
  {
    id: 7,
    imageAddress: "/assets/images/utterancer.png",
    name: "Utterancer",
    role: "Server Manager",
    description: null,
    follow: false,
  },
  {
    id: 8,
    imageAddress: "/assets/images/liqor.png",
    name: "Liquor Grain",
    role: "Community Manager",
    description: null,
    follow: false,
  },
  {
    id: 9,
    imageAddress: "/assets/images/silverBallerWiz.png",
    name: "SilverBallerWiz",
    role: "Social Media & Spaces Host",
    description: null,
    follow: false,
  },
  {
    id: 10,
    imageAddress: "/assets/images/magicSkyWalker.png",
    name: "Magicskywalkerr",
    role: "Marketing Admin & Spaces Host",
    description: null,
    follow: false,
  },
];

export default function Team(props) {
  return (
    <div className="w-full px-5 pt-[100px] pb-[100px] md:pb-[200px] md:pt-[330px]">
      <div className="relative mx-auto w-full max-w-[1234px]">
        <div className="absolute right-0 -top-[320px] hidden w-full max-w-[322px] md:block lg:-top-[250px] xl:-right-[50px]">
          <img src={TeamGuard1} alt="" />
        </div>
        <div className="mb-[70px] text-center sm:mb-[120px]">
          <H2>THE TEAM</H2>
        </div>
        <div className="flex w-full grid-cols-4 flex-row flex-wrap justify-start gap-y-7 gap-x-0 sm:justify-center sm:gap-y-[70px] sm:gap-x-[50px] md:grid">
          {teamMembers.map((tempMember, index) => (
            <MemberCard {...tempMember} key={index}></MemberCard>
          ))}
        </div>

        <div className="absolute left-0 -bottom-[220px] hidden w-full md:block md:max-w-[322px] lg:-left-[100px] lg:-bottom-[100px] ">
          <img src={TeamGuard2} alt="" />
        </div>
      </div>
    </div>
  );
}
