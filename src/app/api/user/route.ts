import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../service/lib/database";
import { Users } from "../../../../service/models/Users";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { username, email, password, phone, address, isAdmin, isActive } =
    await request.json();
  const saltRounds = 10;
  const hashedPass = await bcrypt.hash(password, saltRounds);
  await connectDB();
  await Users.create({
    username,
    email,
    password: hashedPass,
    phone,
    address,
    isActive: isActive.value,
    isAdmin: isAdmin.value,
  });
  return NextResponse.json({
    status: 201,
    message: "A new user is created!",
  });
}
