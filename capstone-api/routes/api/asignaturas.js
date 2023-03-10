const { Crearasignatura, Actualizarasignatura, Listasignaturas } = require('../../models/asignaturas.model');

const router = require('express').Router();


router.get('/:usuariosId/:clasesId', async (req, res) => {

    const { usuariosId } = req.params;

    const { clasesId } = req.params;
    try {
        const [result] = await Listasignaturas(usuariosId, clasesId);
        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }


});



router.post('/:claseId', async (req, res) => {

    const { claseId } = req.params;
    const { nombre } = req.body;

    try {
        const [result] = await Crearasignatura({ nombre, claseId });

        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }


});



router.put('/:asignaturaId', async (req, res) => {

    const { asignaturaId } = req.params;

    try {
        const [result] = await Actualizarasignatura(asignaturaId, req.body);

        res.json(result)
    } catch (error) {

        res.json({ fatal: error.message });

    }
})


module.exports = router;