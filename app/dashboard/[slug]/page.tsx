import React from "react";
import prisma from "@/app/prismadb";
import ImageGallery from "../ImageGallery";
import Info from "../Info";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Container from "@/app/components/reusableComponents/Container";

type Props = {};

export default async function Page({ params }: { params: { slug: string } }) {
  const productId = parseInt(params.slug, 10);
  const session = await getServerSession(options);
  const currentUserId = session?.user.id;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  const allReview = await prisma.review.findMany({
    where: {
      productId: productId,
    },
  });
  let averageRating = 0;
  if (allReview.length > 0) {
    const totalRating = allReview.reduce((acc, review) => {
      return acc + review.rating;
    }, 0);
    averageRating = totalRating / allReview.length;
  }
  const urlString = product?.images;
  return (
    <Container>
      <div className="max-w-[1280px] mx-auto px-5 pt-5">
        <div className="font-semibold text-2xl mb-2">
          <a href="/">Evomina</a>
        </div>
        <hr />
        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-14">
            {urlString && <ImageGallery imageUrls={urlString} />}
            <Info
              {...product}
              rating={averageRating}
              numbercomments={allReview.length}
            />
          </div>
        )}
        <div className="mb-10">
          <div className="flex items-center space-x-5 mb-10">
            <span className="w-[5px] h-[30px] bg-amber-600 rounded-full inline-block"></span>
            <span className="font-medium text-xl">Product Description</span>
          </div>
          {product && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                  <div>
                    <h3 className="font-medium">Category</h3>
                    <p className="text-sm text-amber-500">{product.category}</p>
                  </div>

                  <div>
                    <h3 className="font-medium">Store</h3>
                    <p className="text-sm text-amber-500">{product.store}</p>
                  </div>
                </div>
                <div
                  className={"bg-gray-100 p-4"}
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
