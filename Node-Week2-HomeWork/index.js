const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");

const instOfContact = new Contact("A", 78798796, "Aug-7");
const instOfContactList = new ContactList("contacts.json");
instOfContactList.add(instOfContact);
instOfContactList.add(new Contact("B", null, "Sep-7"));
instOfContactList.add(new Contact("C", 87573409, "Oct-7"));
instOfContactList.add(new Contact("D", 78543987, null));
instOfContactList.add(new Contact("E", 67542098, "Nov-7"));
instOfContactList.add(new Contact("F", 87590956, "Dec-7"));

instOfContactList.save();
instOfContactList.load();
//console.log(instOfContact);
console.log(instOfContactList);