let date = new Date();

let m = document.getElementById('MonthName');
let s = document.getElementById('WeekdayName');
let d = document.getElementById('DayName');
let a = document.getElementById('YearName');

let mes = date.getMonth() 
let semana = date.getDay()
let dia = date.getDate()
let ano = date.getFullYear()

let days = [
    "Sunday", 'Monday ', 'Tuesday ', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

let months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',  'October', 'November', 'December'
];


m.innerText = `${months[mes]}`
s.innerText = `${days[semana]}`
d.innerText = `${dia}`
a.innerText = `${ano}`