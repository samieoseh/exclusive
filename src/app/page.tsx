"use client";
import Link from "next/link";
import { Menu, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Product from "@/components/Product";
import { ProductProps } from "@/lib/typings";

const MediaQuery = dynamic(() => import("react-responsive"), { ssr: false });

export default function LandingPage() {
  const products: ProductProps[] = [
    {
      category: "snack",
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      discount: 0.1,
      price: 32.8,
      imageUrl: "/product 1.png",
      starRating: 4,
      type: "hot",
      owner: "Nest Foods",
    },
    {
      category: "Hodo Foods",
      name: "All Natural Italian-Style Chicken Meatballs",
      discount: 0.25,
      price: 55.8,
      imageUrl: "/product 2.png",
      starRating: 3,
      type: "new",
      owner: "Stoofer",
    },
    {
      category: "Snack",
      name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      discount: 0.15,
      price: 52.8,
      imageUrl: "/product 3.png",
      starRating: 2,
      type: "sale",
      owner: "StarKist",
    },
    {
      category: "Pet Foods",
      name: "Blue Diamond Almonds Lightly Salted Vegetables",
      discount: 0.15,
      price: 25.8,
      imageUrl: "/product 4.png",
      starRating: 1,
      type: "sale",
      owner: "Nest Foods",
    },
    {
      category: "Hodo Foods",
      name: "Chobani Complete Vanilla Greek Yogurt",
      discount: 0.15,
      price: 25.8,
      imageUrl: "/product 5.png",
      starRating: 1,
      type: "sale",
      owner: "Nest Foods",
    },
    {
      category: "Meats",
      name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
      discount: 0.1,
      price: 33.8,
      imageUrl: "/product 6.png",
      starRating: 1,
      type: "hot",
      owner: "Nest Foods",
    },
    {
      category: "Snacks",
      name: "Encore Seafoods Stuffed Alaskan Salmon",
      discount: 0.1,
      price: 37.8,
      imageUrl: "/product 7.png",
      starRating: 1,
      type: "new",
      owner: "Nest Foods",
    },
    {
      category: "Coffes",
      name: "Gorton’s Beer Battered Fish Fillets with soft paper",
      discount: 0.2,
      price: 37.8,
      imageUrl: "/product 8.png",
      starRating: 5,
      type: "new",
      owner: "Old El Paso",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState("all");

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
          <div>
            <h1 className="font-extrabold text-2xl text-[#253D4E]">
              Featured Categories
            </h1>

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
                      <Image
                        src="/kiwi.png"
                        alt="kiwi"
                        width={80}
                        height={80}
                      />
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
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-2xl text-[#253D4E]">
              Popular Products
            </h1>
            <div className="flex flex-row items-center gap-x-4 flex-wrap">
              <button
                className={`${
                  selectedProduct === "all" ? "text-primary" : "text-[#253D4E]"
                } font-semibold`}
              >
                All
              </button>
              <button
                className={`${
                  selectedProduct === "milk-and-diaries"
                    ? "text-primary"
                    : "text-[#253D4E]"
                } font-semibold`}
              >
                Milks & Dairies
              </button>
              <button
                className={`${
                  selectedProduct === "coffes-and-teas"
                    ? "text-primary"
                    : "text-[#253D4E]"
                } font-semibold`}
              >
                Coffes & Teas
              </button>
              <button
                className={`${
                  selectedProduct === "pet-foods"
                    ? "text-primary"
                    : "text-[#253D4E]"
                } font-semibold`}
              >
                Pet Foods
              </button>
              <button
                className={`${
                  selectedProduct === "meats"
                    ? "text-primary"
                    : "text-[#253D4E]"
                } font-semibold`}
              >
                Meats
              </button>
              <button
                className={`${
                  selectedProduct === "vegetables"
                    ? "text-primary"
                    : "text-[#253D4E]"
                } font-semibold`}
              >
                Vegetables
              </button>
              <button
                className={`${
                  selectedProduct === "fruits"
                    ? "text-primary"
                    : "text-[#253D4E]"
                } font-semibold`}
              >
                Fruits
              </button>
            </div>
            <div className="flex flex-col gap-8 py-4 lg:flex-row flex-wrap lg:gap-4">
              {products.map((product, index) => (
                <Product
                  key={index}
                  category={product.category}
                  name={product.name}
                  discount={product.discount}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  starRating={product.starRating}
                  type={product.type}
                  owner={product.owner}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
