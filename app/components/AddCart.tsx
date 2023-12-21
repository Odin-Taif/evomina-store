"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useLoginModel from "../hook/useLoginModal";
import { useShoppingCart } from "../context/shopincartConext";

type Props = {
  productId?: number;
};

const AddCart = ({ productId }: Props) => {
  const { increaseCartQuantity } = useShoppingCart();
  const { data: session } = useSession();
  const id = session?.user.id;
  const loginModel = useLoginModel();
  const handleCart = async () => {
    if (session?.user) {
      try {
        const response = await axios
          .post("/api/cart", {
            productId: productId,
            userId: id,
          })
          .then((response) => {
            increaseCartQuantity(id);
            console.log(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      loginModel.onOpen();
    }
  };
  return (
    <div
      onClick={handleCart}
      className="flex items-center space-x-4 bg-amber-400 text-gray-100 p-2 rounded-full cursor-pointer hover:bg-amber-500"
    >
      <span>
        <MdOutlineAddShoppingCart size={20} />
      </span>
    </div>
  );
};

export default AddCart;
