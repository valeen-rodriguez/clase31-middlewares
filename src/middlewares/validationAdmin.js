const usersAdmin = require('../database/adminData.json')

const validationAdmin = (req, res, next) => {
    const user = req.query.user
    if(usersAdmin.includes(user)){
        next()
    }else{
        res.send('No tienes los privilegios para ingresar')
    }
};

module.exports = validationAdmin