class BootScene extends Phaser.Scene
{
	constructor()
	{
		super('BootScene');
	}
	create()
	{
		this.text = this.add.text(120,100);
		this.cursor = this.input.keyboard.createCursorKeys();
	}
	update()
	{
		this.text.setText("BugCrusher");
		if (this.cursor.space.isDown)
		{
			this.scene.start('SceneMain');
		}
	}
}