"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const headerRef = useRef(null);
  const spanRef = useRef(null);
  const testRef = useRef(null)
  const shadowRef = useRef(null)
  const aiRef = useRef(null)
  const boxRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(headerRef.current, {
      x: "-34%",
      duration: 0.7
    }).to(spanRef.current, {
      x: "-14%",
      duration: 0.7
    }, "<+=0").to(shadowRef.current, {
      display: "block",
      duration: 0.7,
      right: "-500"
    }, "<+=0").to(aiRef.current, {
      opacity: 0,
      duration: 0.5
    }, "<+=0").to(testRef.current, {
      fontSize: 15,
      x: "-30%",
      duration: 0.7
    }, "<+=0")
    if (boxRef.current) {
      boxRef.current.addEventListener("mouseenter", () => tl.play());
      boxRef.current.addEventListener("mouseleave", () => tl.reverse());
    }
    return () => {
      if (boxRef.current) {
        boxRef.current.removeEventListener("mouseenter", () => tl.play());
        boxRef.current.removeEventListener("mouseleave", () => tl.reverse());
      }
    };
  }, []);
  return (
    <div className="">
      <main className="flex items-center justify-between">
        <div className="flex">
          <div ref={aiRef} className="absolute top-[51%] left-[30px]">
          <div className="fixed w-[420px] h-[420px] rotate-45 -translate-x-1/2 left-[2px] top-[297px] cursor-pointer z-1 border-2 border-dashed max-[1150]:hidden" />
            <button className="flex items-center">
              <Image
                src="/button.svg"
                width={44}
                height={44}
                alt="button"
                className="rotate-180 max-[1150px]:hidden"
              />
              <p className="text-[14px]/[16px] pl-2 max-[1150px]:hidden">
                DISCOVER A.I.
              </p>
            </button>
          </div>
          <div className="flex w-[300] max-[1150px]:hidden"></div>
        </div>
        <div className="flex items-center w-[593.97px] text-center h-[93vh]">
          <div className="max-[1150px]:relative flex items-center justify-center w-full h-full">
            <div className="border-2 border-dotted w-[420px] h-[420] fixed rotate-45 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 min-[1150px]:hidden" />
            <div className="min-[1150px]:top-[500px] min-[1150px]:fixed max-[1150px]:absolute max-[1150px]:-translate-y-full max-[1150px]:top-1/2 min-[1150px]:-translate-y-1/2">
              <h1
                id="main-header"
                ref={headerRef}
                className=" min-[1150px]:w-[800px] text-[98px]/[100px] font-[300]  max-[1150px]:text-[60px]/[1] max-[1150px]:w-full"
              >
                Sophisticated
                <br />
                <span ref={spanRef} className="block font-[300]">
                  skincare
                </span>
              </h1>
            </div>
            <p className="fixed -translate-x-1/2 left-[15%] bottom-[calc(4vh)] min-[1150px]:text-left max-[1150px]:top-[53%] max-[1150px]:left-1/2 ease-in-out">
              Skinstric developed an A.I. that creates a
              <br />
              highly-personalized routine tailored
              <br />
              to what your skin needs.
            </p>
            <div className="absolute bottom-[33%]">
              <Link rel="stylesheet" href="/test">
                <button className="flex items-center group cursor-pointer">
                  <p className="text-[14px]/[16px] pr-2 uppercase min-[1150px]:hidden group-hover:text-[15px] ease-in-out duration-500">
                    enter experience
                  </p>
                  <Image
                    src="/button.svg"
                    width={44}
                    height={44}
                    alt="button"
                    className="min-[1150px]:hidden group-hover:w-[49px] ease-in-out duration-500"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <Link
            rel="stylesheet"
            href="/test"
            className="fixed z-10 rotate-45 w-[420px] h-[420px] -translate-x-1/2 right-[-420px] top-[297px] max-[1150]:hidden"
          >
            <div
              ref={boxRef}
              className={`fixed border-gray-500 w-[420px] h-[420px] cursor-pointer z-1 border-2 border-dashed max-[1150]:hidden`}
            ></div>
          </Link>
          <div ref={shadowRef} className="fixed z-0 rotate-45 border-gray-300 w-[500px] h-[500px] border-2 border-dashed -translate-x-1/2 -translate-y-1/2 right-[-555px] top-[507px] hidden"></div>
          <div className="absolute top-[51%] right-[30px]">
            <button ref={testRef} className="flex items-center cursor-pointer">
              <p  className="text-[14px]/[16px] pr-2 max-[1150px]:hidden">
                TAKE TEST
              </p>
              <Image
                src="/button.svg"
                width={44}
                height={44}
                alt="button"
                className="max-[1150px]:hidden"
              />
            </button>
          </div>
          <div className="flex w-[300] max-[1150px]:hidden"></div>
        </div>
      </main>
    </div>
  );
}
