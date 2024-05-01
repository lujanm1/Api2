const mongoose = require ('mongoose');
const dbconnect =() => {
    mongoose.connect("mongodb://localhost:27017/menu_db")
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
}
module.exports = dbconnect;