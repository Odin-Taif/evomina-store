import Image from "next/image";
import { Suspense } from "react";
import Skeleton from "./Skeleton";
import { products } from "@wix/stores";
import Container from "./reusableComponents/Container";
import Heading from "./reusableComponents/Heading";
import { wixClientServer } from "../lib/wixClientServer";

const FeaturedProducts = async () => {
  const wixClient = await wixClientServer();
  const cat = await wixClient.collections.getCollectionBySlug(
    "featuredproducts"
  );
  const categoryId =
    cat.collection?._id || "00000000-000000-000000-000000000001";
  const productQuery = wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId);

  const res = await productQuery.find();
  //   console.log(res.items);
  return (
    <Container>
      {/* Right Section: Menu and Buttons */}
      <div className="flex flex-col col-span-4 items-center justify-center space-y-8 ">
        <Heading title={"Popular!"} subtitle="Mest beställt just nu" center />
        <Suspense fallback={<Skeleton />}>
          <div className="mt-8 flex flex-wrap gap-6">
            {res.items.map((product: products.Product) => (
              <div
                className="w-full sm:w-[48%] lg:w-[22%] flex flex-col gap-4"
                key={product._id}
              >
                <div className="relative w-full h-40">
                  <Image
                    src={product.media?.mainMedia?.image?.url || "/product.png"}
                    alt={product.name || ""}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="absolute object-cover rounded-md z-10 transition-opacity ease-in-out duration-500"
                  />
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{product.name}</span>
                  <span className="font-semibold">
                    SEK {product.price?.price}
                  </span>
                </div>
                <button className="rounded ring-1 ring-orange-400 text-white w-max py-2 px-4 text-xs hover:bg-orange-400 hover:text-white">
                  Add+
                </button>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
