/*let contact = {
    name: "Santi",
    phone: "123",
    email: "test@gmail"
};

//changing values
contact.email = "test2@gmail";
//adding a new property
contact.city = "Fukuoka";

console.log(contact);
*///objects inside an array
let contacts = [
    {name: "Monica", phone: "12", email: "1@gmail"},
    {name: "Axel", phone: "15", email: "hhh@gmail"},
    {name: "Gibi", phone: "90", email: "hehehe@gmail"}
];
console.log(contacts[1].name);
//now we will add contacts
function addContact(name, phone, email) {
    contacts.push({name: name, phone: phone, email: email});
}
addContact("Sofia", "999", "que@gmail.com");
addContact("Mario", "499", "que34@gmail.com");
console.log(contacts.length);
// working with a list, a loop over contacts to print each name
function listContacts () {
    for (let i = 0; i < contacts.length; i++) {
        console.log(contacts[i].name);
    }
}
listContacts();