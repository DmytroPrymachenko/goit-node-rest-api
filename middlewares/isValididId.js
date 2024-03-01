import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError";

const isValididId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return next(HttpError(404, `${id} is not valid`));
  }
  next();
};

export default isValididId;
