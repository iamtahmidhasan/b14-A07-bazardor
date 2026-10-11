import { MarqueeData } from "@/Type/type";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function ProductContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(`${process.env.API_URL}/api/bazardor/products`);
  const products: MarqueeData[] = await res.json();
  const data = products.find((product) => product.slug === slug);

  if (!data) {
    notFound();
  }

  const markets = data.markets;
  const minPrice = Math.min(...markets.map((market) => market.min));
  const maxPrice = Math.max(...markets.map((market) => market.max));
  const avgPrice = Math.round(
    markets.reduce((sum, market) => sum + (market.min + market.max) / 2, 0) /
      markets.length,
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href={`/category/${data.category}`}>{data.categoryNameBn}</Link>
          </li>
          <li>{data.nameBn}</li>
        </ul>
      </nav>
      <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span
            aria-hidden="true"
            className="grid size-20 shrink-0 place-items-center rounded-2xl bg-base-200 text-4xl"
          >
            {data.image}
          </span>
          <div className="flex-1">
            <h1 className="text-2xl font-bold sm:text-3xl">{data.nameBn}</h1>
            <p className="text-sm text-base-content/70">
              প্রতি {data.unit} · {data.categoryNameBn}
            </p>
            <p className="mt-2 text-sm text-base-content/70">
              গতকালের তুলনায় আজ দাম{" "}
              <span className="font-semibold">
                {data.change.dir === "up" ? "বেড়েছে" : "কমেছে"}
              </span>{" "}
              {data.change.pct}%
            </p>
          </div>
          <div className="rounded-box bg-base-200 px-5 py-4 text-center">
            <p className="text-sm text-base-content/70">আজকের দাম</p>
            <p className="text-3xl font-bold">{data.today}</p>
            <p className="text-sm text-base-content/70">টাকা / {data.unit}</p>
            <span
              className={`inline-flex items-center gap-1 text-sm font-semibold ${
                data.change.dir === "up" ? "text-error" : "text-success"
              }`}
              title={data.change.dir === "up" ? "বেড়েছে" : "কমেছে"}
            >
              <span aria-hidden="true">
                {data.change.dir === "up" ? "▲" : "▼"}
              </span>
              <span>{data.change.pct}%</span>
            </span>
          </div>
        </div>
      </header>
      <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="flex flex-col gap-6">
          <section>
            <h2 className="mb-3 text-lg font-semibold">দামের সারসংক্ষেপ</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="stat rounded-box border border-base-300 bg-base-100">
                <div className="stat-title">সর্বনিম্ন দাম</div>
                <div className="stat-value text-2xl text-success">
                  {minPrice}
                  <span className="text-sm font-medium"> টাকা</span>
                </div>
                <div className="stat-desc">সবচেয়ে কম দামের বাজার</div>
              </div>
              <div className="stat rounded-box border border-base-300 bg-base-100">
                <div className="stat-title">সর্বাধিক দাম</div>
                <div className="stat-value text-2xl text-error">
                  {maxPrice}
                  <span className="text-sm font-medium"> টাকা</span>
                </div>
                <div className="stat-desc">সবচেয়ে বেশি দামের বাজার</div>
              </div>
              <div className="stat rounded-box border border-base-300 bg-base-100">
                <div className="stat-title">গড় দাম</div>
                <div className="stat-value text-2xl text-primary">
                  {avgPrice}
                  <span className="text-sm font-medium"> টাকা</span>
                </div>
                <div className="stat-desc">প্রতি {data.unit}-এর হিসাবে</div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-3 text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>
            <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>বাজার</th>
                    <th>বিভাগ</th>
                    <th className="text-right">সর্বনিম্ন</th>
                    <th className="text-right">সর্বাধিক</th>
                    <th className="text-right">গড়</th>
                  </tr>
                </thead>
                <tbody>
                  {markets.map((market) => (
                    <tr key={`${market.market}-${market.division}`}>
                      <td className="font-medium">{market.market}</td>
                      <td className="text-base-content/70">
                        {market.division}
                      </td>
                      <td className="text-right">{market.min} টাকা</td>
                      <td className="text-right">{market.max} টাকা</td>
                      <td className="text-right font-semibold">
                        {((market.min + market.max) / 2).toFixed(2)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <a className="btn btn-ghost" href={`/category/${data.category}`}>
          {data.categoryIcon} সব {data.categoryNameBn}
        </a>
      </div>
    </div>
  );
}

function ProductSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6">
      <div className="skeleton h-6 w-64" />
      <div className="skeleton h-32 w-full rounded-2xl" />
      <div className="skeleton h-64 w-full rounded-2xl" />
    </div>
  );
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductContent params={params} />
    </Suspense>
  );
}
