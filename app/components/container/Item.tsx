"use client";
import React, { useContext, useEffect, useState } from "react";
// import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
// import prisma from "@/app/prismadb";
import { CounterContext } from "@/app/context/counter.context";
import axios from "axios";

type Props = {};

const Item = (props: Props) => {
  // const products = await prisma.product.findMany();
  const { state } = useContext(CounterContext);
  // console.log(state);
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/filterproduct", {
          params: {
            categories: state.selectedCategory,
            // price: state.price,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProducts(response.data.products);
        // console.log("Response", response.data.products);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [state.selectedCategory, state.price]);
  // console.log(products);
  if (!products || products.length === 0) {
    return <div>empty</div>;
  }
  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-12 ">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <Link href={`/dashboard/${product.id}`}>
                <div className="relative rounded-lg">
                  <img
                    src={product.images.split(",")[0]}
                    className="w-[250px] h-[300px] object-cover object-top rounded-lg"
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                      {product.title}
                    </h1>
                    <p className="text-[13px] opacity-60">{product.store}</p>
                  </div>
                  <span className="px-2 font-medium bg-gray-100 rounded-lg">
                    ${product.price}.00
                  </span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Item;
