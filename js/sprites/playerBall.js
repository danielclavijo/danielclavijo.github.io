var playerBall = function(game){

    Phaser.Sprite.call(this, game, game.global.x, game.global.y);
    this.scale.setTo(0.5,0.5);

    this.currentScale = 1;

    var offsetAxis = -12;

    game.physics.arcade.enable(this);

    this.body.setCircle(game.global.playerRad,offsetAxis,offsetAxis);
    this.anchor.set(0.8);
    game.input.addMoveCallback(this.move, this);

    game.add.existing(this);
}

playerBall.prototype = Object.create(Phaser.Sprite.prototype);
playerBall.prototype.constructor = playerBall;

playerBall.prototype.move = function(pointer, x, y){
    this.x = x;
    this.y = y;
    //this.currentScale += 0.01;
    //this.scale.setTo(this.currentScale);
}

playerBall.prototype.upScale = function(){
    //this.offsetAxis -= 6;
    var offset = this.offsetAxis;

    this.body.setCircle(game.global.playerRad,offset,offset);
}
