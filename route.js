const express= require('express');
const router = express.Router();
const InfoRouter = require('./infoSchema');


router.post('/' , async (req , res) => {
    
    var data = new InfoRouter({
        Name : req.body.Name ,
        Age : req.body.Age ,
        City : req.body.City ,

    });

    await data.save();
    
    res.json(data);
});


router.put('/update' , async (req , res) => {

    var update = await InfoRouter.update({_id : req.body._id} , {$set : {
        Name : req.body.Name ,
        Age : req.body.Age ,
        City : req.body.City 
    }});

    res.json(update);
});

router.delete('/del/:id' , async (req , res) => {
    const _id = req.params.id
    await InfoRouter.findByIdAndDelete(_id).then((user) => {
        if(!user){
            return res.status(404).send()
        }
        res.json({ massage : "Successfully removed"})
    }).catch((e) => {
        res.status(500).send(e)
    })
   
 });

router.get('/' , async (req , res) => {
   var finddata = await InfoRouter.find();
   res.json(finddata);
});

router.get('/:id' , async (req , res) => {
    var finddata = await InfoRouter.findById(req.params.id);
    res.json(finddata);
 });
 



module.exports = router;