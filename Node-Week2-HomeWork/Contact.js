class Contact {
    constructor(name, phone, bday) {
        this.name = name;
        this.phone = phone;
        this.bday = bday;
    }
    call() {
        if(this.phone == null)
            console.log("phone number does not exist for", this.name);
        else 
            console.log("calling " + this.name + " @ " + this.phone);
        }
    birthday() {

        if(this.bday == null)

            console.log("Birthday not known for ", this.name);
        else 

            console.log("Birthday of  " + this.name + " is " + this.bday);
    }

       
}


module.exports = Contact;