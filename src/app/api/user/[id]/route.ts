import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../../service/lib/database";
import { Users } from "../../../../../service/models/Users";
import { HttpStatusCode } from "axios";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();
    const product = await Users.findById(params.id);
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
  const { username, email, phone, isAdmin, isActive, address } = data;
  await connectDB();
  const existingUser = await Users.findById(params.id);
  if (!existingUser) {
    return NextResponse.json({
      status: HttpStatusCode.NotFound,
      message: `No user matches with user id ${params.id}`,
    });
  } else {
    existingUser.username = username || existingUser?.username;
    existingUser.email = email || existingUser?.email;
    existingUser.phone = phone || existingUser?.phone;
    existingUser.address = address || existingUser?.address;
    existingUser.isAdmin = isAdmin.value || existingUser?.isAdmin;
    existingUser.isActive = isActive.value || existingUser?.isActive;
    await existingUser.save();
    return NextResponse.json({
      status: HttpStatusCode.Ok,
      message: `Updated successfully!`,
    });
  }
}
