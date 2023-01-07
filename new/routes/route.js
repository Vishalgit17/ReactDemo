const express=require("express")
const router=express.Router()
const db=require("../db")



router.get('/data',(req,res)=>{
    const q1=`select * from user2`;
    db.query(q1,(err,result)=>{
        if(err){
            console.log("errrrrr:"+err)
        }else{
            res.send(result);
        }
    })
})

router.post('/signup',(req,resp)=>{
    //const prn=req.body.prn;
    const {prn,pwd,cpwd} = req.body
    const q = `insert into user2 values('${prn}','${pwd}','${cpwd}')`
    db.query(q,(err,result)=>{
        if(err){
            console.log("errrr:"+err)
        }else{
            resp.send("Inserted into User")
        }
    })
})


module.exports=router