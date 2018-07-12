const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");

const instOfContact = new Contact("A", 78798796, "Aug-7");
const instOfContactList = new ContactList("contacts.json");
instOfContactList.add(instOfContact);
instOfContactList.add(new Contact("B", null, "Sep-7"));
instOfContactList.save();
console.log(instOfContact);
console.log(instOfContactList);