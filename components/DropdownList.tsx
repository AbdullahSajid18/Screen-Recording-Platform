"use client";

import Image from "next/image";
import { useState } from "react";

const DropdownList = () => {
  const [isOpen, seIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => seIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <Image 
            src='/assets/icons/hamburger.svg'
            alt="menu"
            width={14}
            height={14}
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
