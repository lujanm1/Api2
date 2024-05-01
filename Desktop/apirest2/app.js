const express = require ('express');
const dbconnect = require('./config');
const ModelUser = require('./userModels');
const app = express();

app.listen (3000, () => {
    console.log ("servidor en puerto");
})

dbconnect();

const router = express.Router();

router.post ("/", async (req, res) => {
const body = req.body;
 const respuesta = await ModelUser.create(body)
 res.send(respuesta)
})
router.get ("/", async (req, res) => {
    const respuesta = await ModelUser.find ({})
    res.send(respuesta);
})
router.get ("/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
})

router.put ("/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id:id, body})
    res.send(respuesta);
})
router.delete ("/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id: id})
    res.send(respuesta);
})

router.get("/", (req, res) =>{
res.send ("hola soy un metodo get")
})
app.use (express.json())
app.use(router)