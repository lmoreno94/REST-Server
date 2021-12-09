const Role = require('../models/role');
const Usuario = require('../models/usuario');

// Verificar si el rol esta registrado
const esRoleValido = async( rol = '' ) => {
    const existeRol = await Role.findOne({ rol });
    if( !existeRol ){
        throw new Error(`El rol: ${ rol } no está registrado en la DB`);
    }
};

// Verificar si el correo existe
const esEmailValido = async( correo = '' ) => {
    const existeEmail = await Usuario.findOne({ correo });
    if( existeEmail ){
        throw new Error(`El correo: ${ correo } ya esta en uso`);       
    };
};

// Verificar si el ID existe
const existeUsuarioPorId = async( id ) => {
    const existeUsuarioId = await Usuario.findById( id );
    if( !existeUsuarioId ){
        throw new Error(`El id: ${ id } no existe `);       
    };
};

module.exports = {
    esRoleValido,
    esEmailValido,
    existeUsuarioPorId
}