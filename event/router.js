const { Router } = require('express')
const Event = require('./model')

const router = new Router()

//POST(Create)
router.post('/events', (req, res, next) => {
    Event.create(req.body)
        .then(event => res.json(event))
        .catch(err => next(err))
})

//GET(Read)
router.get('/events', (req, res, next) => {
    Event.findAll()
        .then(list => res.send(list))
        .catch(err => next(err))
})

router.get('/events/:id', (req, res, next) => {
    Event.findByPk(req.params.id)
        .then(event => {
            if(!event){
                res.status(404).end()
            }else{
                res.json(event)
            }
        })
})

//PUT(Update)
router.put('/events/:id', (req, res, next) => {
    Event.findByPk(req.params.id)
    // req.doby 是什麼？
        .then(event => event.update(req.body))
    // 為什麼這裡用 res.send 而不是 res.json?
        .then(event => res.send(event))
        .catch(next)
})

//DELETE
router.delete('/events/:id', (req, res, next) => {
    // use findByPk to destroy?
    Event.destroy({ where: {id: req.params.id} })
    // 當我不回傳number（下面這句），東西還是有被刪除，但是沒有跑回來 
        .then(number => res.send({ number }))
        .catch(next)
})

module.exports = router
