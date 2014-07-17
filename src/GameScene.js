var GameScene = cc.Scene.extend({
	battleFieldLayer:null,
	
	onEnter:function () {
		this._super();
		battleFieldLayer = new BattleFieldLayer(100, 500);
		this.addChild(battleFieldLayer);
	}
	
});