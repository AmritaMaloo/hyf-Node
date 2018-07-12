const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");

const instOfContact = new Contact("Amrita", 78798796, "Aug-7");
const instOfContactList = new ContactList();
instOfContactList.add(instOfContact);
console.log(instOfContact);
console.log(instOfContactList);