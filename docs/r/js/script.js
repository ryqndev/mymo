let infoToggle = true;

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
    });
    infoToggle = !infoToggle;
}
