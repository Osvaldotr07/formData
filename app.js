const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')

const upload = multer({dest: 'images/'})

app.use('/assets',express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
})

app.post('/', upload.single('image'), (req, res) => {
    console.log(req.file)
    console.log(req.body.username)

    res.status(200).json({
        message: 'Image added'
    })
})

app.listen('3000', () => {
    console.log('Conectado')
})