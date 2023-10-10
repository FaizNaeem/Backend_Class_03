const express = require("express")
const app = express()

app.get('/',(req , res)=>{
res.send('server Ready ')
})
let portel = 3000
app.listen(portel,()=>{
    console.log("server ready" + 3000);
})