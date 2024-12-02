import React from 'react'
import MarginTop from '../Shared/MarginTop'
import StrategyCard from '../Cards/Card/StrategyCard'
import Grid from '../Shared/Grid';

const StrategiesSection = () => {
  return (
    <div>
      <MarginTop gap="15rem" />
      <Grid cols="2" justify="center " gap="5rem" >
        <StrategyCard width="22rem" height="35rem" bg="#1F211C" />
        <StrategyCard width="22rem" height="35rem" bg="#1F211C" />
      </Grid>
    </div>
  );
}

export default StrategiesSection