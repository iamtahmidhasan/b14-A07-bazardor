import AllProducts from "@/components/Home/AllProducts";
import Hero from "@/components/Home/Hero";
import Marquee from "@/components/Home/Marquee";
import Todaydicreased from "@/components/Home/Todaydicreased";
import TodayIncreased from "@/components/Home/TodayIncreased";
import React from "react";

export default function page() {
  return (
    <>
      <Marquee />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
        <Hero />
        <TodayIncreased />
        <Todaydicreased />
        <AllProducts />
      </div>
    </>
  );
}
