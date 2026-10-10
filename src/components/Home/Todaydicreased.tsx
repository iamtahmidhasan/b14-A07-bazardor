import React from "react";

export default function Todaydicreased() {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <span aria-hidden="true" className="text-success">
          ▼
        </span>
        <h2 className="text-xl font-bold">আজ দাম কমেছে</h2>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/kaccha-moric"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🌶️
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">কাঁচামরিচ</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ৯২ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-down"
                  title="গতকালের তুলনায় কমেছে"
                >
                  <span aria-hidden="true">▼</span>১২.৪%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/roshun"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🧄
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">রসুন</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ১২৫ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-down"
                  title="গতকালের তুলনায় কমেছে"
                >
                  <span aria-hidden="true">▼</span>৭.৪%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/alu"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🥔
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">আলু</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ৩০ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-down"
                  title="গতকালের তুলনায় কমেছে"
                >
                  <span aria-hidden="true">▼</span>৬.২%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/katla-mach"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🐠
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">কাতলা মাছ</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ৪৩ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-down"
                  title="গতকালের তুলনায় কমেছে"
                >
                  <span aria-hidden="true">▼</span>৪.৪%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/hanser-mangsho"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🦆
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">হাঁসের মাংস</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ২৮৫ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-down"
                  title="গতকালের তুলনায় কমেছে"
                >
                  <span aria-hidden="true">▼</span>৩.৪%
                </span>
              </div>
            </div>
          </a>
        </li>
        <li className="contents">
          <a
            className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary"
            href="/product/khasir-mangsho"
          >
            <div className="card-body gap-3 p-4">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-200 text-2xl"
                >
                  🍖
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">খাসির মাংস</h3>
                  <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-base-content/60">আজকের দাম</p>
                  <p className="text-xl font-bold">
                    ১,২৯০ <span className="text-sm font-medium">টাকা</span>
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-down"
                  title="গতকালের তুলনায় কমেছে"
                >
                  <span aria-hidden="true">▼</span>৩.০%
                </span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
