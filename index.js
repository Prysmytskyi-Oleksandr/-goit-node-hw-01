const { program } = require("commander");
const { option } = require("yargs");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAllContacts();
      return console.log(allContacts);

    case "readById":
      const oneContact = await contacts.getContactById(id);
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

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();
const options = program.opts();
invokeAction(options);
