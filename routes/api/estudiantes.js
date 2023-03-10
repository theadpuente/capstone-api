const { Listaestudiantes, Listanotas, updatestudentdata } = require('../../models/estudiantes.model');

const router = require('express').Router();


//ListaEstudiantes
router.get('/:usuariosId/:clasesId', async (req, res) => {

    const { usuariosId } = req.params;

    const { clasesId } = req.params;
    try {
        const [result] = await Listaestudiantes(usuariosId, clasesId);
        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }


});

//Lista notas
router.get('/:usuarioId/:claseId/:asignaturaId', async (req, res) => {

    const { usuarioId } = req.params;

    const { claseId } = req.params;

    const { asignaturaId } = req.params;

    try {
        const [result] = await Listanotas(usuarioId, claseId, asignaturaId);
        res.json(result);
    } catch (error) {

        res.json({ fatal: error.message });

    }


});

//InsertarNota



router.put('/:usuarioId/:claseId/:asignaturaId/:estudianteId', async (req, res) => {

    const { usuarioId, claseId, asignaturaId, estudianteId } = req.params;


    try {
        const [result] = await updatestudentdata(usuarioId, claseId, asignaturaId, estudianteId, req.body);



        res.json(result);

    } catch (error) {

        res.json({ fatal: error.message });

    }


});



router.put('/:estudianteId', async (req, res) => {

    const { estudianteId } = req.params;


    try {
        const [result] = await updatestudentdata(estudianteId, req.body);

        //const [estudiante] = await getstudentdata(estudianteId);

        res.json(result[0]);

    } catch (error) {

        res.json({ fatal: error.message });

    }


});









module.exports = router;