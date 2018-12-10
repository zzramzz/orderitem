const router = require('express').Router();
const auth = require('../middlewares/auth');
const Admin = require('../middlewares/admin');
const {findAllFood,findFood,deleteFood,modifyFood,addFood} = require('../services/dbServices');



router.get('/',auth,async(req,res)=>{
  const result = await findAllFood();
  if(result =='')return res.send('No food items inserted in menu');
 res.send(result);
})

router.post('/food',auth,Admin,async(req,res)=>{
 //req.body will receive title,category,day  
   const result = await addFood(req.body);
   res.send(result);
})

router.delete('/food/:id',auth,Admin,async(req,res)=>{
    const result = await deleteFood(req.params.id);
    if(!result) return res.send('No Food item to delete ')
    res.send(result);
 })

router.put('/food/:id',auth,Admin, async(req,res)=>{
 const result = await modifyFood(req.params.id,req.body.title,req.body.cat);
res.send(result);
})

module.exports = router;