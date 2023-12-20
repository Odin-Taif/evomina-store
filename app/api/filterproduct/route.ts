import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export async function GET(request: Request) {
  try {
    const searchParams = new URLSearchParams(request.url.split("?")[1]);
    const categories = searchParams.getAll("categories[]");
    const minPrice = parseInt(searchParams.get("price[min]") || "0");
    const maxPrice = parseInt(searchParams.get("price[max]") || "100000");
    const products = await prisma.product.findMany({
      where: {
        OR: categories.map((category) => ({
          category: { contains: category },
        })),
        price: { gte: minPrice, lte: maxPrice },
      },
    });
    // console.log(products);
    return NextResponse.json({ message: "API route is working", products });
  } catch (error) {
    console.error("Error selecting product", error);
    return NextResponse.error();
  }
}
