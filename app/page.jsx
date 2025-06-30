import Image from "next/image";
import Anibutton from "./components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="flex items-center justify-between">
        <div className="flex">
          <div className="absolute top-[51%] left-[30px]">
            <button className="flex items-center">
              <Image
                src="/button.svg"
                width={44}
                height={44}
                alt="button"
                className="rotate-180 max-[1020px]:hidden"
              />
              <p className="text-[14px]/[16px] pl-2 max-[1020px]:hidden">
                DISCOVER A.I.
              </p>
            </button>
          </div>
          <div className="flex">
            <Image
              src="/rectangleSquare.svg"
              width={301}
              height={602}
              alt="dotted line"
              className="max-[1020px]:hidden"
            />
          </div>
        </div>
        <div className="flex items-center w-[593.97px] text-center h-[93vh]">
          <div className="max-[1020px]:relative flex items-center justify-center w-full h-full">
            <div className="border-2 border-dotted w-[420px] h-[420] fixed rotate-45 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 min-[1020px]:hidden" />
            <h1
              id="main-header"
              className="text-[98px]/[120px] font-[300] top-1/2 max-[1020px]:text-[60px]/[1] max-[1020px]:absolute max-[1020px]:-translate-y-full max-[1020px]:w-full"
            >
              Sophisticated skincare
            </h1>
            <p className="fixed -translate-x-1/2 left-[15%] bottom-[calc(4vh)] min-[1020px]:text-left max-[1020px]:top-[53%] max-[1020px]:left-1/2 ">
              Skinstric developed an A.I. that creates a
              <br />
              highly-personalized routine tailored
              <br />
              to what your skin needs.
            </p>
            <div className="absolute bottom-[33%]">
              <Link rel="stylesheet" href="/test">
                <button className="flex items-center group cursor-pointer">
                  <p className="text-[14px]/[16px] pr-2 uppercase min-[1020px]:hidden group-hover:text-[15px] ease-in-out duration-500">
                    enter experience
                  </p>
                  <Image
                    src="/button.svg"
                    width={44}
                    height={44}
                    alt="button"
                    className="min-[1020px]:hidden group-hover:w-[49px] ease-in-out duration-500"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Anibutton />
      </main>
    </div>
  );
}
