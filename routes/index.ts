import express from 'express'

const router = express.Router()

router.get('/api/v1', (req, res) => {
    res.status(200).send({
        sucess: true,
        message: "Welcome to the API!",
        version: '1.0.0'
    })
})

export default router
