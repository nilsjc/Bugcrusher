var game;
window.onload = function(){
	var config = {
		type: Phaser.AUTO,
		width: 480,
		height: 640,
		parent: 'phaser-game',
		scene: [SceneMain],
		physics: {
			default: 'arcade',
			arcade: {
				debug: true
			}
		},
		scene: [
			BootScene,
			SceneMain,
			EndScene
			]};
	game = new Phaser.Game(config);
}