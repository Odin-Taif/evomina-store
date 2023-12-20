import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export async function GET(request: Request) {
  try {
    const searchParams = new URLSearchParams(request.url.split("?")[1]); // Use [1] to get the query string part
    const userId = searchParams.get("userId"); // Assuming userId is passed as a query parameter
    // console.log(userId);

    if (!userId) {
      const products: any = [];
      return NextResponse.json({ message: "API route is working", products });
    }

    const products = await prisma.cart.findMany({
      where: {
        userId: parseInt(userId, 10),
      },
    });

    return NextResponse.json({ message: "API route is working", products });
  } catch (error) {
    console.error("Error selecting product", error);
    return NextResponse.error();
  }
}
