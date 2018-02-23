var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;

var user = "";
var password = "";
/*
For Fullscreen put this code:

var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/
var game = new Phaser.Game(w, h, Phaser.CANVAS, 'gameContainer');

document.getElementById("login").addEventListener("click",function(){
    var logins = [];
    if(localStorage.user)
        logins = localStorage.user.split("#");

    fetchUserPass();

    if(user != "" && password != ""){
        if(logins.indexOf(user + "," + password) != -1 ){
                init();
        }else{
            alert("Datos incorrectos");
        }
    }
});

document.getElementById("signup").addEventListener("click",function(){

    fetchUserPass();

    if(user != "" && password != ""){
        if(!checkUser()){
            if(localStorage.user){
                localStorage.user = localStorage.user + user + "," + password + "#";
            }
            else{
                localStorage.user = user + "," + password + "#";
            }
            init();
        } else{
            alert("Ese usuario ya existe");
        }
    }
    else{
        alert("Escriba todos los campos");
    }

});

function init(){

    $("#loginForm").hide();

    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('menu', menuState);
    game.state.add('game', gameState);

    game.state.start('boot');
}


function fetchUserPass(){
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
}

function checkUser(){
    var users = "";
    if(localStorage.user)
        users = localStorage.user;
    if(users.indexOf(user) != -1){
        return true;
    }
    else{
        return false;
    }
}
