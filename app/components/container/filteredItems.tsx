"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CounterContext } from "@/app/context/counter.context";
import AddCart from "../AddCart";
import Loader from "../reusableComponents/Loader";

type Products = {
  id: number;
  title: string;
  description: string;
  category: string;
  store: string;
  price: number;
  images: string;
  userId: number;
};
type Props = {
  products: Products[];
};

const FilteredItems = ({ products }: Props) => {
  const { state } = useContext(CounterContext);
  const [filtedProducts, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const newProducts = products.filter(
      (product) =>
        state.selectedCategory.includes(product.category) &&
        product.price <= state.price.max &&
        product.price >= state.price.min
    );
    setProducts(newProducts);
  }, [state.selectedCategory, state.price]);

  if (!filtedProducts || filtedProducts.length === 0) {
    return <div>Empty</div>;
  }
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-5 ">
      {filtedProducts &&
        filtedProducts.map((product) => (
          <div key={product.id}>
            <Link href={`/dashboard/${product.id}`}>
              <div className="relative rounded-lg border border-amber-300 ">
                <img
                  src={product.images.split(",")[0]}
                  className="w-[200px] h-[200px] object-cover object-top rounded-lg"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-left justify-between px-2 mt-2">
                <div>
                  <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                    {product.title}
                  </h1>
                  <p className="text-[13px] opacity-60">{product.store}</p>
                </div>
                <span className="font-medium w-fit px-2 bg-gray-100 rounded-lg">
                  ${product.price}.00
                </span>
              </div>
            </Link>
            <div className="relative">
              <span className="absolute bottom-0 right-0 w-fit">
                <AddCart productId={product.id} />
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FilteredItems;
