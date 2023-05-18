const db = require('../../database/models');

const apiemailController = {
    create: (req, res) => {
        const newalert = {
            correo: req.body.correo
        }
        db.Email.create(newalert)
            .then(data => {
                res.json(data);
            })
    }
}


module.exports = apiemailController;