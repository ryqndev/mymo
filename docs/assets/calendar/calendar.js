const date = new Date();
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const dayNamesCompact = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
// const 

function createCalendar(){

    for(let j = -1; j < 6; j++){
        for(let i = 0; i < 7; i++){
            if(j < 0){
                let day = document.getElementById('dates--interactive').appendChild(document.createElement("div"));
                day.className = 'calendar__day';
                day.textContent = dayNamesCompact[i];
            }else{
                let day = document.getElementById('dates--interactive').appendChild(document.createElement("div"));
                day.id = 'day' + (j*7 + i);
                day.className = 'calendar__day';
            }
        }
        let clear = document.getElementById('dates--interactive').appendChild(document.createElement("div"));
        clear.className = 'calendar__day--clear';
    }
    createMonth(date.getMonth(), date.getFullYear());
}

function createMonth(month, year){
    let tempDay = new Date(Date.UTC(year, month, 2)).getDay();

    for(let i = 1; i <= daysPerMonth[month]; i++){
        document.getElementById( 'day' + tempDay ).textContent = i;
        tempDay++;
    }
}