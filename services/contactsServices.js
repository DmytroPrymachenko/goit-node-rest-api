import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactPath = path.resolve("db", "contacts.json");

const upListContacts = (contacts) =>
  fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));

export async function getListContacts() {
  const data = await fs.readFile(contactPath);
  return JSON.parse(data);
}

export async function getContactById(id) {
  const contacts = await getListContacts();
  const res = contacts.find((contact) => contact.id === id);
  return res || null;
}

export async function removeContact(id) {
  const contacts = await getListContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) return null;
  const res = contacts.splice(index, 1);

  await upListContacts(contacts);
  return res;
}

export async function addContact(name, email, phone) {
  const contacts = await getListContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await upListContacts(contacts);
  return newContact;
}
