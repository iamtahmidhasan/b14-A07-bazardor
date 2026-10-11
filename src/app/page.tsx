import AllProducts from "@/components/Home/AllProducts";
import Hero from "@/components/Home/Hero";
import Todaydicreased from "@/components/Home/Todaydicreased";
import TodayIncreased from "@/components/Home/TodayIncreased";
import { MarqueeData } from "@/Type/type";
import { Suspense } from "react";

async function HomeContent() {
  const productsRes = await fetch(`${process.env.API_URL}/api/bazardor/products`, {
    next: { revalidate: 300 },
  });
  const productsData: MarqueeData[] = await productsRes.json();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
      <Hero />
      <TodayIncreased data={productsData} />
      <Todaydicreased data={productsData} />
      <AllProducts data={productsData} />
    </div>
  );
}

function HomeSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
      <div className="skeleton h-48 w-full rounded-2xl" />
      <div className="skeleton h-40 w-full rounded-2xl" />
      <div className="skeleton h-40 w-full rounded-2xl" />
      <div className="skeleton h-64 w-full rounded-2xl" />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HomeContent />
    </Suspense>
  );
}
