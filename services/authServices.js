import User from "../models/Users.js";
import bcrypt from "bcrypt";

export const signup = async (data) => {
  const { password } = data;
  const hachPassword = await bcrypt.hash(password, 10);
  return User.create({ ...data, password: hachPassword });
};

export const setToken = async (id, token = "") =>
  User.findByIdAndUpdate(id, { token });

export const setAvatar = (id, avatarURL) => {
  User.findByIdAndUpdate(id, { avatarURL });
};

export const updateByFilter = (filter, data) =>
  User.findOneAndUpdate(filter, data);
