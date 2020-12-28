class Rock extends Phaser.GameObjects.Sprite
{
	constructor(config)
	{
		super(config.scene,config.x,config.y,"rock");	// kalla på spritekonstruktorn
		config.scene.add.existing(this);				// om denna utelämnas kommer inte bomb att adderas
		
		this.setInteractive();
		this.on('pointerdown', this.clickMe,this);
	}
	
	clickMe()
	{
		this.alpha -= .1;
		this.destroy();
	}
	
	preUpdate(time, delta)
	{
		super.preUpdate(time, delta);
		this.y += 1;
		if(this.y > 400)
		{
			this.y = -10;
		}
	}
}