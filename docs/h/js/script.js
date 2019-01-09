let infoToggle = true;
function load(){
    let params = (new URL(document.location)).searchParams;
    if(params.get("sd") == null){
        client();
    }else{
        host();
    }
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
/**
 * @todo: need to fix this line of code. tooltips not showing up properly. If I can't find a fix, will use external tooltip library
 */
function info(){
    document.querySelectorAll('.tooltipped').forEach(e => {
        infoToggle?M.Tooltip.getInstance(e).open():M.Tooltip.getInstance(e).close();
    });
    infoToggle = !infoToggle;
}
