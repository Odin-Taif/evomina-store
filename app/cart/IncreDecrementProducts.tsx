"use client";
import React from "react";
import { useShoppingCart } from "../context/shopincartConext";

type Props = {
  productId: number;
};

const IncreDecrementProducts = (props: Props) => {
  const { decreaseCartQuantity, increaseCartQuantity, getItemQuantity } =
    useShoppingCart();
  const itemQuantity = getItemQuantity(props.productId);

  return (
    <div className="w-[100px] flex flex-row justify-between border border-gray-100">
      <button
        onClick={() => decreaseCartQuantity(props.productId)}
        className="text-black p-3 bg-amber-100"
      >
        -
      </button>
      <span className="text-black py-3 mx-4">{itemQuantity}</span>
      <button
        onClick={() => increaseCartQuantity(props.productId)}
        className="text-black p-3 bg-amber-100"
      >
        +
      </button>
    </div>
  );
};

export default IncreDecrementProducts;
