const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const monthElement = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const daysElement = document.querySelector('.days')
const currMonth = new Date().getMonth();

// getting last day of the month
const year = new Date().getFullYear();
const lastDay = new Date(year, currMonth + 1, 0).getDate();

// first day of month current month
const firstDay = new Date(year, currMonth, 1).getDay() - 1;


monthElement.innerText = months[currMonth];
fullDate.innerText = new Date().toDateString();


let days = "";
for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`
}

const currentDay = new Date().getDate();
// displaying days 
for (let i =1; i <= lastDay; i++) {
    if (i === currentDay) {
        days += `<div class="today">${i}</div>`;
    } else {days += `<div>${i}</div>`;} 
    
};

daysElement.innerHTML = days;

