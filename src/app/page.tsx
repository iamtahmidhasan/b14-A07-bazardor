import AllProducts from "@/components/Home/AllProducts";
import Hero from "@/components/Home/Hero";
import Marquee from "@/components/Home/Marquee";
import Todaydicreased from "@/components/Home/Todaydicreased";
import TodayIncreased from "@/components/Home/TodayIncreased";
import { MarqueeData, SingleCat } from "@/Type/type";
import React from "react";

export default async function page() {
  const [categoriesRes, productsRes] = await Promise.all([
    fetch(`${process.env.API_URL}/api/bazardor/categories`,{next:{revalidate:300}}),
    fetch(`${process.env.API_URL}/api/bazardor/products`,{next:{revalidate:300}})
  ])
  const categoriesData:SingleCat[] = await categoriesRes.json(); 
  const productsData:MarqueeData[] = await productsRes.json(); 

  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
        <Hero />
        <TodayIncreased data={productsData}/>
        <Todaydicreased data={productsData}/>
        <AllProducts data={productsData}/>
      </div>
    </>
  );
}
