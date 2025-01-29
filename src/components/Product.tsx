import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ProductProps } from "@/lib/typings";

declare global {
  interface String {
    toTitleCase(): string;
  }
}

String.prototype.toTitleCase = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function Product({
  category,
  name,
  price,
  starRating,
  discount,
  imageUrl,
  type,
  owner,
}: ProductProps) {
  const discountedPrice = price - price * discount;

  return (
    <div className="border rounded-xl max-w-[14rem]">
      <div
        className={`m-0  inline-block px-6 py-2 rounded-tl-xl rounded-br-[1.5rem] 
        ${
          type === "hot"
            ? "bg-[#F74B81]"
            : type === "sale"
            ? "bg-[#67BCEE]"
            : type === "new"
            ? "bg-[#67BCEE]"
            : "bg-transparent"
        }
        `}
      >
        <p className="text-white">{type.toTitleCase()}</p>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="">
          <Image src={imageUrl} alt="product" height={314} width={314} />
        </div>
        <div className="flex gap-1 flex-col pb-8">
          <p className="text-[#ADADAD] text-xs">{category}</p>
          <h2 className="font-bold text-[1rem] text-[#253D4E]">{name}</h2>
          <div className="flex flex-row gap-1 items-center">
            {Array.from({ length: starRating }).map((_, i) => (
              <Star fill="orange" stroke="orange" key={i} size={16} />
            ))}
            <p className="text-[#ADADAD]">({starRating})</p>
          </div>
          <p className="text-primary font-semibold">
            <span className="text-[#ADADAD] text-sm">By</span> {owner}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-2 ">
              <p className="text-[1.15rem] font-bold text-primary">
                ${discountedPrice.toFixed(1)}
              </p>
              <p className="text-[#ADADAD] text-sm font-bold mb-1">
                <s>{price}</s>
              </p>
            </div>
            <Button className="bg-[#DEF9EC] text-primary font-bold  hover:bg-[#DEF9EC] focus:bg-[#DEF9EC]px-2">
              <span>
                <ShoppingCart />
              </span>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
