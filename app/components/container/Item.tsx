"use client";
import React, { useContext, useEffect, useState } from "react";
// import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
// import prisma from "@/app/prismadb";
import { CounterContext } from "@/app/context/counter.context";
import axios from "axios";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import AddCart from "../AddCart";

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
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-5 ">
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <Link href={`/dashboard/${product.id}`}>
              <div className="relative rounded-lg border border-amber-300 ">
                <img
                  src={product.images.split(",")[0]}
                  className="w-[200px] h-[200px] object-cover object-top rounded-lg"
                  alt=""
                />
                {/* <span className="absolute bottom-0 right-0 bg-amber-300 text-black-200 p-2 rounded hover:bg-amber-500 m-2">
                  <MdOutlineAddShoppingCart />
                </span> */}
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

export default Item;
