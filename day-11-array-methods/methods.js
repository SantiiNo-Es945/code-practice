let contacts = [
    {name: "Monica", phone: "12", email: "1@gmail"},
    {name: "Axel", phone: "15", email: "hhh@gmail"},
    {name: "Gibi", phone: "90", email: "hehehe@gmail"}
];

//contacts.forEach((n) => console.log(n.phone));
//using filter to get back a new array with the items that pass a test
let newContacts = contacts.filter((contact) => contact.name !== "Axel");
console.log(newContacts);