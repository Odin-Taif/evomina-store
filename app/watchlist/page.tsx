import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import AllCartProduct from "../components/AllCartProduct";
import AllWatchListProduct from "../components/AllWatchListProudts";

type Props = {};

const Cart = async (props: Props) => {
  const session = await getServerSession(options);
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-5">
        <AllWatchListProduct userId={session?.user?.id} />
      </div>
    </>
  );
};

export default Cart;
