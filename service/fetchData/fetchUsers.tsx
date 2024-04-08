import { connectDB } from "../lib/database";
import { Users } from "../models/Users";

export const fetchUsers = async (
  q: string | string[],
  page: string | string[]
) => {
  const regex = new RegExp(q as string, "i");
  const itemPerPage = 3;
  try {
    await connectDB();
    const count = (await Users.find({ username: { $regex: regex } })).length;
    const users = await Users.find({
      username: { $regex: regex },
    })
      .limit(itemPerPage)
      .skip(itemPerPage * (Number(page) - 1));
    return { users, count };
  } catch (err: any) {
    throw new Error(err);
  }
};
