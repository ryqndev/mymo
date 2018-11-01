/**
 * @author Ryan Yang
 */
function load(){
    parseRoom();
    createCalendar();
    select();
}
function parseRoom() {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('id'));
}