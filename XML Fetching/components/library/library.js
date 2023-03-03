 const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var xml;
const libraryNS = "http://www.example.org/PFRMapData";

async function loadLibrary() {
  if (xml == undefined) {
    let response = await fetch(
      "http://www.torontopubliclibrary.ca/data/library-data.kml",
      {
        method: "get",
        headers: {
          "Content-Type": "application/xml"
        }
      }
    );
    //convert XML string to XML DOM document
    data = new JSDOM(await response.text(), { contentType: "application/xml" });
    //console.log(data);
    xml = data.window.document; //set the xml to the XML DOM document which we can query using DOM methods
  }
  return xml;
} 
async function loadBranches() {
  xml = await loadLibrary();
  return xml.querySelectorAll("Placemark");
}
async function getBranchById(id) {
  xml = await loadLibrary();
  //1t param:Xpath expression
  //2nd:what we're querying
  //3rd:namespace
  //4th:the type of result u want to        retrieve
  //5th: which xpath object you want  evaluate () to return results to; null   means return a new one
  let result= xml.getElementById(id);
  // to loop over multiple result
  return result;
  // .iterateNext();
 }

module.exports = {
  loadLibrary,
  loadBranches,
  getBranchById
};