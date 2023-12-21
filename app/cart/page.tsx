import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import AllCartProduct from "./AllCartProduct";
import Allpurchased from "./Allpurchased";
import Container from "../components/reusableComponents/Container";
type Props = {};
const Cart = async (props: Props) => {
  const session = await getServerSession(options);
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-5">
        <Container>
          <AllCartProduct userId={session?.user?.id} />
        </Container>
        <hr className="mt-10 mb-10" />
        <Allpurchased userId={session?.user?.id} />
      </div>
    </>
  );
};

export default Cart;
