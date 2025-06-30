"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const anibutton = () => {
  return (
    <div className="flex">
      <Link rel="stylesheet" href="/test">
        <div className="absolute top-[51%] right-[30px]">
          <button className="flex items-center">
            <p className="text-[14px]/[16px] pr-2 max-[1020px]:hidden">
              TAKE TEST
            </p>
            <Image
              src="/button.svg"
              width={44}
              height={44}
              alt="button"
              className="max-[1020px]:hidden"
            />
          </button>
        </div>
        <div className="flex">
          <Image
            src="/rectangleSquare.svg"
            width={301}
            height={602}
            alt="dotted line"
            className="rotate-180 max-[1020px]:hidden"
          />
        </div>
      </Link>
    </div>
  );
};

export default anibutton;
