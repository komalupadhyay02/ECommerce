const express=require("express")
const app=express()
const path=require("path")
const PORT=4444;
const mongoose=require("mongoose")
const hbs =require("hbs")

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.static(path.join(__dirname,'public')))
app.use("/",require("./routes/product"))
app.use("/",require("./routes/review"))

mongoose.connect('mongodb://127.0.0.1/ecommerce')
.then(()=>{
    app.listen(PORT,()=>{
        console.log("http://localhost:"+PORT);
    })
})