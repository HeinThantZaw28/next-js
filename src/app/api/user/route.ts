import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../service/lib/database";
import { Users } from "../../../../service/models/Users";

export async function POST(request: NextRequest) {
  const {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
    active,
  } = await request.json();
  await connectDB();
  await Users.create({
    username,
    email,
    password,
    phone,
    address,
    isActive: isActive.value,
    isAdmin: isAdmin.value,
  });
  return NextResponse.json({
    status: 201,
    message: "User is created!",
  });
}
