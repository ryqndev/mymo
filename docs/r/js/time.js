function addTimeBlock(){
    let tbStartTime = document.getElementById('start-time').value;
    let tbEndTime  = document.getElementById('end-time').value;
    updateUserSchedule(tbStartTime, tbEndTime);
    M.Modal.getInstance(document.getElementById('add-time-options')).close();
    createTimeBlockComp(tbStartTime, tbEndTime);
}
function createTimeBlockComp(startTime, endTime){
    let timeBlockHTML = `
    <div id="time-${timeToMinutes(startTime)}-${timeToMinutes(endTime)}" class="time-block--card card valign-wrapper">
        <p>${startTime} - ${endTime}</p>
        <i class="material-icons btn-floating waves-effect waves-light orange lighten-1 tooltipped" data-position="left" data-tooltip="Edit Time Block" onclick="editTimeBlock('time-${timeToMinutes(startTime)}-${timeToMinutes(endTime)}')">edit</i>
        <i class="material-icons btn-floating waves-effect waves-light red tooltipped" data-position="left" data-tooltip="Delete Time Block" onclick="deleteTimeBlock('time-${timeToMinutes(startTime)}-${timeToMinutes(endTime)}')">delete</i>
    </div>`;
    document.getElementById('time-block--holder').insertAdjacentHTML('beforeend', timeBlockHTML);
}
function updateUserSchedule(tbStartTime, tbEndTime){
    return 0;
}
/**
 * @todo: add function that removes the time block from the user plan data as well
 */
function deleteTimeBlock(tbID){
    document.getElementById(tbID).remove();
}
/**
 * @todo: Do not use this hacky version. Edit the data instead of deleting and promting another add
 */
function editTimeBlock(tbID){
    deleteTimeBlock(tbID);
    M.Modal.getInstance(document.getElementById('add-time-options')).open();
}
function timeToMinutes(time){
    let minutes = time.substr(3, 2);
    let hours = parseInt(time.substr( 0, 2 )) % 12 + parseInt( time.charAt(6) == 'A' ? 0 : 12 );
    return parseInt(minutes) + (60*hours);
}
function populatePlan(sd, ed, st, et){
    let userPlan = []
    let startDate = new Date(sd);
    let endDate = new Date(ed);
    for(let i = 0; i < ((endDate - startDate)/86400000 >> 0) + 1; i++){
        userPlan.push([]);
        for(let j = 0; j < et - st; j++){
            userPlan[i].push(0);
        }
    }
    return userPlan;
}
function updateSelection(){
    document.getElementById('info-box--selection').textContent = "";
    currentSelection.forEach(e => {
        document.getElementById('info-box--selection').textContent += (" " + e.innerText);
    })
}