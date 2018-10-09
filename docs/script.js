function redirect(){
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    alert(width);
    if(width <= 1000){
        window.location = 'mobile/index.html';
    }else{
        window.location = 'desktop/index.html';
    }
}
