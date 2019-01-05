function load(){
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
    let params = (new URL(document.location)).searchParams;
    sd = new Date(params.get("sd").substr(6,4), params.get("sd").substr(0,2) - 1, params.get("sd").substr(3,2));
    ed = new Date(params.get("ed").substr(6,4), params.get("ed").substr(0,2) - 1, params.get("ed").substr(3,2));
    createCalendar();
    document.getElementById('plan-timeline').innerHTML = sd.toDateString().substring(3) + " - " + ed.toDateString().substring(3);
    let options = {};
    let elems = document.querySelectorAll('.tooltipped');
    let instances = M.Tooltip.init(elems, options);
    document.getElementById('info').addEventListener('mousedown', function(el) {
        el.preventDefault();
        info(true);
    });
    document.getElementById('info').addEventListener('mouseup', function(el) {
        el.preventDefault();
        info(false);
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
function info(press){
    document.querySelectorAll('.tooltipped').forEach(e => {
        press?M.Tooltip.getInstance(e).open():M.Tooltip.getInstance(e).close();
    })
}
