// base URL
const football="https://football98.p.rapidapi.com";
const F1="https://f1-race-schedule.p.rapidapi.com/api";


// football
async function getPointsTable(league){
    let reqUrl=`${football}/${league}/table`;
    var response= await fetch(
        reqUrl,{
            method:"GET",
            headers:{
                'X-RapidAPI-Key': '6cc6aa4219mshf671325da82e2a6p12141ajsn28f384bc8045',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com'
            }
        }
    );
    return await response.json();
}

// F1
async function getSchedule(){
    let reqUrl=`${F1}`;
    var response= await fetch(
        reqUrl,{
            method:"GET",
            headers:{
                'X-RapidAPI-Key': '6cc6aa4219mshf671325da82e2a6p12141ajsn28f384bc8045',
    'X-RapidAPI-Host': 'f1-race-schedule.p.rapidapi.com'
            }
        }
    );
    return await response.json();
}

//export any function
module.exports= {
    getPointsTable,
    getSchedule
};