import mongoose from "mongoose";

const uri = process.env.ATLAS_URI as string;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (err: any) {
    throw new Error(err);
  }
};
