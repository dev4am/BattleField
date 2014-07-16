var BattleFieldLayer = cc.Layer.extend({
	fighters:null,
	wall1:null,
	wall2:null,
	
	ctor:function (mapLayer) {
		this._super();

		this.init(); 
	},

	init:function () {
		this._super();
	},
	
});