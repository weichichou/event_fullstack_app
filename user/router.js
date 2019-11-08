const { Router } = require('express')
const User = require('./model')

const router = new Router()

router.post('/users', (req, res, next) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => next(err))
})

module.exports = router
