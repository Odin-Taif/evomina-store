import NewsletterForm from "../../components/newsLetter/NewsLetterForm";
import ContactSection from "../../components/reusableComponents/ContactSection";
import OurMission from "../../components/reusableComponents/OurMission";
import prisma from "@/app/prismadb";
import FilteredItems from "@/app/components/container/filteredItems";

export default async function Page({ params }: { params: { slug: string } }) {
  const products = await prisma.product.findMany({
    where: {
      category: params.slug,
    },
  });
  return (
    <>
      <div className="px-5 max-w-[1280px] mx-auto">
        <div className="mb-[200px]">
          <div className="flex">
            <div className="mx-auto px-auto md:px-4">
              <FilteredItems products={products} />
            </div>
          </div>
        </div>
        <ContactSection />
        <OurMission />
      </div>
    </>
  );
}
