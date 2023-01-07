
const mysql=require("mysql2");


const pool=mysql.createPool({
    host:'localhost',
    user:'vishal',
    database:'student',
    password:'vishal123'
})

module.exports=pool


