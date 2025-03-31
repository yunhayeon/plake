"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { popularGatheringsQueryOption } from "@/hooks/gathering/usePopularGatherings";

import MainCarousel from "./MainCarousel";

const PopularCarousel = () => {
  const { data: popularData } = useSuspenseQuery(
    popularGatheringsQueryOption(),
  );

  return <MainCarousel type="popular" data={popularData} />;
};

export default PopularCarousel;
