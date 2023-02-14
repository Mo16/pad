import React, { useState } from "react";
import { ExpandedIcon } from "../../../../shared/components/Svgs";

export default function QASection({ question, answer }) {
  const [open, setOpen] = useState(false);
  const collapse = () => {
    setOpen(!open);
  };
  return (
    <div className="mb-6 rounded-[6px] border-[2px] border-solid border-white p-4 backdrop-blur-sm">
      <div
        className="relative cursor-pointer font-sans text-base font-bold leading-[27px] text-white md:text-xl"
        onClick={collapse}
      >
        <p>{question}</p>
        <div className="absolute top-[10px] right-0">
          <ExpandedIcon />
        </div>
      </div>
      {open ? (
        <div className="mt-7 font-sans text-base font-bold leading-[27px] text-white md:text-xl ">
          <p>{answer}</p>
        </div>
      ) : null}
    </div>
  );
}
