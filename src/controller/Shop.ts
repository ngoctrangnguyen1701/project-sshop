import { Request, Response } from "express";
import { ShopModel } from "../models";
require("dotenv").config();

const secretKey: any = process.env.TOKEN_SECRET_KEY;

export default class ShopCallback {
  static async get(req: Request, res: Response) {
    try {
      const payload = await ShopModel.find()
      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
  /* id: defaultType.string,
  name: defaultType.string,
  avatar: defaultType.string,
  coverImage: defaultType.string,
  description: defaultType.string,
  registerDate: defaultType.string,
  onlineTime: defaultType.number, */
  static async create(req: Request, res: Response) {
    try {
      //const { name, avatar, coverImage, description, registerDate } = req.body
      //const payload = await ShopModel.create({ name, avatar });
      const payload = await ShopModel.create(req.body);

      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { name, password } = req.body

      const payload = await ShopModel.findOneAndUpdate({ email: id }, { name, password });

      return res.json({ success: true, data: payload });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const userID = req.params.id;
      const payload = await ShopModel.deleteOne({ _id: userID });
      return { success: true, data: payload };
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
