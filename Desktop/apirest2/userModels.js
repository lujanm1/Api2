const mongoose = require ('mongoose');
const UserSchema = new mongoose.Schema(
    {
nombre: {
    type: String
},
apellido: {
    type: String
},
contraseña: {
    type: String
}
    },
    {
        timestamps: true, 
        versionKey: false,
    }
)
const ModelUser = mongoose.model ("users", UserSchema);
module.exports = ModelUser;