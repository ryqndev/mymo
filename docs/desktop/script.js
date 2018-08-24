

function load(){
    var settings = {
        Color: '#ffffff',                //(string - color) font color of whole calendar.
        // LinkColor: '#0000ff',            //(string - color) font color of event titles.
        NavShow: true,                //(bool) show navigation arrows.
        NavVertical: false,           //(bool) show previous and coming months.
        DateTimeShow: true,           //(bool) show current date.
        DateTimeFormat: 'mmm, yyyy',  //(string - dateformat) format previously mentioned date is shown in.
        DatetimeLocation: '',         //(string - element) where to display previously mentioned date, if not in default position.
        EventClick: '',               //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
        EventTargetWholeDay: true,   //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
    };
    var events = [
    ];
    
    var calendar = document.getElementById('caleandar');
    caleandar(calendar, events, settings);

    $(".cld-day").bind("taphold", tapholdHandler );
    $(".cld-day").bind("tap", tapHandler );

    // define(function (require) {
    //     var axios = require('axios');
    //     // apiCall();
    // });
    apiCall();

}
function tapholdHandler(event){
    $( event.target ).toggleClass("partial-day");
    console.log(event.target.textContent==="9");
}
function tapHandler(event){
    $( event.target ).toggleClass("all-day");
    console.log(event.target.textContent==="9");
}
// function getEventInfo(){

// }
function apiCall(){
    axios.get('https://api.github.com/users/Ryabn/repos')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}
