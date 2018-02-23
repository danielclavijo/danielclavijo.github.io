var menuState = {

    create: function () {

        //game.add.plugin(Phaser.Plugin.Debug);
        //game.add.plugin(Phaser.Plugin.Inspector);
        //game.add.plugin(PhaserSuperStorage.StoragePlugin);
        //game.add.plugin(PhaserInput.Plugin);
        /*$("#login").on('click',function(){
            game.state.start('game');
        });
        var startLabel = game.add.text(300, 300, 'Empezar', {font: '60px Courier', fill: '#ffffff'});
        startLabel.inputEnabled = true;
        startLabel.events.onInputDown.add(this.showForm, this);*/

        game.state.start('game');
    },
    showForm: function() {
        $('#loginForm').css('display', 'block');
    },

};
