
//Listaestudiantes
const Listaestudiantes = (usuarioId, claseId) => {

    return db.query('SELECT e.*, u.nombre as padre, u.email FROM estudiantes e INNER JOIN clases c ON e.clases_id = c.id INNER JOIN usuarios_has_estudiantes uhe ON e.id = uhe.estudiantes_id INNER JOIN usuarios u ON uhe.usuarios_id = u.id WHERE c.usuarios_id = ? AND c.id = ?', [usuarioId, claseId])
}


//Lisatnotas
const Listanotas = (usuarioId, claseId, asignaturaId) => {

    return db.query('SELECT c.nombre as clase, e.id, e.nombre AS estudiante, a.nombre AS asignatura, IFNULL(ahe.nota, "No asignada todavía") AS nota FROM estudiantes e INNER JOIN clases c ON e.clases_id = c.id INNER JOIN asignaturas a ON a.clases_id = c.id LEFT JOIN asignaturas_has_estudiantes ahe ON ahe.estudiantes_id = e.id AND ahe.asignaturas_id = a.id WHERE c.usuarios_id = ? AND c.id = ? AND a.id = ?', [usuarioId, claseId, asignaturaId])
}


//Insertarnotas 
const InsertarNotas = (estudianteId, { nota, usuarioId, claseId, asignaturaId }) => {

    return db.query('UPDATE asignaturas_has_estudiantes SET nota = ? WHERE estudiantes_id = ? AND clases_id = ? AND c.usuarios_id = ?', [nota, estudianteId, usuarioId, claseId, asignaturaId])
}



const getstudentdata = (estudianteId) => {


    return db.query('select estudiantes where id = ?', [estudianteId])
}


const updatestudentdata = (estudianteId, { nombre, fnacimiento }) => {

    return db.query('UPDATE estudiantes SET nombre = ?, fnacimiento = ? WHERE id = ?', [nombre, fnacimiento, estudianteId])
}


const createstudent = (nombre, fnacimiento, claseId) => {

    return db.query(
        `
        INSERT INTO estudiantes (nombre, fnacimiento)
        VALUES (?, ?)
      `,
        [nombre, fnacimiento, claseId]
    )
};

const deletestudentdata = (estudianteId) => {

    return db.query('DELETE FROM estudiantes WHERE id = ?', [estudianteId])
}







module.exports = {

    Listanotas, Listaestudiantes, InsertarNotas, updatestudentdata, getstudentdata, deletestudentdata, createstudent,
}