//Set a valid end date

var deadline = '2018-05-31';

//Calculate the time remaining 

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60);
    var minutes = Math.floor( (t/(1000/60)) % 60);
    var hours = Math.floor( (t/(1000*60*60)) % 24);
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

//Creating function that outputs data iside a new div

function createClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    
function updateClock() {
    var t = getTimeRemaining(endtime);
    
//This code is created for updating the numbers not for rebuilding the whole clock 
    
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
    if(t.total<=0){
        clearInterval(timeinterval);
    }
}
    
//Run function updateClock one at first to avoid delay
    
updateClock();

//Function setTinterval updates the clock every second
    
var timeinterval = setInterval(updateClock, 1000);
    
};

//Running the clock

createClock('clockdiv', deadline);
