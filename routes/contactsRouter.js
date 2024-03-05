import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} from "../controllers/contactsControllers.js";

import isValididId from "../middlewares/isValididId.js";

import authtenticate from "../middlewares/authenticate.js";

const contactsRouter = express.Router();

contactsRouter.use(authtenticate);

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValididId, getOneContact);

contactsRouter.delete("/:id", isValididId, deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", isValididId, updateContact);

contactsRouter.patch("/:id/favorite", isValididId, updateStatusContact);

export default contactsRouter;
