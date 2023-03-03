const express = require("express");
const path = require("path");

const library = require("./components/library/library");
//const cameras = require("./components/cameras/cameras");

const app = express();
const port = process.env.PORT || "8888";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//set up static path (for use with CSS, client-side JS, and image files)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (request, response) => {
  let libraryData= await library.loadBranches();
  response.render("index", { title: "Home", librarys: libraryData });
});
app.get("/library/:libId", async (request, response) => {
  let libInfo= await library.getBranchById(request.params.libId);
  response.render("library", { title: "Library", library: libInfo });
  // console.log(parkInfo)
});

//server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});