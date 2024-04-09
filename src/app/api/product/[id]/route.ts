import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../service/lib/database";
import { Products } from "../../../../../service/models/Products";
import { HttpStatusCode } from "axios";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();
    const product = await Products.findById(params.id);
    if (product) {
      return NextResponse.json({
        status: HttpStatusCode.Found,
        product,
      });
    }
    return NextResponse.json(
      { message: `Product ${params.id} not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
};

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const { title, desc, price, stock, color, size, category } = data;
  await connectDB();
  const existingProduct = await Products.findById(params.id);
  if (!existingProduct) {
    console.log("no product found!");
    return NextResponse.json({
      status: HttpStatusCode.NotFound,
      message: `No user matches with user id ${params.id}`,
    });
  } else {
    console.log("product found!");
    existingProduct.title = title || existingProduct?.title;
    existingProduct.desc = desc || existingProduct?.desc;
    existingProduct.price = price || existingProduct?.price;
    existingProduct.stock = stock || existingProduct?.stock;
    existingProduct.color = color || existingProduct?.color;
    existingProduct.size = size || existingProduct?.size;
    existingProduct.category = category.value || existingProduct?.category;
    await existingProduct.save();
    return NextResponse.json({
      status: HttpStatusCode.Ok,
      message: `Updated successfully!`,
    });
  }
}
