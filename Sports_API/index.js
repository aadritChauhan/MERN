//import required module
const express= require ("express");
const path= require("path");
const dotenv= require("dotenv");


//set up express app
const app= express();
const port= process.env.PORT || 7777;

//for post operations
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

const sportData= require("./modules/football/api");





//define important folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//page routes
app.get("/", async (request, response)=> {
    let table= await sportData.getSchedule();
    // console.log(table)
    response.render("index", {title:"home"});
});

// get for points table
app.get("/pointsTable", async (request, response)=> {

    // let leagueName= request.body.League;
    let table= await sportData.getPointsTable();
    // console.log(table)
    response.render("pointsTable", {title:"Standing Page" });
});

// post for points table
app.post("/Table", async (request, response)=> {
    let leagueName= request.body.league;
    let table= await sportData.getPointsTable(leagueName);
    // console.log(table);
    response.render("Table", {title:"Standing Page", standings: table});
});

app.get("/F1", async (request, response)=> {
    let schedule= await sportData.getSchedule();
    response.render("F1", {title:"F1 Schedule", F1Schedule: schedule});
});


//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//server listening
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
})