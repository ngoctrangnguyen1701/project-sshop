import { Document, Schema } from "mongoose";
import defaultType from "../utils/defaultType";

require("dotenv").config();

export interface UserDoc extends Document {
  email: string;
  name: string;
  password: string;
  isAdmin: boolean;
  avatar: string
  createdDate: string
  //ownShop: IShop[]
  money: number
  getWithdraw(amount: number) : void
}

const UserSchema = new Schema<UserDoc>({
  email: defaultType.email,
  name: defaultType.string,
  password: defaultType.password,
  avatar: defaultType.string,
  createdDate: defaultType.string,
  money: defaultType.number,
});

export default UserSchema;