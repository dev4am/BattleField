var BattleFieldLayer = cc.Layer.extend({
	startX:null,
	endX:null,
	fighters:null,
	wall1:null,
	wall2:null,
	
	ctor:function (startX, endX) {
		this._super();
		this.startX = startX;
		this.endX = endX;

		this.init(); 
	},

	init:function () {
		this._super();
		
		cc.log(this.startX); 
		this.wall1 = new Character(CharaterType.WALL);
		this.wall1.sprite.setAnchorPoint(0, 0);
		this.wall1.sprite.setPosition(this.startX, 0);
		this.addChild(this.wall1.sprite, 0, 0);
		
		this.wall2 = new Character(CharaterType.WALL);
		this.wall2.sprite.setAnchorPoint(0, 0);
		this.wall2.sprite.setPosition(this.endX-this.wall2.sprite.width, 0);
		this.addChild(this.wall2.sprite, 0, 0);
	},
	
});