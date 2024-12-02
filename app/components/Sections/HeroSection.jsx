import React from "react";
import Image from "next/image";

const HeroSection = () => {
  // Array of positions
  //   const positions = [
  //     // { top: "10", left: "48",  },
  //     // { top: "70", left: "20",  },
  //     // { top: "10", left: "80",  },

  //   ];

  return (
    <div className="relative w-full h-auto">
      {/* <div className="absolute">
        {positions.map((position, index) => (
          <div
            key={index}
            className={`relative top-${position.top} left-${position.left}  ]`}
          >
            <Image
              src="/assets/Rectangle 430.png"
              alt=""
              width={20}
              height={10}
              //   unoptimized
            />
          </div>
        ))}
      </div> */}

      {/* <div className={`absolute top-0 right-20  ]`}>
        <Image
          src="/assets/padlock.png"
          alt=""
          width={40}
          height={40}
          unoptimized
        />
      </div>
      <div className={`absolute top-[8vh] left-[10vw]  ]`}>
        <Image
          src="/assets/padlock.png"
          alt=""
          width={40}
          height={40}
          unoptimized
        />
      </div>
      <div className={`absolute top-60 right-40  ]`}>
        <Image
          src="/assets/padlock.png"
          alt=""
          width={40}
          height={40}
          unoptimized
        />
      </div> */}

      <div className="z-10 mt-[6rem] text-center m-auto flex flex-col justify-center items-center">
        <h1 className="z-10 text-[#c7c7c7] leading-[1.5] w-[80vw] m-auto font-extrabold text-[4vw]">
          Maximize Capital Efficiency with{" "}
          <span className="bg-gradient-to-r  from-[#332d3ada] to-[#3d3d4e] inline-block text-transparent bg-clip-text">
            Dynamic Liquidity Solutions
          </span>{" "}
          <span className="absolute right-[7vw]">
            <Image
              className="w-[7vw]"
              src="/assets/paperjet.png"
              alt=""
              width={100}
              height={100}
            />
          </span>
        </h1>
        <p className=" text-[#83838b] text-[18px] w-[45vw] m-auto mb-10">
          Automating Liquidity and Trading for Optimal Market Efficiency
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
