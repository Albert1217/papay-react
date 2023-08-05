import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";

const initialState: HomePageState = {
  topRestaurants: [],
  bestRestaurants: [],
  trendProducts: [],
  bestBoArticles: [],
  trenBoArticles: [],
  newsBoArticles: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    bestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
    },
    trendProducts: (state, action) => {
      state.trendProducts = action.payload;
    },
    bestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
    trendBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
    newsBoArticles: (state, action) => {
      state.newsBoArticles = action.payload;
    },
  },
});

export const {
  setTopRestaurants,
  bestRestaurants,
  trendProducts,
  bestBoArticles,
  trendBoArticles,
  newsBoArticles,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;

// 54:16 36 dars
