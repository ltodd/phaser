var ReGame = {};

ReGame.Boot = function (game) {};

ReGame.Boot.prototype = {
    preload: function () {
        this.load.image('preloadBar', 'images/loading_bar.png');
        this.load.image('titleImage', 'images/title_image.png');
    },
    
    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 480;
        this.scale.minHeight = 270;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forceLandscape = true;
        this.scale.refresh();
        
        this.input.addPointer();
        this.stage.backgroundColor = '#1f3555';
        
        this.state.start('Preloader');
    }
}