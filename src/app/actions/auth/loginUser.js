"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObject } from "@/lib/dbConnect";

const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNamesObject.userCollection);
  const user = await userCollection.findOne({ email });
  if (!user) {
    return null;
  }
  const isPasswordOk = bcrypt.compare(user.password, password);
  if (!isPasswordOk) {
    return null;
  }
  return user;
};

export default loginUser;
