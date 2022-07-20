const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const path = require("path");
const PORT = 3000;
const connectDB=require('./model/connectDB');
const mainRouter=require('./router/main.router');
const staffRouter=require('./router/staff.router')

connectDB.connect().then()

app.use('/public',express.static(path.join(__dirname,'/public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
    console.log("http://localhost:3000");
});

app.use('/',mainRouter)
app.use('/staff',staffRouter)