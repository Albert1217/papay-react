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
  useEffect(() => {
    console.log("componentDidMount => Data fetch");
    return () => {
      console.log("componentWillUnmount process");
    };
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
