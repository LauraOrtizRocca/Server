const UsuarioModel = require('../../models/usuariosbiblioteca.models');

const getUserByUsernameService = async (req) => {
    const { username } = req.params;
    return UsuarioModel.findOne({username: username});
}

module.exports = getUserByUsernameService
