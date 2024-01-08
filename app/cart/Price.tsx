"use client";
import React from "react";
import { useShoppingCart } from "../context/shopincartConext";

type Props = {
  price: number;
  productId: number;
};

const ProductPrice = (props: Props) => {
  const { getItemQuantity } = useShoppingCart();
  const itemQuantity = getItemQuantity(props.productId);
  const price = props.price * itemQuantity;
  return (
    <div className="text-base font-black leading-none text-gray-800">
      {price}€
    </div>
  );
};

export default ProductPrice;
