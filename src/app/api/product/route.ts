import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../service/lib/database";
import { Products } from "../../../../service/models/Products";

export const POST = async (request: NextRequest) => {
  const { title, category, price, stock, color, size, desc } =
    await request.json();
  console.log("category", category.value);
  await connectDB();
  await Products.create({
    title,
    category: category.value,
    price,
    stock,
    color,
    size,
    desc,
  });
  return NextResponse.json({
    status: 201,
    message: "A new product is created",
  });
};
