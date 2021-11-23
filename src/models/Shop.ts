import { Document, Schema } from "mongoose";
import defaultType from "../utils/defaultType";

require("dotenv").config();

export interface ShopDoc extends Document {
  name: string
  avatar: string
  coverImage: string
  //products: IProduct[]
  description: string
  registerDate: string
  onlineTime: number
  /* owner: IUser*/
}

const ShopSchema = new Schema<ShopDoc>({
  name: defaultType.string,
  avatar: defaultType.string,
  coverImage: defaultType.string,
  description: defaultType.string,
  registerDate: defaultType.string,
  //onlineTime: defaultType.number,
});

export default ShopSchema;