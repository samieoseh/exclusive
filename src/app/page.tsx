"use client";
import Link from "next/link";
import { Menu, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });

export default function LandingPage() {
  return (
    <>
      <header className="xl:border-b">
        <nav className="hidden xl:flex justify-between items-center w-[80%] mx-auto py-1">
          <ul className="flex items-center justify-between gap-1">
            <li className="flex items-center">
              <Link href="/about-us" className="text-xs text-[#7E7E7E]">
                About us
              </Link>
            </li>
            <span className="bg-[#7E7E7E] h-[8px] rounded w-[1px] mx-2" />
            <li className="flex items-center">
              <Link href="/about-us" className="text-xs text-[#7E7E7E]">
                My account
              </Link>
            </li>
            <span className="bg-[#7E7E7E] h-2 rounded w-[1px] mx-2" />
            <li className="flex items-center">
              <Link href="/about-us" className="text-xs text-[#7E7E7E]">
                Wishlist
              </Link>
            </li>
            <span className="bg-[#7E7E7E] h-2 rounded w-[1px] mx-2" />
            <li className="flex items-center">
              <Link href="/about-us" className="text-xs text-[#7E7E7E]">
                Order tracking
              </Link>
            </li>
          </ul>

          <p className="text-xs text-[#7E7E7E]">
            100% Secure delivery without contacting the courier
          </p>
          <div className="flex items-center justify-between gap-1">
            <p className="text-xs text-[#7E7E7E]">
              Need help? Call Us: <span>+1800 900</span>
            </p>
            <span className="bg-[#7E7E7E] h-2 rounded w-[1px] mx-2" />
            <div>
              <p className="text-xs text-[#7E7E7E]">English</p>
              {/* // TODO: add chevron */}
            </div>
            <span className="bg-[#7E7E7E] h-2 rounded w-[1px] mx-2" />
            <div>
              <p className="text-xs text-[#7E7E7E]">USD</p>
              {/* // TODO: add chevron */}
            </div>
          </div>
        </nav>
      </header>
      <header className="shadow-md py-2">
        <nav className="w-[90%] py-1 mx-auto flex items-center justify-between">
          <Menu />
          <Image src="/Logo.png" height={45} width={100} alt="logo.png" />
          <div className="flex items-center gap-4 justify-between">
            <div className="relative">
              <Heart />
              <div className="absolute -top-2 -right-2 bg-primary h-5 w-5 rounded-full flex items-center justify-center">
                <p className="text-sm text-white">4</p>
              </div>
            </div>
            <div className="relative">
              <ShoppingCart />
              <div className="absolute -top-2 -right-2 bg-primary h-5 w-5 rounded-full flex items-center justify-center">
                <p className="text-sm text-white">2</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="w-[90%] mx-auto">
        <section className="py-8">
          <h1 className="font-extrabold text-2xl">Featured Categories</h1>

          <MediaQuery maxWidth={440}>
            <div className="py-4">
              <Swiper
                spaceBetween={40}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="h-[11.262rem] w-[10.688rem] bg-[#F2FCE4] rounded-lg flex flex-col items-center justify-center">
                    <Image
                      src="/burger.png"
                      alt="cake & milk"
                      width={80}
                      height={80}
                    />
                    <p className="text-md font-semibold">Cake & Milk</p>
                    <p className="text-sm text-[#7E7E7E]">26 items</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[11.262rem] w-[10.688rem] bg-[#FFFCEB] rounded-lg flex flex-col items-center justify-center">
                    <Image src="/kiwi.png" alt="kiwi" width={80} height={80} />
                    <p className="text-md font-semibold">Organic Kiwi</p>
                    <p className="text-sm text-[#7E7E7E]">26 items</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[11.262rem] w-[10.688rem] bg-[#F2FCE4] rounded-lg flex flex-col items-center justify-center">
                    <Image
                      src="/peach.png"
                      alt="peach"
                      width={80}
                      height={80}
                    />
                    <p className="text-md font-semibold">Peach</p>
                    <p className="text-sm text-[#7E7E7E]">12 items</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[11.262rem] w-[10.688rem] bg-[#FFFCEB] rounded-lg flex flex-col items-center justify-center">
                    <Image
                      src="/apple.png"
                      alt="apple"
                      width={80}
                      height={80}
                    />
                    <p className="text-md font-semibold">Red apple</p>
                    <p className="text-sm text-[#7E7E7E]">5 items</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={441}>
            <div className="flex flex-row flex-wrap gap-3 py-4">
              <div className="h-[11.262rem] w-[10.688rem] bg-[#F2FCE4] rounded-lg flex flex-col items-center justify-center">
                <Image
                  src="/burger.png"
                  alt="cake & milk"
                  width={80}
                  height={80}
                />
                <p className="text-md font-semibold">Cake & Milk</p>
                <p className="text-sm text-[#7E7E7E]">26 items</p>
              </div>

              <div className="h-[11.262rem] w-[10.688rem] bg-[#FFFCEB] rounded-lg flex flex-col items-center justify-center">
                <Image src="/kiwi.png" alt="kiwi" width={80} height={80} />
                <p className="text-md font-semibold">Organic Kiwi</p>
                <p className="text-sm text-[#7E7E7E]">26 items</p>
              </div>

              <div className="h-[11.262rem] w-[10.688rem] bg-[#F2FCE4] rounded-lg flex flex-col items-center justify-center">
                <Image src="/peach.png" alt="peach" width={80} height={80} />
                <p className="text-md font-semibold">Peach</p>
                <p className="text-sm text-[#7E7E7E]">12 items</p>
              </div>

              <div className="h-[11.262rem] w-[10.688rem] bg-[#FFFCEB] rounded-lg flex flex-col items-center justify-center">
                <Image src="/apple.png" alt="apple" width={80} height={80} />
                <p className="text-md font-semibold">Red apple</p>
                <p className="text-sm text-[#7E7E7E]">5 items</p>
              </div>
            </div>
          </MediaQuery>
        </section>
      </main>
    </>
  );
}
