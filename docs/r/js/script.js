let infoToggle = true;
let sd, ed, st, et, plan;
function init(data){
    sd = new Date(data.sd);
    ed = new Date(data.ed);
    st = data.st;
    et = data.et;
    plan = []
    createCalendar();
    initComponents();
    document.getElementById('info').addEventListener('onclick', function(el) {
        el.preventDefault();
        info();
    });
}
function initComponents(){
    let options = {};
    let elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, options);
    elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, options);
    elems = document.querySelectorAll('.timepicker');
    options = {'container': 'body'}
    M.Timepicker.init(elems, options);
}
function storage(){
    
}
function select(){}
function edit(){}
function finish(){}

function timeToMinutes(time){
    let minutes = time.substr(3, 2);
    let hours = parseInt(time.substr( 0, 2 ))%12 + parseInt( time.charAt(6) == 'A' ? 0 : 12 );
    return parseInt(minutes) + (60*hours);
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