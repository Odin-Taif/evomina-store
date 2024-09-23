import { wixClientServer } from "@/app/lib/wixClientServer";
import Link from "next/link";
import Image from "next/image";

export default async function CategoryCollections() {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();

  return (
    <>
      <div className="2xl:mx-auto 2xl:container py-2 px-2 sm:px-2 xl:px-2 2xl:px-0 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {cats.items.map((item) => (
              <Link
                key={item._id}
                href={`/filters/${item.slug || item.name}`}
                className="relative group flex justify-center items-center h-60 w-full"
              >
                <Image
                  src={item.media?.mainMedia?.image?.url || "/placeholder.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt={item.name || "category-image"}
                  className="object-center object-cover"
                />
                {/* Dynamically link to the item's category */}
                <span className="focus:outline-none item focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-amber-200 mx-auto text-center">
                  {item.name}
                </span>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
