ig.module(
	'game.entities.health-pickup'
)
.requires(
	'plugins.twopointfive.entity'
)
.defines(function(){

EntityHealthPickup = tpf.Entity.extend({
	checkAgainst: ig.Entity.TYPE.A,
	
	size: {x: 16, y: 16},
	vpos: 0.5,
	scale: 0.2,
	amount: 25,
	gravityFactor: 0,

	dynamicLight: true,
	_wmBoxColor: '#55ff00',
	
	animSheet: new ig.AnimationSheet( 'media/gummy.png', 128, 128 ),
	pickupSound: new ig.Sound( 'media/sounds/health-pickup.*' ),
	bounceTimer: null,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'idle', 10, [0] );
		this.bounceTimer = new ig.Timer();
		this.pickupSound.volume = 0.05;
	},

	update: function() {
		// Give the item an Arcade-like bounce animation
		this.pos.z = (Math.cos(this.bounceTimer.delta()*3)+1) * 3;
		this.parent();
	},
	
	check: function( other ) {
		if( other.giveHealth(this.amount) ) {
			this.pickupSound.play();
			this.kill();
		}
	}
});

});