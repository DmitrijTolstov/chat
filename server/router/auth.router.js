const express = require('express');
const router = express.Router();

let Auth = require('../models/auth.model');


router.post('/connect', async (req,res)=>{
    const newUser = new Auth(req.body)
    const saveUser = await newUser.save()
    res.json(saveUser)
})

router.get('/',async (req,res) =>{
   const data = await Auth.find({})
   res.send(data)
}) 

router.delete('/delete', async (req, res) => {
    const result = await Auth.deleteMany();
    res.json(result);
});

router.delete('/delete/:id', async (req, res) => {
    const result = await Auth.findByIdAndDelete(req.body.id);
    res.json(result);
});

module.exports = router;