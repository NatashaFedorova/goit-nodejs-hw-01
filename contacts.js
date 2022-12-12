const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

async function listContacts() {
  const contactsArr = await fs.readFile(contactsPath, 'utf8');
  console.log(JSON.parse(contactsArr));
}

async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf8');
    const newContactsList = JSON.parse(contacts).filter(({ id }) => id === String(contactId));
    console.log(newContactsList);
  } catch ({ message }) {
    console.log(message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf8');
    const newContactsList = JSON.parse(contacts).filter(({ id }) => id !== String(contactId));
    console.log(newContactsList);
  } catch ({ message }) {
    console.log(message);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf8');
    const newContactsList = [{ id: uuidv4(), name, email, phone }, ...JSON.parse(contacts)];
    console.log(newContactsList);
  } catch ({ message }) {
    console.log(message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
