import React from "react";
import Title from "../Shared/Title";
import SubTitle from "../Shared/SubTitle";
import SupportedCard from "../Cards/Card/SupportedCard";
import MarginBottom from "../Shared/MarginBottom";
import Grid from "../Shared/Grid";
import Banner from "../Banner";
import Content from "../Content";




const SupportedSection = () => {
  return (
    <div className="w-full m-auto mt-[60vh] text-center">
      <Title text="Supported AMMS" />
      <SubTitle text="We fascilitate the trading of tokens on the following AMMs" />

      <MarginBottom gap="10rem" />
      <Grid
        cols="2"
        gap="1rem"
        justify="space-around"
        children={
          <>
            <SupportedCard width="30rem" height="20rem" bg="#1F211C" />
            <SupportedCard width="30rem" height="20rem" bg="#1F211C" />
          </>
        }
      ></Grid>

      <MarginBottom gap="6rem" />
      <Banner width="100%" height="20rem" bg="#1F211C" />
      <MarginBottom gap="10rem" />


      <Grid
        cols="1"
        children={
          <Content />
        }>
        
      </Grid>
    </div>
  );
};

export default SupportedSection;
