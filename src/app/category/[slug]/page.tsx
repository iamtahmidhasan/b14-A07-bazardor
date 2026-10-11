import { MarqueeData } from "@/Type/type";
import Link from "next/link";
import { Suspense } from "react";

async function CategoryContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.API_URL}/api/bazardor/products?category=${slug}`,
  );
  const products: MarqueeData[] = await res.json();

  const categoryNameBn = products[0]?.categoryNameBn ?? slug;
  const categoryIcon = products[0]?.categoryIcon ?? "🛒";

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6">
      <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="text-4xl">
            {categoryIcon}
          </span>
          <div>
            <h1 className="text-2xl font-bold">{categoryNameBn}</h1>
            <p className="text-sm text-base-content/70">
              {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-base-content/70" aria-live="polite">
            মোট {products.length}টি পণ্য দেখানো হচ্ছে
          </p>
          <div className="flex items-center gap-2">
            <label className="text-sm text-base-content/70" htmlFor="sort-products">
              সাজান
            </label>
            <select id="sort-products" className="select select-bordered select-sm">
              <option value="default">ডিফল্ট</option>
              <option value="price-asc">দাম: কম থেকে বেশি</option>
              <option value="price-desc">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li className="contents" key={product.id}>
              <Link
                className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
                href={`/product/${product.slug}`}
              >
                <div className="card-body gap-3 p-4">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                    >
                      {product.image}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold">
                        {product.nameBn}
                      </h3>
                      <p className="text-xs text-base-content/60">
                        প্রতি {product.unit}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <p className="text-xs text-base-content/60">আজকের দাম</p>
                      <p className="text-xl font-bold">
                        {product.today}{" "}
                        <span className="text-sm font-medium">টাকা</span>
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold ${
                        product.change.dir === "up"
                          ? "price-up"
                          : product.change.dir === "down"
                            ? "price-down"
                            : "price-flat"
                      }`}
                      title={
                        product.change.dir === "up"
                          ? "গতকালের তুলনায় বেড়েছে"
                          : product.change.dir === "down"
                            ? "গতকালের তুলনায় কমেছে"
                            : "গতকালের তুলনায় অপরিবর্তিত"
                      }
                    >
                      <span aria-hidden="true">
                        {product.change.dir === "up"
                          ? "▲"
                          : product.change.dir === "down"
                            ? "▼"
                            : "—"}
                      </span>
                      {product.change.pct}%
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CategorySkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6">
      <div className="skeleton h-28 w-full rounded-2xl" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="skeleton h-36 w-full rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<CategorySkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}
