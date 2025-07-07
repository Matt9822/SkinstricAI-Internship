import Image from "next/image";
import Info from "../components/info";
import Link from "next/link";

export default function test() {
  return (
    <div className="flex justify-center items-center">
      <Info />
      <Image
        src="/diamond.svg"
        width={762}
        height={762}
        alt="Diamond"
        className="fixed z-[-1] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
      />
      <div className="absolute left-[10%] bottom-[9.4%]">
        <Link rel="stylesheet" href="/" className="flex items-center cursor-pointer group">
          <Image
            src="/button.svg"
            width={70}
            height={70}
            alt="button"
            className="rotate-180 group-hover:w-[75] ease-in-out duration-400"
          />          
          <p className="pl-3 font-[500] text-[22px] group-hover:text-[25px] ease-in-out duration-500 underline">Back</p>
        </Link>
      </div>
    </div>
  );
}
