const contacts = require("./contacts");

const invokAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAllContacts();
      return console.log(allContacts);

    case "readById":
      const oneContact = await contacts.getAllContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "updateById":
      const updateById = await contacts.updateById(id, { name, email, phone });
      return console.log(updateById);

    case "deleteById":
      const deleteById = await contacts.deleteById(id);
      return console.log(deleteById);
  }
};

// invokAction({ action: "list" });
// invokAction({ action: "readById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokAction({
//   action: "add",
//   name: "Alex",
//   email: "san2003@ukr.net",
//   phone: "0675555555",
// });
// invokAction({
//   action: "updateById",
//   id: "GnTwWkYSRtI2zll3XnAFq",
//   name: "Alla",
//   email: "Alla@ukr.net",
//   phone: "0990760933",
// });
invokAction({
  action: "deleteById",
  id: "rsKkOQUi80UsgVPCcLZZW",
});
