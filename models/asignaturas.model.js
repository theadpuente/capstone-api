
//Lista asigaturas

const Listasignaturas = (usuariosId, clasesId) => {
    return db.query('SELECT asignaturas.id, asignaturas.nombre FROM asignaturas INNER JOIN clases ON asignaturas.clases_id = clases.id INNER JOIN usuarios ON clases.usuarios_id = usuarios.id WHERE usuarios.id = ? AND clases.id = ?', [usuariosId, clasesId])
}


//Crear asignatura
const Crearasignatura = ({ nombre, claseId }) => {


    return db.query('INSERT INTO asignaturas (nombre, clases_id) VALUES (?,?)', [nombre, claseId])
}


//actiaulizar asignatura
const Actualizarasignatura = (asignaturaId, { nombre }) => {


    return db.query('UPDATE asignaturas SET nombre = ? WHERE id = ?', [nombre, asignaturaId])
}

const deletesubject = () => {

    return db.query('')
}



module.exports = {

    Crearasignatura, Actualizarasignatura, Listasignaturas
}