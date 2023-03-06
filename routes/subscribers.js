const express = require('express')
const router = express.Router()
const subscriber = require('../models/subscriber')

//Getting all
router.get('/', async (req, res) => {
    //res.send('Hello from the other side')
    try {
        const subscribers = await subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

//Getting One
router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber)
})

//Creating One
router.post('/', (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Updating One
router.patch('/:id', getSubscriber, async (req, res) => {

    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }

    if (req.body.subscribedToChannel != null) {
        req.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }

    try {
        const UpdatedSubscriber = await res.subscriber.save()
        res.json(UpdatedSubscriber)

    } catch (err) {
        
        res.status(400).json({message: err.message})
    }
})

//Deleting One
router.delete('/:id', (req, res) => {
    try {
        
    } catch (err) {
        
    }
})

async function getSubscriber(req, res, next){
    let subscriber

    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({
                message: 'Cannot find subscriber'
            })
        }
    } catch (error) {
        res.status(500).json({message: err.message})
    }

    res.subscriber = subscriber;
    next()
}

module.exports = router