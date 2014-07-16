if(typeof CharaterState == "undefined") {
	var CharaterState = {};
	CharaterState.RUNNING = 0;
	CharaterState.FIGHTING = 1;
	CharaterState.BREAKING = 2;
};

var Charater = cc.Class.extend({
	sprite:null, //角色图片
	
	//血量
	//士气
	//攻击力
	//攻击范围
	//对手
	
	ctor:function (spriteSheet, space, pos) {
		this.space = space;

		
	},

	
});