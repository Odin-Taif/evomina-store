"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import AddCart from "../components/AddCart";

const RelatedProducts = ({ relatedProducts }: any) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {relatedProducts &&
        relatedProducts.map((product: any) => (
          <div key={product.id}>
            <SwiperSlide>
              <Link href={`/dashboard/${product.id}`}>
                <div className="relative rounded-lg border border-amber-300 ">
                  <img
                    src={product.images.split(",")[0]}
                    className="w-[200px] h-[200px] object-cover object-top rounded-lg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-left justify-between px-2 mt-2">
                  <div>
                    <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                      {product.title}
                    </h1>
                    <p className="text-[13px] opacity-60">{product.store}</p>
                  </div>
                  <span className="font-medium w-fit px-2 bg-gray-100 rounded-lg">
                    ${product.price}.00
                  </span>
                </div>
              </Link>
              <div className="relative">
                <span className="absolute bottom-0 right-0 w-fit">
                  <AddCart productId={product.id} />
                </span>
              </div>
            </SwiperSlide>
          </div>
        ))}
    </Swiper>
  );
};

export default RelatedProducts;
