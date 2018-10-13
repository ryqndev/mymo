const JOIN_CODE = 20;

function load(){
    $('[data-toggle="datepicker"]').datepicker();
    $('#start-date').datepicker('setStartDate', new Date());
    $('#end-date').datepicker('setStartDate', new Date());
}

function link(type){
    let shsD =  document.getElementById('section--holder-selection');
    let shhD =  document.getElementById('section--holder-host');
    let shcD =  document.getElementById('section--holder-client');
    if(type === 0){
        shsD.style.display = 'block';
        shhD.style.display = 'none';
        shcD.style.display = 'none';
        
    }else if(type === 1){
        shsD.style.display = 'none';
        shhD.style.display = 'block';
        shcD.style.display = 'none';

    }else if(type === 2){
        shsD.style.display = 'none';
        shhD.style.display = 'none';
        shcD.style.display = 'block';
    }else if(type === 3){
        let roomURL = document.getElementById('text--client').value;
        //check if url is legit
        let urlLen = roomURL.length;
        let roomCode = roomURL.substr(urlLen - JOIN_CODE, JOIN_CODE);
        let curURL = window.location.href;
        window.location.href = './Client/index.html?id=' + roomCode;
        // window.location.href = roomURL;
    }
    else if(type === 4){
        let startDate =$('#start-date').val();
        let endDate = $('#end-date').val();
        console.log(startDate, endDate);
        window.location.href = `./Host/index.html?sd=${startDate}&ed=${endDate}`;
    }
}

function checkEndDate(){
    M.updateTextFields();
    let startDate = $('#start-date').datepicker('getDate');
    let endDate = $('#end-date').datepicker('getDate');
    console.log(startDate, endDate);
    if(startDate > endDate){
        $('#end-date').addClass('invalid');  
    }else{
        $('#end-date').removeClass('invalid');  
        $('#end-date').addClass('valid');  
    }

}