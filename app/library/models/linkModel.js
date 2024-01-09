import { models, model, Schema } from "mongoose";

const schema = new Schema(
  {
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const LinkModel = models?.Link || model("Link", schema);
export default LinkModel;
