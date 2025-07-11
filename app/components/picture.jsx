"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const picture = ({onCapture}) => {
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc)
  }, [webcamRef]);
  return (
    <div className="flex items-center justify-center bg-black">
      <Webcam
        audio={false}
        height={"full"}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={"full"}
        videoConstraints={videoConstraints}
        className="h-[100vh] bg-black"
      />
      <div className="fixed right-[10%] max-[650]:right-[30%] max-[650]:bottom-[21%]">
        <div className="flex">
          <button
            onClick={capture}
            className="text-white mr-3 flex items-center cursor-pointer"
          >
            Capture photo{" "}
            <Image
              width={50}
              height={50}
              src="/cam.svg"
              alt="Cam"
              className="ml-3"
            />
          </button>
        </div>
      </div>
      <div className="fixed bottom-[15%] right-[40%] max-[888]:right-[20%]">
        <div className="flex items-center max-[1310]:flex-col">
          <Link rel="stylesheet" href="/image" className="cursor-pointer">
            <Image
              src="/button.svg"
              width={70}
              height={70}
              alt="button"
              className="rotate-180 group-hover:w-[75] ease-in-out duration-400 invert ml-10"
            />
          </Link>
          <div className="flex-col text-white ml-60">
            <div className="text-center">
              <p>To get better results make sure to have</p>
            </div>
            <div className="flex justify-between">
              <p>Neutral Expression</p>
              <p className="mx-10">Frontal Pose</p>
              <p>Adequate Lighting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default picture;
