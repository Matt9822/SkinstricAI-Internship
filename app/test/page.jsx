import Image from "next/image";
import Info from "../components/info";

export default function test() {
  return (
    <div className="flex justify-center items-center">      
      <Info/>
        <Image
          src="/diamond.svg"
          width={762}
          height={762}
          alt="Diamond"
          className="fixed z-[-1] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />
    </div>
  );
}
