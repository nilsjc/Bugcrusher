class Bug extends Phaser.GameObjects.Sprite
{
	
	constructor(config)
	{
		super(config.scene,config.x,config.y,"bug");	// kalla på spritekonstruktorn
		config.scene.add.existing(this);				// om denna utelämnas kommer inte bomb att adderas
		
		this.setInteractive();
		this.on('pointerdown', this.clickMe,this);
		this.anims.play('alive');
		this.alive = 1;
		this.right = 1;
		var randomSpeed = Phaser.Math.Between(3,10);
		this.speed = randomSpeed / 10.0;
		this.power = 3;
		this.updateMainScore = (alive) => config.scene.updateScore(alive);
		this.createMoreBugs = config.scene.createMoreBugs.bind(config.scene);
		this.gameOverFunction = config.scene.gameOver.bind(config.scene);
	}
	
	clickMe()
	{
		if(this.power > 0)
		{
			this.power--;
			this.speed += 0.8;
		}
		if(this.power <= 0 && this.alive == 1)
		{
			this.anims.play('dead');
			this.updateMainScore(this.alive);
			this.alive = 0;
			this.createMoreBugs();
		}
	}
	
	preUpdate(time, delta)
	{
		if(this.alive == 1){
			super.preUpdate(time, delta);
			this.y -= this.speed;
			if(this.y < 10)
			{
				this.gameOverFunction();
			}
			if(this.right == 1)
			{
				this.x += 2;
			}
			if(this.right == 0)
			{
				this.x -= 2;
			}
			if(this.x > 470)
			{
				this.right = 0;
			}
			if(this.x < 10)
			{
				this.right = 1;
			}
			
		}
	}
}