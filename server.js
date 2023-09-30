const express=require('express')
const dotenv=require('dotenv')
const path=require('path')
const bodyParser=require('body-parser')
const app=express()

dotenv.config({
    path:'config.env'
})
const PORT=process.env.PORT||8080

app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")

app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/imgs',express.static(path.resolve(__dirname,'assets/imgs')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT,()=>{
    console.log("Server UP");
})