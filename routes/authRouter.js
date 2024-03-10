import express from "express";
import authController from "../controllers/authController.js";
import validateBody from "../helpers/validateBody.js";
import { signinSchema, signupSchema } from "../schemas/usersShemas.js";
import authtenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";
const authRouter = express.Router();

authRouter.post("/signup", validateBody(signupSchema), authController.signup);
authRouter.post("/signin", validateBody(signinSchema), authController.signin);

authRouter.get("/current", authtenticate, authController.getCurrent);
authRouter.post("/signout", authtenticate, authController.signout);

authRouter.patch(
  "/public/avatar",
  upload.single("photo"),
  authtenticate,
  authController.changeAvatat
);

export default authRouter;

// {
//     "username": "Dmytro123",
//     "email":"Dmytro123@gmail.com",
//     "password": "Dmytro12345"
// }
