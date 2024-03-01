import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";

const contact = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: null }
);

contact.post("save", handleSaveError);
contact.pre("findOneAndUpdate", setUpdateSetting);
contact.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contact);

export default Contact;