function load(){
    // M.AutoInit();
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
        // if(roomURL.substr(0, 10) === "https://")
        window.location.href = roomURL;
    }
    else if(type === 4){
        window.location.href = './Host/index.html';
    }
}


// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));