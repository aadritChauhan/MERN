//import required modules
const { response } = require("express");
const express= require("express");
const path= require("path");
const {MongoClient}= require("mongodb");

//mongo tings
const dbUrl= "mongodb+srv://aadrit:Kingmessi10@cluster0.rphlek6.mongodb.net/shopdb?retryWrites=true&w=majority";
const client= new MongoClient(dbUrl);

//mongo functiion
async function connection(){
    await client.connect();
    db= client.db("shopdb");//select database
    return db;
}


//set up express app
 const app= express();
 const port= process.env.PORT || 8888;

 //define important folders(using path)
app.set("views", path.join(path.join(__dirname, "views")));
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//pug
app.set("view engine", "pug");

var links= [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"About Us",
        path:"/about"
    },
    {
        name:"Contact Us",
        path:"/contact"
    }
]

 //pages routing
 app.get("/", async (request, response)=> {
    Pdata= await getdata();
    response.render("index", {title:"Home", menu: links, catalogue: Pdata })
 });
 app.get("/about", (request, response)=>{
    response.render("about", {title: "About", menu:links});
 });
 app.get("/contact",(request, response)=>{
    response.render("contact", {title: "Contact Us", menu:links});
 });

 //set up server listening
 app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
 })

 //function to retreive data from database
async function getdata(){
    db= await connection();
    var results= db.collection("Products").find({});
    res= await results.toArray();
    return res; 
}