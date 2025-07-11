import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const demographics = ({ ready }) => {
  const trueRefOne = useRef(null);
  const boxRefOne = useRef(null);
  const boxMedRef = useRef(null);
  const boxLightRef = useRef(null);

  useGSAP(() => {
    const timeOne = gsap.timeline({ paused: true });

    timeOne
      .to(boxRefOne.current, {
        scale: 1.2,
      })

      .to(
        boxMedRef.current,
        {
          scale: 1.4,
          display: "block",
        },
        "<+=0"
      )

      .to(
        boxLightRef.current,
        {
          scale: 1.6,
          display: "block",
        },
        "<+=0"
      );

    if (trueRefOne.current) {
      trueRefOne.current.addEventListener("mouseenter", () => timeOne.play());
      trueRefOne.current.addEventListener("mouseleave", () =>
        timeOne.reverse()
      );
    }

    return () => {
      if (trueRefOne.current) {
        trueRefOne.current.removeEventListener("mouseenter", () =>
          timeOne.play()
        );
        trueRefOne.current.removeEventListener("mouseleave", () =>
          timeOne.reverse()
        );
      }
    };
  });
  return (
    <div>
      <div className="flex justify-between items-center w-full h-[64px]">
          <div className="flex mx-4">
            <p className="text-[14px]/[16px] font-[600] tracking-[-2%] py-2 px-4 mr-2">
              SKINSTRIC
            </p>
            <div className="flex justify-center items-center">
              <Image src="/rectangleL.svg" height={17} width={4} alt="rectangle"/>
              <p className="font-semibold text-[#1A1B1C] text-[14px]/[16px] tracking-[-2%] opacity-60 px-2">
                INTRO
              </p>
              <Image src="/rectangleR.svg" height={17} width={4} alt="rectangle"/>
            </div>
          </div>
          <div className="mx-4">
            <button className="bg-[#1A1B1C] text-white py-2 px-4 text-[14px]/[16px]">
              Enter Code
            </button>
          </div>
        </div>
      <div className="flex h-[90vh] w-full items-center justify-center">
        <div className="fixed left-10 top-20">
          <div className="flex-col">
            <p className="font-bold mb-5">A. I. Analysis</p>
            <p className="font-medium">
              A. I. has estimated the following. <br />
              Fix estimated information if needed.
            </p>
          </div>
        </div>
        <div className="flex rotate-45 border-2 w-[320] h-[320]">
          <div
            ref={boxRefOne}
            className="fixed border-2 border-dashed border-gray-600 h-[320] w-[320]"
          />
          <div
            ref={boxMedRef}
            className="fixed border-1 border-dashed border-gray-400 hidden h-[320] w-[320]"
          />
          <div
            ref={boxLightRef}
            className="fixed border-1 border-dashed border-gray-200 hidden h-[320] w-[320]"
          />
          <div>
            <div
              ref={trueRefOne}
              onClick={() => ready(true)}
              className="flex z-10 w-[153] h-[153] items-center justify-center m-1 bg-gray-200 hover:bg-gray-300 ease-in-out duration-600 cursor-pointer"
            >
              <div className="fixed w-[153] h-[153]" />
              <p className="rotate-315 text-center uppercase cursor-pointer">
                Demographics
              </p>
            </div>
            <div className="flex w-[153] h-[153] items-center justify-center m-1 bg-gray-100 cursor-not-allowed">
              <p className="rotate-315 text-center uppercase cursor-not-allowed">
                Skin Type Details
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-[153] h-[153] items-center justify-center my-1 bg-gray-100 cursor-not-allowed">
              <p className="rotate-315 text-center uppercase cursor-not-allowed">
                Cosmetic concerns
              </p>
            </div>
            <div className="flex w-[153] h-[153] items-center justify-center my-1 bg-gray-100 cursor-not-allowed">
              <p className="rotate-315 text-center uppercase cursor-not-allowed">
                weather
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default demographics;
