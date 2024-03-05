import User from "../models/Users.js";
export const findUser = (filter) => User.findOne(filter);

export const findUserID = (id) => User.findById(id);
