class SceneMain extends Phaser.Scene
{
	constructor()
	{
		super('SceneMain');
	}
	preload()
	{
		this.load.spritesheet('bug', 'bug4.png', { frameWidth: 32, frameHeight: 31 });
		this.load.image("rock", "rock.png");
	}
	create()
	{
		this.gameOverBool = 0;
		this.text = this.add.text(10,10);
		this.score = 0;
		this.createMoreBugsCalls = 0.2;
		this.anims.create({
			key: 'alive',
			frames: this.anims.generateFrameNumbers('bug', { start: 0, end: 1 }),
			frameRate: 8,
			repeat: -1
		});
		
		this.anims.create({
			key: 'dead',
			frames: this.anims.generateFrameNumbers('bug', { start: 2, end: 2 }),
			frameRate: 1,
			repeat: -1
		});
		this.logConsoler();
		this.bugGroup = this.add.group();
		this.createBug(this.bugGroup);
		// let bug = new Bug({scene:this,x:50,y:90});
		// let bug2 = new Bug({scene:this,x:90,y:110});
		
	}
	update()
	{
		this.text.setText("Bugs: " + this.score);
		if(this.gameOverBool == 1)
		{
			this.scene.start('EndScene', this.score);
		}
	}
	
	updateScore(value)
	{
		this.score += value;
	}
	
	createBug(bugGroup)
	{
		
		var xx = Phaser.Math.Between(10, 470);
		let bug = new Bug({scene:this,x:xx,y:610});
		this.bugGroup.add(bug);
	}
	createMoreBugs()
	{
		this.createMoreBugsCalls += 0.45;
		var f;
		for(f=0; f<this.createMoreBugsCalls; f++)
		{
			var xx = Phaser.Math.Between(10, 470);
			let bug = new Bug({scene:this,x:xx,y:610});
			this.bugGroup.add(bug);
		}
	}
	
	gameOver()
	{
		this.gameOverBool = 1;
	}
	
	logConsoler()
	{
		console.log("ready");
	}
}