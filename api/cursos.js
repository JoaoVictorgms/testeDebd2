const express = require('express')
const router = express.Router()


const listaCursos  = []

router.get('/', (req,res) => {
    res.json(listaCursos)
})
router.post('/', (req,res) => { 
    const dadoscursos = req.body
    console.log(dadoscursos)
    listaCursos.push(dadoscursos)
    res.send('Cusrsos Adicionado')
})



module.exports = router