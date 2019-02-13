// Refraction | The lightweight JavaScript Physics engine
// (c) speedyplane2247 2018-2019
// As per me, my classic // *SECTION* // will be included, sorry!
// *CVAR* //
var cvarMap = new Object();
// **ROUTINE** //
cvarMap.timer = 60 // how many MS per cvar check
cvarMap.defaultXML = "./cvars.xml" // fallback in case none is specified
cvarMap.recurXML = "./update.xml" // the actual cvar listing to read from
setInterval(function() {
    updateCvars()
}
, cvarMap.timer)
// **XML READER** //
function readXML(read) {
parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

return xmlDoc.getElementsByTagName(read)[0].childNodes[0].nodeValue
// LAZY AND DIDN'T FEEL LIKE WRITING THIS SO TY AND PLS NO BULLY
// https://www.w3schools.com/xml/xml_parser.asp

}
// **GET REQUEST** //
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
} 
// STILL LAZY AND WANT TO SAVE "BRAIN" POWER SO TY AND PLS NO BULLY!
// https://stackoverflow.com/a/4033310
// **CHECKER** //
var cvarUpdate = new Object();
// ***FUNCTION*** //
function updateCvars() { 
    try {
    cvarUpdate.newXML = httpGet(cvarMap.recurXML)
    }
    catch {
    console.log("1,24,888")  // sends message to SUI that it failed
    cvarUpdate.newXML = httpGet(cvarMap.defaultXML)
    }
    cvarMap.gravity = readXML("gravity")
    cvarMap.collision = readXML("gravity")

}

