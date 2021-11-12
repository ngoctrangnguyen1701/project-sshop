import mongoose from "mongoose";
import UserSchema, { UserDoc } from "./User";
import ShopSchema, { ShopDoc } from "./Shop";

const UserModel = mongoose.model<UserDoc>("User", UserSchema);
const ShopModel = mongoose.model<ShopDoc>("Shop", ShopSchema);

export { UserModel, ShopModel };
