var tank;
var balls;
var timer;
var radius = 30;
var ballScale = 0.8;
var gameState = {

    create: function () {
        game.add.sprite(0, 0, 'background');

        game.physics.startSystem(Phaser.Physics.ARCADE);

        //this.game.touchControl = this.game.plugins.add(Phaser.Plugin.TouchControl);
        //this.game.touchControl.inputEnable();

        game.global = {
            x: +game.world.centerX,
            y: +game.world.centerY,
            playerRad: 40,

        }

        tank = new playerBall(game);


        balls = game.add.group();


        timer = game.time.create(false);

        timer.loop(300,this.createNewEnemy,this);
        timer.start();

    },
    update:function () {
        game.physics.arcade.overlap(tank, balls, this.collisionHandler, this.processHandler, this);

        var rand = Math.floor(Math.random() * (10 - 1)) + 1;

        if(rand > 7)
            radius += 1;
    },
    createNewEnemy: function(){
        sprite = balls.add(new enemyBall(game,radius));
    },
    collisionHandler: function(tank, enemyBall){
        if(game.global.playerRad > h)
            this.youWin();
        if(game.global.playerRad > enemyBall.enemyRadius){
            enemyBall.kill();
            enemyBall.destroy();
            balls.remove(enemyBall);
            game.global.playerRad += 4;
            tank.upScale();
            ballScale += 0.17;
            tank.anchor.set(ballScale);
        } else{
            this.gameOver();
        }
    },
    processHandler: function(tank, enemyBall){
        return true;
    },
    render: function(){
        game.debug.body(tank);
        game.debug.body(enemyBall);
    },
    gameOver: function(){
        var loseText = game.add.text(w / 2, h / 2, 'YOU DIE', {font: '20em sans-serif', fill: '#000'});
        game.paused = true;

        this.saveScore();
        this.showScore();

        loseText.anchor.setTo(0.5);
        loseText.inputEnabled = true;
        loseText.fixedToCamera = true;
        loseText.events.onInputDown.add(this.restartGame, this);
    },
    restartGame: function(){
        radius = 30;
        ballScale = 0.8;
        game.paused = false;
        $('#scoreBoard').hide();
        game.state.start('game');
    },
    youWin: function(){
        var winText = game.add.text(w / 2, h / 2, 'YOU WIN', {font: '20em sans-serif', fill: '#000'});


        game.paused = true;

        this.saveScore();
        this.showScore();

        winText.anchor.setTo(0.5);
        winText.inputEnabled = true;
        winText.fixedToCamera = true;
        winText.events.onInputDown.add(this.restartGame, this);

    },
    saveScore: function(){
        if(localStorage.highScores){
            localStorage.highScores = localStorage.highScores +  user + ": " + game.global.playerRad + "#";
        }else{
            localStorage.highScores = user + ": " + game.global.playerRad + "#";
        }
    },
    showScore: function(){
        $(document).ready(function(){$("#scoreBoard").show();});
    }


};
