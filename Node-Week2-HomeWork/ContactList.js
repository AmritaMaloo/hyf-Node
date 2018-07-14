const Contact = require("./Contact");
//const Read = require("./read.js");
const fs = require("fs");
const util = require("util");
const writeFileP = util.promisify(fs.writeFile);
const readFileP = util.promisify(fs.readFile);

class ContactList {
    constructor(filename) {
        this.list = [];
        this.filename = filename;
    }

    add (contact) {
        if(contact instanceof Contact) 
            this.list.push(contact);
        else 
            console.log("Invalid Contact");
        
    }

    save () {
        writeFileP(this.filename, JSON.stringify(this.list))
        .then(() => console.log("File is saved"))
        .catch(err => console.log(err));
    }

    load () {
        readFileP(this.filename)
        .then((data) => { 
            
            let parsed = JSON.parse(data);
            for(const element of parsed) {
            let parsedInstOfContact = new Contact(element.name, element.phone, element.bday);
            console.log("after parsing the contactsfile", parsedInstOfContact);
            parsedInstOfContact.call();
            parsedInstOfContact.birthday();
                       
            }
                       
        })
        
        .catch(err => console.log(err));
    }
}

module.exports = ContactList;