const Contact = require("./Contact");

class ContactList {
    constructor() {
        this.list = [];
    }

    add (contact) {
        if(contact instanceof Contact) 
            this.list.push(contact);
        else 
            console.log("Invalid Contact");
        
    }
}

module.exports = ContactList;