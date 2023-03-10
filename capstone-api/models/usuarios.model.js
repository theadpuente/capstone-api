//Login

//

//Navbar
const Navbar = (usuariosId, clasesId) => {

    return db.query('SELECT c.id as clase_id, c.nombre as nombre, c.educ as educ, u.nombre as usuario_nombre, u.email as usuario_email, u.usuarioscol as usuario_usuarioscol, COUNT(e.id) as num_estudiantes FROM clases c INNER JOIN usuarios u ON c.usuarios_id = u.id LEFT JOIN estudiantes e ON c.id = e.clases_id WHERE c.usuarios_id = ? AND c.id = ? GROUP BY c.id', [usuariosId, clasesId])
}

module.exports = {

    Navbar
}