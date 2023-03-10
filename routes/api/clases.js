const { Navbar } = require("../../models/usuarios.model");
const router = require('express').Router();


//Navbar
router.get('/:usuariosId/:clasesId', async (req, res) => {

    const { usuariosId } = req.params;

    const { clasesId } = req.params;
    try {
        const [result] = await Navbar(usuariosId, clasesId);
        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }


});


module.exports = router;