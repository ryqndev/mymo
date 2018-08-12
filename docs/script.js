
function load(){
    var settings = {
        Color: '#114433',                //(string - color) font color of whole calendar.
        LinkColor: '#0000ff',            //(string - color) font color of event titles.
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

    // $('.cld-day').addClass('ui-selectable');
    $('.cld-day').mouseover(function(){
        // console.log("|");
        $(this).addClass('ui-selected');
    });
    // $('.cld-day').mouseenter(function(){
    //     $(this).addClass('ui-selected');
    // });

    // $('cld-days').bind("tap", tapHandler );
 
    // function tapHandler( event ){
    //   $( event.target ).addClass( "tap" );
    // }
}