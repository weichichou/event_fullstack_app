const { Router } = require('express')
const { toJWT, toData } = require('./jwt')
const User = require('../user/model')

const router = new Router()

router.post('/login', (req, res, next) => {
    const { email, password } = req.body
    
    User.findOne({ where: {email, password} })
        .then(user => {
            if(!user){
                res.status(400).send('User not found')
            }else{
                //WHY PUT id IN {}?
                const { id } = user
                const jwt = toJWT({ userId: id })
                res.send({ jwt })
            }
        })
})

module.exports = router