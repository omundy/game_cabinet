ig.module(
	'game.entities.level-exit'
)
.requires(
	'impact.entity'
	
)
.defines(function(){
	EntityLevelExit = ig.Entity.extend({
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 0, 255, 0.7)',
		size: {x: 32, y: 32},
		level: null,
		checkAgainst: ig.Entity.TYPE.A,
		update: function(){},
		check: function( other ){
			if(other instanceof EntityPlayer) {
				if( this.level ){
					var levelName = this.level.replace(/^(Level)?(\w)(\w*)/,
						function( m, l, a, b ) {
							return a.toUpperCase() + b;
						});
					ig.game.loadLevelDeferred( ig.global['Level'+levelName] );
				}
			}
		
		},
		update: function(){},
	
	});
});