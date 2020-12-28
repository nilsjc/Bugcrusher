class EndScene extends Phaser.Scene
{
	constructor()
	{
		super('EndScene');
	}
	create(integer)
	{
		this.text = this.add.text(100,100);
		this.text.setText("You loose! Your score is " + integer.toString());
		this.cursor = this.input.keyboard.createCursorKeys();
	}
	update()
	{
		
		if (this.cursor.space.isDown)
		{
			this.scene.start('SceneMain');
		}
	}
}