function redirect(){
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log(width);
    if(width <= 800){
        window.location = 'mobile/index.html';
    }else{
        window.location = 'desktop/index.html';
    }
}
