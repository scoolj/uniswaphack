import React from "react";
import Title from "../Shared/Title";
import SubTitle from "../Shared/SubTitle";
import SupportedCard from "../Cards/Card/SupportedCard";
import MarginBottom from "../Shared/MarginBottom";
import Grid from "../Shared/Grid";




const SupportedSection = () => {
  return (
    <div className="w-full m-auto mt-[60vh] text-center">
      <Title text="Supported AMMS" />
      <SubTitle text="We fascilitate the trading of tokens on the following AMMs" />

      <MarginBottom gap="10rem" />
      <Grid
        cols="2"
        children={
          <>
            <SupportedCard />
            <SupportedCard />
          </>
        }
      ></Grid>
    </div>
  );
};

export default SupportedSection;
