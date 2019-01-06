let infoToggle = false;
function load(){
    let params = (new URL(document.location)).searchParams;
    sd = new Date(params.get("sd").substr(6,4), params.get("sd").substr(0,2) - 1, params.get("sd").substr(3,2));
    ed = new Date(params.get("ed").substr(6,4), params.get("ed").substr(0,2) - 1, params.get("ed").substr(3,2));
    createCalendar();
    document.getElementById('plan-timeline').innerHTML = sd.toDateString().substring(3) + " - " + ed.toDateString().substring(3);
    let options = {};
    let elems = document.querySelectorAll('.tooltipped');
    let instances = M.Tooltip.init(elems, options);
    document.getElementById('info').addEventListener('onclick', function(el) {
        el.preventDefault();
        info();
    });
}
function storage(){

}
function select(){

}
function edit(){

}
function finish(){

}
function info(){
    document.querySelectorAll('.tooltipped').forEach(e => {
        infoToggle?M.Tooltip.getInstance(e).open():M.Tooltip.getInstance(e).close();
    })
    infoToggle = !infoToggle;
}
