// import modules
const express= require("express");
const path= require("path");

 // setup- express
const app= express();
const port= process.env.PORT || 8888;

//define folders to be used
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "pug");

// setup public folder
app.use(express.static(path.join(__dirname, "public")));

// page rendering
app.get("/", (request, response) => {
    response.render("index", {
        title:"E-commerce"});
} );

// server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});