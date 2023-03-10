const router = require('express').Router();


router.use('/usuarios', require('./api/usuarios'));

router.use('/clases', require('./api/clases'));

router.use('/estudiantes', require('./api/estudiantes'));

router.use('/asignaturas', require('./api/asignaturas'));

module.exports = router;