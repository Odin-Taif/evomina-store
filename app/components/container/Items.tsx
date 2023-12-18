import prisma from "@/app/prismadb";
import Loader from "../reusableComponents/Loader";
import FilteredItems from "./filteredItems";

type Props = {};
const Items = async (props: Props) => {
  const products = await prisma.product.findMany();
  if (!products || products.length === 0) {
    return <Loader />;
  }
  return <FilteredItems products={products} />;
};

export default Items;
