import { MarqueeData } from "@/Type/type";
import Link from "next/link";
import React from "react";

export default async function TodayIncreased({ data }: { data: MarqueeData[] }) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <span aria-hidden="true" className="text-error">
          ▲
        </span>
        <h2 className="text-xl font-bold">আজ দাম বেড়েছে</h2>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.filter((item) => item.change.dir === "up").map((item) => (
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
                      <p className="text-xs text-base-content/60">আজকের দাম</p>
                      <p className="text-xl font-bold">
                        {item.today}{" "}
                        <span className="text-sm font-medium">টাকা</span>
                      </p>
                    </div>
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-base-200 text-red-600 px-2 py-1 text-xs font-semibold price-up"
                      title="গতকালের তুলনায় বেড়েছে"
                    >
                      <span aria-hidden="true">▲</span>
                      {item.change.pct}%
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
