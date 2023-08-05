import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";

import { Advertisements } from "./advertisements";
import { Recommendations } from "./recommendations";
import { BestDishes } from "./bestdishes";
import "../../../css/home.css";
import { Events } from "./events";

export function HomePage() {
  // selector: store => data

  useEffect(() => {
    // backend data request => data
    //  slice: data => store
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
