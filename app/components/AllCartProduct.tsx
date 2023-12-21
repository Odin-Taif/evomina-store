import React from "react";
import prisma from "@/app/prismadb";
import Link from "next/link";
import DeleteCart from "./DeleteCart";
import Button from "./Button";

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
    <div className="mt-14">
      {cartProducts.map((cartProduct) => (
        // <div
        //   key={cartProduct?.id}
        //   className="flex items-center justify-between w-8/12 mx-auto shadow-lg p-5 rounded-lg mt-6"
        // >
        //   <div>
        //     <h1 className="text-2xl mb-3">{cartProduct?.title}</h1>
        //     <h2 className="mb-2 text-neutral-800">
        //       Price: {cartProduct?.price}
        //     </h2>
        //     <h3 className="text-sm text-neutral-600 mb-2">
        //       Category: {cartProduct?.category}
        //     </h3>

        //     <h3 className="text-sm text-neutral-600 mb-2">
        //       Store: {cartProduct?.store}
        //     </h3>
        //     <DeleteCart
        //       productId={cartProduct?.id ?? 0}
        //       userId={props.userId}
        //     />
        //   </div>
        //   <Link href={`/dashboard/${cartProduct?.id}`}>
        //     <div>
        // <img
        //   src={cartProduct?.images.split(",")[0]}
        //   className="w-[200px] h-[200px] object-cover object-top"
        //   alt=""
        // />
        //     </div>
        //   </Link>
        // </div>

        <div
          className="md:flex items-center mt-14 py-8 border-t border-gray-200"
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
            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
              RF293
            </p>
            <div className="flex items-center justify-between w-full pt-1">
              <Link href={`/dashboard/${cartProduct?.id}`}>
                <p className="text-base font-black leading-none underline text-gray-800">
                  {cartProduct?.title}
                </p>
              </Link>
              <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>

            <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
            <p className="w-96 text-xs leading-3 text-gray-600">
              Category: {cartProduct?.category}
            </p>
            <DeleteCart
              productId={cartProduct?.id ?? 0}
              userId={props.userId}
            />
            <div className="flex items-center justify-between pt-5 pr-6">
              <div className="flex itemms-center">
                <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                  Add to favorites
                </p>
              </div>
              <p className="text-base font-black leading-none text-gray-800">
                {cartProduct?.price}€
              </p>
            </div>
          </div>
        </div>
      ))}
      <Button allIds={allIds} userId={props.userId} />
    </div>
  );
};

export default AllCartProduct;
