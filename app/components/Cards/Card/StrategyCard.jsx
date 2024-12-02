import React from "react";
import CardLayout from "../CardLayout";
import Buttons from "../../Shared/Buttons";

const StrategyCard = ({ width, height, bg }) => {
  return (
    <CardLayout width={width} height={height} bg={bg}>
      <div
        className="bg-[#1F211C] w-full h-full flex flex-col justify-center items-center bg-clip-padding
          backdrop-filter
          backdrop-blur
          bg-opacity-45
          backdrop-saturate-100
          backdrop-contrast-10 z-20 relative border-[#656363] border-[0.5px] rounded-md"
      >
        {/* <div className="w-[20px] h-[20px] bg-red-400 rounded-full"></div>
        <div>
          <p>QuickSwap</p>
          <p>Decentralized Exchange</p>
        </div>
        <div>
          <Buttons text="Enter app" />
        </div> */}
      </div>

      {/* Absolute Gradient */}
      <div className="absolute bottom-0 right-0 w-[100px] h-[100px] rounded-full bg-red-700 z-5  bg-gradient-to-r from-[#644881] to-[#291240] blur-lg backdrop-blur-lg">
        {" "}
      </div>
    </CardLayout>
  );
};

export default StrategyCard;
