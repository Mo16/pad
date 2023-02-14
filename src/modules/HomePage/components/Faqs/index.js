import React from "react";
import { H2 } from "../../../../shared/components/Typography";
import QASection from "./QASection";

import Asset1 from "../../../../assets/images/faq-asset1.png";
import Mshroom from "../../../../assets/images/faq-mshroom.png";
import Island from "../../../../assets/images/faq-island.png";

const faqsData = [
  {
    question: "How many PAD's will there be?",
    answer:
      "There will be a presale. BAYC, MAYC, and other VIP's during presale can mint at .08ETH, up to 5. Standard presale can mint at 0.09 ETH up to 3.",
  },
  {
    question: "How much will one PAD be?",
    answer:
      "There will be a presale. BAYC, MAYC, and other VIP's during presale can mint at .08ETH, up to 5. Standard presale can mint at 0.09 ETH up to 3.",
  },
  {
    question: "Is there a presale?",
    answer:
      "There will be a presale. BAYC, MAYC, and other VIP's during presale can mint at .08ETH, up to 5. Standard presale can mint at 0.09 ETH up to 3.",
  },
  {
    question: "BAYC and MAYC partnership?",
    answer:
      "There will be a presale. BAYC, MAYC, and other VIP's during presale can mint at .08ETH, up to 5. Standard presale can mint at 0.09 ETH up to 3.",
  },
  {
    question: "Will there be a reveal?",
    answer:
      "There will be a presale. BAYC, MAYC, and other VIP's during presale can mint at .08ETH, up to 5. Standard presale can mint at 0.09 ETH up to 3.",
  },
  {
    question: "How do I buy?",
    answer:
      "There will be a presale. BAYC, MAYC, and other VIP's during presale can mint at .08ETH, up to 5. Standard presale can mint at 0.09 ETH up to 3.",
  },
];

export default function Faqs(props) {
  return (
    <div className="w-full px-5 pb-[160px]">
      <div className="relative mx-auto w-full">
        <div className="mb-[50px] text-center sm:mb-[70px]">
          <H2>FAQs</H2>
        </div>

        <div className="flex flex-row flex-nowrap gap-[50px]">
          <div className="relative hidden md:block">
            <div className=" bottom-[60px] -left-[350px]">
              <img src={Island} alt="" className="" />
            </div>
          </div>
          <div className="mx-auto w-full max-w-[856px] justify-center gap-y-7 gap-x-0 sm:gap-y-[70px] sm:gap-x-[50px]">
            {faqsData.map((tempMember, index) => (
              <QASection {...tempMember} key={index}></QASection>
            ))}
          </div>
          <div className="relative hidden md:block">
            <div className=" relative -top-[200px] ">
              <img src={Asset1} alt="" className="" />
            </div>
            <div className=" -right-[350px] -bottom-[180px]">
              <img src={Mshroom} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
