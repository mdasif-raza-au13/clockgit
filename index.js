let info = new Date();
let date = info.toLocaleDateString();

let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[info.getDay()];

let dm = document.getElementById('day');
dm.innerHTML = date+" "+day;

setInterval(()=>{
    let infot = new Date();
    let time = infot.toLocaleTimeString();
    let tm = document.getElementById('time');
    // console.log(tm);
    tm.innerHTML = time;
},1000);

console.log(time,date,day);