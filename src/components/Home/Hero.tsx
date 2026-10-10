import Image from 'next/image';
import React from 'react'

export default function Hero() {
    return (
        <section className="hero rounded-3xl border border-base-300 bg-base-100">
            <div className="hero-content w-full flex-col items-start gap-6 py-10 lg:flex-row lg:justify-between">
                <div className="max-w-xl">
                    <p className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        শনিবার, ১০ অক্টোবর, ২০২৬
                    </p>
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl">আজকের বাজারের দাম এক নজরে</h1>
                    <p className="mt-3 text-base-content/70">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <a className="btn btn-primary" href="#সব-পণ্য">সব পণ্য দেখুন</a>
                    </div>
                </div>
                <Image alt="তাজা বাজারের ঝুড়ি" width="360" height="288"  className="h-auto w-full max-w-xs shrink-0 sm:max-w-sm" src="/bazar-hero.svg" />
            </div>
        </section>
    )
}
