function load(){
    let params = (new URL(document.location)).searchParams;
    sd = new Date(Date.UTC(params.get("sd").substr(6,4),params.get("sd").substr(0,2) - 1,params.get("sd").substr(3,2)));
    ed = new Date(Date.UTC(params.get("ed").substr(6,4),params.get("ed").substr(0,2) - 1,params.get("ed").substr(3,2)));
    console.log(sd, ed);
    createCalendar();
}

function storage(){

}
