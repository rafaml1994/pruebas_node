const {db} = require('../firebase');
const {Router} = require('express');

const router = Router();

router.get('/', async (req,res) => {
    const querySnapshot = await db.collection('contacts').get();
    const contacts = querySnapshot.docs.map(doc => ({
        id:doc.id,...doc.data()
    }))
    console.log(contacts);
    res.send(contacts);
});

router.post('/add', async (req,res) => {
    const {nombre, apellidos} = req.body 

    await db.collection('contacts').add({
        nombre,
        apellidos
    })
    const add = res.send("nuevo contacto creado");
});


//Editar /actualizar

router.get('/actualizar/:id', async (req,res) => {
    const doc = await db.collection('contacts').doc(req.params.id).get();



    res.send("Contacto actualizado");
});

router.post('/update/:id', async (req,res) => {
    
    const { id } = req.params;
    await db.collection('contacts').doc(id).update(req.body);
});

//Eliminar
router.get('/borrar/:id', async (req,res) => {
    await db.collection('contacts').doc(req.params.id).delete();



    res.send("Contacto eliminado");
});



module.exports = router;


const addContact = async (req,res) => {
    const querySnapshot = await db.collection('contacts').get();
    const contacts = querySnapshot.docs.map(doc => ({
        id:doc.id,...doc.data()
    }))
    console.log(contacts);
    res.send(contacts);
}