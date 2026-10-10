import { MarqueeData } from "@/Type/type";
import Link from "next/link";
import React from "react";

export default function AllProducts({ data }: { data: MarqueeData[] }) {
  return (
    <section id="সব-পণ্য" className="scroll-mt-32">
      <h2 className="mb-3 text-xl font-bold">সব পণ্য</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-base-content/70" aria-live="polite">
            মোট ৩৩টি পণ্য দেখানো হচ্ছে
          </p>
          {/* <div className="flex items-center gap-2">
            <label className="text-sm text-base-content/70" for="sort-products">
              সাজান
            </label>
            <select id="sort-products" className="select select-bordered select-sm">
              <option value="default">ডিফল্ট</option>
              <option value="price-asc">দাম: কম থেকে বেশি</option>
              <option value="price-desc">দাম: বেশি থেকে কম</option>
            </select>
          </div> */}
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((item) => {
            return (
              <li className="contents" key={item.id}>
                <Link
                  className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
                  href={`/product/${item.slug}`}
                >
                  <div className="card-body gap-3 p-4">
                    <div className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                      >
                        {item.image}
                      </span>
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold">
                          {item.nameBn}
                        </h3>
                        <p className="text-xs text-base-content/60">
                          প্রতি {item.unit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <p className="text-xs text-base-content/60">
                          আজকের দাম
                        </p>
                        <p className="text-xl font-bold">
                          {item.today}{" "}
                          <span className="text-sm font-medium">টাকা</span>
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-1 rounded-full bg-base-200 text-green-600 px-2 py-1 text-xs font-semibold price-up">
                        <span
                          className={
                            item.change.pct === 0
                              ? "text-zinc-500"
                              : item.change.dir === "up"
                                ? "text-green-600"
                                : "text-red-600"
                          }
                        >
                          {item.change.pct === 0
                            ? "—"
                            : item.change.dir === "up"
                              ? "▲"
                              : "▼"}{" "}
                          {item.change.pct} %
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
