function host(){
    sd = new Date(params.get("sd").substr(6,4), params.get("sd").substr(0,2) - 1, params.get("sd").substr(3,2));
    ed = new Date(params.get("ed").substr(6,4), params.get("ed").substr(0,2) - 1, params.get("ed").substr(3,2));
    createCalendar();
}
