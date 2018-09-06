function load(){
    mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button--outlined'));
}
function link(type){
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

// const divs = document.getElementsByTagName("div");
// for(var i = 0; i < divs.length; i++){
//    //do something to each div like
//    divs[i].innerHTML = "something new...";
// }
// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));