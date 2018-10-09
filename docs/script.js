function redirect(){
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width <= 700){
        window.location = 'mobile/index.html';
    }else{
        window.location = 'desktop/index.html';
    }
}
