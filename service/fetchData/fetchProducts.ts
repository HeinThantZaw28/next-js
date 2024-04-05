import { connectDB } from "../lib/database";
import { Products } from "../models/Products";

export const fetchProducts = async (
  q: string | string[],
  page: string | string[]
) => {
  const regex = new RegExp(q as string, "i");
  const itemPerPage = 3;
  try {
    await connectDB();
    const count = (await Products.find({ username: { $regex: regex } })).length;
    const products = await Products.find({
      username: { $regex: regex },
    })
      .limit(itemPerPage)
      .skip(itemPerPage * (Number(page) - 1));
    return { products, count };
  } catch (err: any) {
    throw new Error(err);
  }
};
