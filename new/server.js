const express=require("express");
const mysql=require("mysql2");
const corp=require("cors");
const app=express();

const router=require("./routes/route")





app.use(corp('*')) 
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("ok working");
})


app.use('/',router);
// app.get('/data',(req,res)=>{
//     const q1=`select * from user2`;
//     db.query(q1,(err,result)=>{
//         if(err){
//             console.log("errrrrr:"+err)
//         }else{
//             res.send(result);
//         }
//     })
// })





// app.post('/signup',(req,resp)=>{
//     //const prn=req.body.prn;
//     const {prn,pwd,cpwd} = req.body
//     const q = `insert into user2 values('${prn}','${pwd}','${cpwd}')`
//     db.query(q,(err,result)=>{
//         if(err){
//             console.log("errrr:"+err)
//         }else{
//             resp.send("Inserted into User")
//         }
//     })
// })





app.listen(4000);
console.log("listen 40000")








