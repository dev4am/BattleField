if(typeof CharaterState == "undefined") {
	var CharaterState = {};
	CharaterState.RUNNING = 0;
	CharaterState.FIGHTING = 1;
	CharaterState.BREAKING = 2;
};

if(typeof CharaterType == "undefined") {
	var CharaterType = {};
	CharaterType.WALL = 0;
	CharaterType.FIGHTER = 1;
	CharaterType.BOWER = 2;
};

var Character = cc.Class.extend({
	characterType:null, //
	sprite:null, //角色图片
	
	//血量
	//士气
	//攻击力
	//攻击范围
	//对手
	
	ctor:function (characterType) {
		this.characterType = characterType;
		if(characterType==CharaterType.WALL){
		
		}else if(characterType==CharaterType.FIGHTER){
			
		}else if(characterType==CharaterType.BOWER){
			
		}
		this.sprite = cc.Sprite.create(res.temp_png);
	},

	
});