"use client";
import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import useLoginModel from "@/app/hook/useLoginModal";

type Props = {
  productId?: number;
};

const AddWatchList = ({ productId }: Props) => {
  const { data: session } = useSession();
  const id = session?.user.id;
  const router = useRouter();
  const loginModel = useLoginModel();
  const handleWatchList = async () => {
    if (session?.user) {
      try {
        const response = await axios
          .post("/api/watchlist", {
            productId: productId,
            userId: id,
          })
          .then((response) => {
            // router.push("/cart");
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
      onClick={handleWatchList}
      className="flex items-center space-x-4 bg-amber-400 text-gray-100 p-2 rounded-full cursor-pointer hover:bg-amber-500"
    >
      <span>
        <FaRegHeart size={15} />
      </span>
    </div>
  );
};

export default AddWatchList;
