"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function analysis() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const imgOneRef = useRef(null);
  const imgTwoRef = useRef(null);
  const boxRefOne = useRef(null);
  const boxRefTwo = useRef(null);
  const boxMedOneRef = useRef(null);
  const boxMedTwoRef = useRef(null);
  const boxLightOneRef = useRef(null);
  const boxLightTwoRef = useRef(null);
  const inputFile = useRef(null);

  useGSAP(() => {
    const timeOne = gsap.timeline({ paused: true });
    const timeTwo = gsap.timeline({ paused: true });

    timeOne
      .to(boxRefOne.current, {
        scale: 1.2,
      })

      .to(
        boxMedOneRef.current,
        {
          scale: 1.4,
          display: "block",
        },
        "<+=0"
      )

      .to(
        boxLightOneRef.current,
        {
          scale: 1.6,
          display: "block",
        },
        "<+=0"
      )

      .to(
        imgOneRef.current,
        {
          scale: 1.1,
          display: "block",
        },
        "<+=0"
      );

    timeTwo
      .to(boxRefTwo.current, {
        scale: 1.2,
      })

      .to(
        boxMedTwoRef.current,
        {
          scale: 1.4,
          display: "block",
        },
        "<+=0"
      )

      .to(
        boxLightTwoRef.current,
        {
          scale: 1.6,
          display: "block",
        },
        "<+=0"
      )

      .to(
        imgTwoRef.current,
        {
          scale: 1.1,
          display: "block",
        },
        "<+=0"
      );

    if (boxRefTwo.current) {
      boxRefOne.current.addEventListener("mouseenter", () => timeOne.play());
      boxRefOne.current.addEventListener("mouseleave", () => timeOne.reverse());

      boxRefTwo.current.addEventListener("mouseenter", () => timeTwo.play());
      boxRefTwo.current.addEventListener("mouseleave", () => timeTwo.reverse());
    }

    return () => {
      if (boxRefTwo.current) {
        boxRefOne.current.removeEventListener("mouseenter", () =>
          timeOne.play()
        );
        boxRefOne.current.removeEventListener("mouseleave", () =>
          timeOne.reverse()
        );

        boxRefTwo.current.removeEventListener("mouseenter", () =>
          timeTwo.play()
        );
        boxRefTwo.current.removeEventListener("mouseleave", () =>
          timeTwo.reverse()
        );
      }
    };
  });

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              image: event.target.result,
            }),
          }
        );

        const data = await response.json();
        console.log(data.data);
        localStorage.setItem("image", data.data);

        if (data.success === true) {
          setSuccess(true);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };
  if (success) {
    window.location.href = '/analysis'
  } else {
    return (
      <div className="flex items-center justify-between h-[93vh] max-[900]:flex-col">
        <div className="flex h-full w-full items-center justify-center">
          <div className="absulute">
            <div
              ref={boxRefOne}
              className="fixed z-10 -translate-x-1/4 -translate-y-1/4 rotate-45 border-2 border-dashed border-gray-600 h-[200] w-[200]"
            />
            <div
              ref={boxMedOneRef}
              className="fixed -translate-x-1/4 -translate-y-1/4 rotate-45 border-1 border-dashed border-gray-400 hidden h-[200] w-[200]"
            />
            <div
              ref={boxLightOneRef}
              className="fixed -translate-x-1/4 -translate-y-1/4 rotate-45 border-1 border-dashed border-gray-200 hidden h-[200] w-[200]"
            />
            <Image
              ref={imgOneRef}
              src="camera.svg"
              width={100}
              height={100}
              alt="camera"
            />
            <div className="absolute">
              <Image
                src="line.svg"
                width={80}
                height={80}
                alt="gallery"
                className="relative rotate-0 right-[-80] bottom-[140]"
              />
              <p className="relative bottom-[220] right-[-165] text-left w-[140]">
                Allow A.I.
                <br />
                to Scan Your Face
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="absulute">
            <div
              ref={boxRefTwo}
              className="cursor-pointer fixed z-10 -translate-x-1/4 -translate-y-1/4 rotate-45 border-2 border-dashed border-gray-600 h-[200] w-[200]"
              onClick={onButtonClick}
            >
              <input
                id="fileInput"
                onChange={handleFileChange}
                ref={inputFile}
                accept=".pdf,.svg,.jpg,.webp,.png,.bmp"
                type="file"
                className="w-full h-full hidden"
              />
            </div>
            <div
              ref={boxMedTwoRef}
              className="fixed -translate-x-1/4 -translate-y-1/4 rotate-45 border-1 border-dashed border-gray-400 hidden h-[200] w-[200]"
            />
            <div
              ref={boxLightTwoRef}
              className="fixed -translate-x-1/4 -translate-y-1/4 rotate-45 border-1 border-dashed border-gray-200 hidden h-[200] w-[200]"
            />
            <Image
              ref={imgTwoRef}
              src="gallery.svg"
              width={100}
              height={100}
              alt="gallery"
            />
            <div className="absolute">
              <Image
                src="line.svg"
                width={80}
                height={80}
                alt="gallery"
                className="relative rotate-180 right-[60] bottom-10"
              />
              <p className="relative bottom-10 right-[180] text-right w-[125]">
                Allow A.I.
                <br />
                to access Gallery
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-[10%] bottom-[9.4%] max-[900]:bottom-[10]">
          <Link
            rel="stylesheet"
            href="/test"
            className="flex items-center cursor-pointer group"
          >
            <Image
              src="/button.svg"
              width={70}
              height={70}
              alt="button"
              className="rotate-180 group-hover:w-[75] ease-in-out duration-400"
            />
            <p className="pl-3 font-[500] text-[22px] group-hover:text-[25px] ease-in-out duration-500 underline">
              Back
            </p>
          </Link>
        </div>
      </div>
    );
  }
}
