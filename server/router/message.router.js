const express = require('express');
const router = express.Router();

let Message = require('../models/message.model');

router.get('/',(req,res) =>{
    res.send('hello')
})

router.post('/new', async (req,res)=>{
    const newMessage = new Message(req.body)
    const saveMessage = await newMessage.save()
    res.json(saveMessage)
})

router.get('/get/:id', async (req, res) => {
    const q = await Message.findById(req.params.id);
    res.json(q);
});


router.delete('/delete/:id', async (req, res) => {
    const result = await Message.findByIdAndDelete(req.params.id);
    res.json(result);
});
// Update a quote
router.patch('/update/:id', async (req, res) => {
    const q = await Message.updateOne({_id: req.params.id}, {$set: req.body});
    res.json(q);
});


module.exports = router;