/**
 * @author Ryan Yang
 */
const JOIN_CODE = 20;

function load(){
    let options = {
        'onClose': checkEndDate,
        'minDate': new Date(),
        'format': 'mm/dd/yyyy',
        'container': document.body
    }
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
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
        window.location.href = './r/?id=' + roomCode;
        // window.location.href = roomURL;
    }
    else if(type === 4){
        if(document.getElementById('end-date').classList.contains('valid')){
            let startDate = document.getElementById('start-date').value;
            let endDate =  document.getElementById('end-date').value;
            window.location.href = `./r/?sd=${startDate}&ed=${endDate}`;
        }else{
            document.getElementById('end-date').classList.add('shake');

            setTimeout(function(){document.getElementById('end-date').classList.remove('shake')}, 1000);
        }
        
    }
}

function checkEndDate(){
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    if((startDate != "" ) && (endDate != "") && (new Date(startDate) <= new Date(endDate))){
        document.getElementById('end-date').className = 'datepicker active valid';  
    }else{
        document.getElementById('end-date').className = 'datepicker active invalid';  
    }

}
