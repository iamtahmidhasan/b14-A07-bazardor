import React from "react";

export default function TodayIncreased() {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <span aria-hidden="true" className="text-error">
          ▲
        </span>
        <h2 className="text-xl font-bold">আজ দাম বেড়েছে</h2>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/peyaj"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🧅
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">পেঁয়াজ</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ৫৪ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-up"
                  title="গতকালের তুলনায় বেড়েছে"
                >
                  <span aria-hidden="true">▲</span>১২.৫%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/ada"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🫚
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">আদা</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ৮৫ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-up"
                  title="গতকালের তুলনায় বেড়েছে"
                >
                  <span aria-hidden="true">▲</span>৯.০%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/begun"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🍆
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">বেগুন</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ৪৪ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-up"
                  title="গতকালের তুলনায় বেড়েছে"
                >
                  <span aria-hidden="true">▲</span>৪.৮%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/rui-mach"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🐟
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">রুই মাছ</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ৪৬ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-up"
                  title="গতকালের তুলনায় বেড়েছে"
                >
                  <span aria-hidden="true">▲</span>৪.৫%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/dim"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🥚
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">ডিম</h3>
                  <p className="text-xs text-base-content/60">প্রতি ডজন</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ১৫৮ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-up"
                  title="গতকালের তুলনায় বেড়েছে"
                >
                  <span aria-hidden="true">▲</span>৩.৯%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/mokhhan"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🧈
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">
                    মাখন (১০০ গ্রাম)
                  </h3>
                  <p className="text-xs text-base-content/60">প্রতি পিস</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ১৪৫ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-up"
                  title="গতকালের তুলনায় বেড়েছে"
                >
                  <span aria-hidden="true">▲</span>৩.৬%
                </span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
