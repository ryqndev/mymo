let infoToggle = true;
let sd, ed, st, et, plan;
function init(data){
    sd = new Date(data.sd);
    ed = new Date(data.ed);
    st = data.st;
    et = data.et;
    plan = populatePlan(sd, ed, st, et);
    createCalendar();
    initComponents();
    document.getElementById('info').addEventListener('onclick', function(el) {
        el.preventDefault();
        info();
    });
    createShare(window.location.href);
}
function createShare(link){
    let templ = `                
    <div id="copy-url">
        <i class="material-icons link-icon" onclick="navigator.clipboard.writeText('${link}'); M.toast({html: 'Link copied to clipboard!'});">link</i>
        <div>${link}</div>
    </div>
    Share your plan with your friends on social media
    <div class="icons">
        <a href="mailto:?Subject=Join My Plan&amp;Body=Join My Plan! ${link}" target="_blank">
        <img src="../assets/icons/gmail.jpg" alt="Email" />
        </a>
        <a href="http://www.facebook.com/sharer.php?u=${link}" target="_blank">
            <img src="../assets/icons/facebook.jpg" alt="Facebook" />
        </a>
        <a href="https://plus.google.com/share?url=${link}" target="_blank">
            <img src="../assets/icons/google.plus.jpg" alt="Google" />
        </a>
        <a href="https://twitter.com/share?url=${link}&amp;text=Join My Plan&amp;hashtags=planmysocial" target="_blank">
            <img src="../assets/icons/twitter.jpg" alt="Twitter" />
        </a>
    </div>
    `
    document.getElementById('share-urls').insertAdjacentHTML('beforeend', templ);
    shareModal();
}
function shareModal(){
    M.Modal.getInstance(document.getElementById('share-plan')).open();
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