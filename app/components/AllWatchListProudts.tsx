import React from "react";
import prisma from "@/app/prismadb";
import Link from "next/link";
import DeleteCart from "./DeleteCart";
import Button from "./Button";

type Props = {
  userId?: number;
};

const AllWatchListProduct = async (props: Props) => {
  const allwatchlistproduct = await prisma.watchList.findMany({
    where: {
      userId: props.userId,
    },
  });

  const cartProdcutPromises = allwatchlistproduct.map((watchListProduct) =>
    prisma.product.findUnique({
      where: {
        id: watchListProduct.productId,
      },
    })
  );

  const watchlistProducts = await Promise.all(cartProdcutPromises);

  const allIds = allwatchlistproduct.map((item) => item.productId);

  if (watchlistProducts.length === 0) {
    return (
      <div className="relative flex items-center justify-center">
        <img src="empty.png" alt="" />
        <h1 className="absolute top-[80%] text-2xl text-amber-500">
          Empty Cart
        </h1>
      </div>
    );
  }
  return (
    <div className="mt-14">
      {watchlistProducts.map((watchlistProduct) => (
        <div
          key={watchlistProduct?.id}
          className="flex items-center justify-between w-8/12 mx-auto shadow-lg p-5 rounded-lg mt-6"
        >
          <div>
            <h1 className="text-2xl mb-3">{watchlistProduct?.title}</h1>
            <h2 className="mb-2 text-neutral-800">
              Price: {watchlistProduct?.price}
            </h2>
            <h3 className="text-sm text-neutral-600 mb-2">
              Category: {watchlistProduct?.category}
            </h3>

            <h3 className="text-sm text-neutral-600 mb-2">
              Store: {watchlistProduct?.store}
            </h3>
            <DeleteCart
              productId={watchlistProduct?.id}
              userId={props.userId}
            />
          </div>
          <div>
            <img
              src={watchlistProduct?.images.split(",")[0]}
              className="w-[200px] h-[200px] object-cover object-top"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllWatchListProduct;
