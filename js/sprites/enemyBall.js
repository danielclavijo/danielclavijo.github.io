var enemyBall = function(game,rad){

    Phaser.Graphics.call(this, game, 0,0);

    this.beginFill(0xff9999, 1);

    this.enemyRadius = rad;

    this.drawCircle(0, 0, rad);
    this.enableBody = false;
    this.outOfBoundsKill = true;

    this.radius = Math.max(game.world.width,game.world.height) / 2;

    this.angle = Math.floor(Math.random() * 359);

    this.x = +(game.world.centerX + (this.radius * Math.sin(this.angle)));
    this.y = +(game.world.centerY + (this.radius * Math.cos(this.angle)));

    this.goalPointX = tank.x;
    this.goalPointY = tank.y;

    this.rate = 2.5;
    this.speedX =( this.x - this.goalPointX) / (300*(1/this.rate));
    this.speedY =( this.y - this.goalPointY) / (300*(1/this.rate));

    game.physics.arcade.enable(this);

    game.add.existing(this);
}
enemyBall.prototype = Object.create(Phaser.Graphics.prototype);
enemyBall.prototype.constructor = enemyBall;

enemyBall.prototype.update = function(){
    this.x -= this.speedX;
    this.y -= this.speedY;
    //if()
}
