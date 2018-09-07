
function link(type){
    console.log('br');
    let shsD =  document.getElementById('section--holder-selection').style.display;
    let shhD =  document.getElementById('section--holder-host').style.display;
    let shcD =  document.getElementById('section--holder-client').style.display;
    if(type === 0){
        shsD = 'visible';
        shhD = 'none';
        shcD = 'none';
    }else if(type === 1){
        shsD = 'none';
        shhD = 'visible';
        shcD = 'none';
    }else if(type === 2){
        shsD = 'none';
        shhD = 'none';
        shcD = 'visible';
    }else if(type === 3){
        window.location.href = './Host/index.html';
    }
    else if(type === 4){
        window.location.href = './Client/index.html';
    }
}


// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));