/**
 * @author Ryan Yang
 */
const JOIN_CODE = 20;
let hostPlanSettings = {
    'startDate' : '',
    'endDate' : '',
    'startTime' : '',
    'endTime' : ''
}

function load(){
    setupDatepickers();
    setupTimepickers();
}
function setupDatepickers(){
    let options = {
        'onClose': checkEndDate,
        'minDate': new Date(),
        'format': 'mm/dd/yyyy',
        'container': document.body
    }
    let elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, options);
}
function setupTimepickers(){
    let options = {
        'onCloseEnd': checkEndTime
    }
    let elems = document.querySelectorAll('.timepicker');
    M.Timepicker.init(elems, options);
}
function link(type){
    let shsD =  document.getElementById('section--holder-selection');
    let shhD =  document.getElementById('section--holder-host');
    let shh2 =  document.getElementById('section--holder-host2');
    let shcD =  document.getElementById('section--holder-client');
    switch(type){
        case 0:
            shcD.classList.add('fade-out');
            shhD.classList.add('fade-out');
            setTimeout(function(){
                shhD.style.display = 'none';
                shcD.style.display = 'none';
                shsD.style.display = 'block'
                shcD.classList.remove('fade-out');
                shhD.classList.remove('fade-out');
                shsD.classList.add('fade-in');
            }, 320);
            break;
        case 1:
            shsD.classList.add('fade-out');
            setTimeout(function(){
                shsD.style.display = 'none';
                shsD.classList.remove('fade-out');
                shcD.style.display = 'block';
                shcD.classList.add('fade-in');
            }, 320);
            break;
        case 2:
            shsD.classList.add('fade-out');
            shh2.classList.add('fade-out');
            setTimeout(function(){
                shsD.style.display = 'none';
                shh2.style.display = 'none';
                shsD.classList.remove('fade-out');
                shh2.classList.remove('fade-out');
                shhD.style.display = 'block';
                shhD.classList.add('fade-in');
            }, 320);
            break;
        case 3:
            let roomURL = document.getElementById('text--client').value;
            let urlLen = roomURL.length;
            let roomCode = roomURL.substr(urlLen - JOIN_CODE, JOIN_CODE);
            window.location.href = `./r/?id=${roomCode}`;
            break;
        case 4:
            if(document.getElementById('end-date').classList.contains('valid')){
                let startDate = document.getElementById('start-date').value;
                let endDate =  document.getElementById('end-date').value;
                hostPlanSettings['startDate'] = startDate;
                hostPlanSettings['endDate'] = endDate;
                shhD.classList.remove('fade-in');
                shhD.classList.add('fade-out');
                setTimeout(function(){
                    shhD.style.display = 'none';
                    shhD.classList.remove('fade-out');
                    shh2.style.display = 'block';
                    shh2.classList.add('fade-in');
                }, 320);
            }else{
                document.getElementById('end-date').classList.add('shake');
                setTimeout(function(){document.getElementById('end-date').classList.remove('shake')}, 1000);
            }
            break;
        case 5:
            if(document.getElementById('end-time').classList.contains('valid')){
                let startTime = document.getElementById('start-time').value;
                let endTime =  document.getElementById('end-time').value;

                hostPlanSettings['startTime'] = timeToMinutes(startTime);
                hostPlanSettings['endTime'] = timeToMinutes(endTime);
                window.location.href = `./r/?sd=${hostPlanSettings['startDate']}&ed=${hostPlanSettings['endDate']}&st=${hostPlanSettings['startTime']}&et=${hostPlanSettings['endTime']}`;
            }else{
                document.getElementById('end-time').classList.add('shake');
                setTimeout(function(){document.getElementById('end-date').classList.remove('shake')}, 1000);
            }
            break;
    }
}
function checkEndDate(){
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    if((startDate != "" ) && (endDate != "") && (new Date(startDate) <= new Date(endDate))){
        document.getElementById('end-date').className = 'datepicker active valid';  
    }else{
        document.getElementById('end-date').className = 'datepicker active invalid';  
    }
}

function checkEndTime(){
    let startTime = document.getElementById('start-time').value;
    let endTime = document.getElementById('end-time').value;
    let startMinutes = timeToMinutes(startTime);
    let endMinutes = timeToMinutes(endTime);
    if((startTime != "" ) && (endTime != "") && (startMinutes < endMinutes)){
        document.getElementById('end-time').className = 'timepicker active valid';  
    }else{
        document.getElementById('end-time').className = 'timepicker active invalid';  
    }
}
/**
 * returns the number of minutes elapsed since 12 AM or 00:00:00
 */
function timeToMinutes(time){
    let minutes = time.substr(3, 2);
    let hours = parseInt(time.substr( 0, 2 ))%12 + parseInt( time.charAt(6) == 'A' ? 0 : 12 );
    return parseInt(minutes) + (60*hours);
}