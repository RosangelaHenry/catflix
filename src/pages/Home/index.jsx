import React from "react";
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";
import { MarginMedium } from "../../components/UI";

export default function Home({ categoryData }) {
  const categoriesToRender = categoryData.filter(
    (data) => data.videos.length > 0
  );

  return (
    <main>
      <Hero
        category={categoriesToRender[0].category}
        description={categoriesToRender[0].description}
        url={categoriesToRender[0].url}
        color={categoriesToRender[0].color}
        videos={categoriesToRender[0].videos}
      />
      {categoriesToRender.slice(1).map((data, index) => {
        return (
          <Carousel
            key={index}
            category={data.category}
            url={data.url}
            description={data.description}
            color={data.color}
            videos={data.videos}
          />
        );
      })}

      <MarginMedium />
    </main>
  );
}
