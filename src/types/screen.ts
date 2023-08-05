import { TabScrollButtonStartIconSlotPropsOverrides } from "@mui/material";
import { Product } from "./product";
import { Restaurant } from "./user";
import { BoArtical } from "./boArtical";

export interface AppRootState {
  homePage: HomePageState;
}

export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBoArticles: BoArtical[];
  trenBoArticles: BoArtical[];
  newsBoArticles: BoArtical[];
}
