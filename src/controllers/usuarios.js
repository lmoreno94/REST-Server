const { response, request } = require('express');

const usuariosGet = (req = request, res = response ) => {
    
    const query = req.query;
    
    res.json({
        msg: 'get API - Controlador',
        query
    });
};

const usuariosPut = (req, res = response ) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controlador',
        id
    });
};

const usuariosPost = (req, res = response ) => {
    
    const body = req.body;

    res.json({
        msg: 'post API - Controlador',
        body
    });
};

const usuariosPatch = (req, res = response ) => {
    res.json({
        msg: 'patch API - Controlador'
    });
};

const usuariosDelete = (req, res = response ) => {
    res.json({
        msg: 'delete API - Controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}