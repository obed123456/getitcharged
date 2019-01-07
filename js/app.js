// calculate price
let endDate = document.querySelector('#end-date').value;


document.getElementById('cal').addEventListener('click', function (){
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let days = (Date.parse(endDate) - Date.parse(startDate))/(1000*60*60*24);//count days
    let total = document.getElementById('total-amount'); 
    if(startDate === ""){
        console.log('startdate is missing');
    } if(endDate === "") {
        console.log('enddate is missing');
    } else {
        console.log((days * 3000) + ": SEK");
    }
    return document.getElementById('total-amount').innerHTML = "Total hyr för "+ days + " blir:  " +days * 3000 + ": SEK";
})

//enddate must be higher then startdate 
//input value must be avaiable
//add error message 
//check only one day
