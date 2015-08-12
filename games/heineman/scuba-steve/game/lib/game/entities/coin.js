ig.module('game.entities.coin')
  .requires('impact.entity')
  .defines( function(){
	EntityCoin = ig.Entity.extend({
		size: {x:16,y:16},
		collides: ig.Entity.COLLIDES.NONE,
		type: ig.Entity.TYPE.B,
		name: "player",
		checkAgainst: ig.Entity.TYPE.A,
		animSheet: new ig.AnimationSheet('media/collectable.png',8,8),	
		init: function(x, y , settings){
			this.parent(x,y,settings);
			this.addAnim('idle',1,[0]);
		},
		check: function(other){
			if (other.name == "player"){
			//ig.game.addCoin(); 	
			this.kill(); 
		}}
	})
});