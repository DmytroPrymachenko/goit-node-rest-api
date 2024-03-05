import jwt from "jsonwebtoken";
import HttpError from "../helpers/HttpError.js";
const { JWT_SECRET } = process.env;
import { findUserID } from "../services/userServices.js";

const authtenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    console.log("test2");
    return next(HttpError(401));
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    return next(HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await findUserID(id);
    if (!user || !user.token) {
      console.log("test");
      return next(HttpError(401));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, error.message));
  }
};

export default authtenticate;
