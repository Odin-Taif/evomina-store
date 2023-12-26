import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
import prisma from "@/app/prismadb";
import { AiTwotoneEdit } from "react-icons/ai";
import DeleteProduct from "../components/DeleteProduct";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

type Props = {};

const page = async (props: Props) => {
  const currentUser = await getServerSession(options);
  const allmyproduct = await prisma.product.findMany({
    where: {
      userId: currentUser?.user.id,
    },
  });
  if (
    currentUser?.user.email !== "mjd.reklam@gmail.com" &&
    currentUser?.user.email !== "info@evomina.com"
  ) {
    // Return a message prompting the user to log in, wrapped in ClientOnly to ensure it renders on the client-side
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized!"
          subtitle="Please login first as an admin!"
          showReset
        />
      </ClientOnly>
    );
  }
  if (allmyproduct.length === 0) {
    return (
      <div className="relative flex items-center justify-center">
        <img src="empty.png" alt="" />
        <h1 className="absolute top-[80%] text-2xl text-purple-600">
          Empty Cart
        </h1>
      </div>
    );
  }
  return (
    <div className="max-w-[1280px] mx-auto">
      <div>
        {allmyproduct.map((product) => (
          <div
            key={product.id}
            className="relative flex items-center justify-between w-8/12 px-6 mx-auto shadow-lg shadow-purple-100 p-5 rounded-lg mt-10"
          >
            <div>
              <h1 className="mb-3">{product.title}</h1>
              <h1 className="mb-3"> Price: {product.price}</h1>
              <h1 className="mb-3"> Category: {product.category}</h1>
              <h1 className="mb-3"> Store: {product.store}</h1>
              <DeleteProduct productId={product.id} userId={product.userId} />
            </div>
            <Link href={`/dashboard/${product.id}`}>
              <div>
                <img
                  className="w-[200px] h-[200px] object-cover object-top"
                  src={product.images.split(",")[0]}
                  alt=""
                />
              </div>
            </Link>
            {currentUser?.user.id === product.userId && (
              <Link
                className="absolute top-0 right-0"
                href={`/edit/${product.id}`}
              >
                <span className="absolute top-0 right-0 p-2 bg-green-600 rounded-full text-white cursor-pointer">
                  <AiTwotoneEdit size={24} />
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
