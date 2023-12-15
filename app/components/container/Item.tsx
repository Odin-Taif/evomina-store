import React from "react";
import Link from "next/link";
import prisma from "@/app/prismadb";

type Props = {};

const Item = async (props: Props) => {
  const products = await prisma.product.findMany();

  if (products.length === 0) {
    return <div>empty</div>;
  }
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-5 ">
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/dashboard/${product.id}`}>
            <div className="relative border border-amber-400 rounded-lg">
              <img
                src={product.images.split(",")[0]}
                className="w-[300px] h-[240px] object-cover object-top rounded-lg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-left justify-between mt-2">
              <div>
                <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                  {product.title}
                </h1>
                <span className="font-medium bg-gray-100 rounded-lg">
                  ${product.price}.00
                </span>
                <p className="text-[13px] opacity-60">{product.store}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Item;
