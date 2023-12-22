import React from "react";
import prisma from "@/app/prismadb";
import Link from "next/link";
import DeleteCart from "./DeleteCart";
import Button from "../components/Button";
import IncreDecrementProducts from "./IncreDecrementProducts";
import AddWatchList from "../watchlist/AddWatchlist";

type Props = {
  userId: number;
};

const AllCartProduct = async (props: Props) => {
  const allcartproduct = await prisma.cart.findMany({
    where: {
      userId: props.userId,
    },
  });

  const cartProdcutPromises = allcartproduct.map((cartProduct) =>
    prisma.product.findUnique({
      where: {
        id: cartProduct.productId,
      },
    })
  );

  const cartProducts = await Promise.all(cartProdcutPromises);
  const allIds = allcartproduct.map((item) => item.productId);

  if (cartProducts.length === 0) {
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
    <div className="">
      {cartProducts.map((cartProduct) => (
        <div
          className="md:flex items-center mt-5 border-t border-gray-200"
          key={cartProduct?.id}
        >
          <div className="w-4/4 border border-amber-50">
            <img
              src={cartProduct?.images.split(",")[0]}
              className="w-[200px] h-[200px] object-cover object-top"
              alt=""
            />
          </div>

          <div className="md:pl-3 md:w-3/4">
            <div className="flex items-center justify-between w-full pt-1">
              <Link href={`/dashboard/${cartProduct?.id}`}>
                <p className="text-base font-black leading-none underline text-gray-800">
                  {cartProduct?.title}
                </p>
              </Link>
              <IncreDecrementProducts productId={cartProduct?.id ?? 0} />
            </div>

            <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
            <p className="w-96 text-xs leading-3 text-gray-600">
              Category: {cartProduct?.category}
            </p>

            <div className="flex items-center justify-between pt-5 pr-6">
              <div className="flex itemms-center">
                <AddWatchList productId={cartProduct?.id} lable />
              </div>

              <p className="text-base font-black leading-none text-gray-800">
                {cartProduct?.price}€
              </p>
            </div>
            <DeleteCart
              productId={cartProduct?.id ?? 0}
              userId={props.userId}
            />
          </div>
        </div>
      ))}
      <Button allIds={allIds} userId={props.userId} />
    </div>
  );
};

export default AllCartProduct;
