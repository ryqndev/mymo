
function load(){
    
}


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
