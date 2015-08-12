ig.module(
	'game.entities.enemy-tinkiwinki'
)
.requires(
	'plugins.twopointfive.entity',
	'game.entities.particle'
)
.defines(function(){


EntityEnemyTinkiSpawner = tpf.Entity.extend({
	size: {x: 16, y: 16},
	scale: 0.82,
	

	dynamicLight: true,
	_wmBoxColor: '#ff0000',

	angle: 0,

	animSheet: new ig.AnimationSheet( 'media/tinki-spawn.png', 64, 128 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'idle', 1, [0] );
		this.addAnim( 'spawn', 0.02, [0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21] );
	},

	update: function() {
		if( this.currentAnim == this.anims.idle ) {
			if( this.manhattenDistanceTo(ig.game.player) < 512 ) {
				this.currentAnim = this.anims.spawn.rewind();
			}
			else {
				return;
			}
		}

		this.parent();

		// Spawn anim finished? Spawn the Blob and kill the spawner.
		if( this.currentAnim == this.anims.spawn && this.currentAnim.loopCount ) {
			ig.game.spawnEntity(EntityEnemyTinkiwinki, this.pos.x, this.pos.y);
			this.kill();
		}
	},

	manhattenDistanceTo: function( other ) {
		// This is a tiny bit faster than .distanceTo() and we don't need the precision
		return Math.abs(other.pos.x - this.pos.x) + Math.abs(other.pos.y - this.pos.y);
	}
});

EntityEnemyTinkiwinki= tpf.Entity.extend({
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.PASSIVE,

	size: {x: 16, y: 16},
	friction: {x: 100, y: 100},
	scale: 0.82,

	health: 200,
	damage: 15,

	dynamicLight: true,
	_wmBoxColor: '#ffd700',

	angle: 0,
	speed: 20,
	injump: false,

	didHurtPlayer: false,
	seenPlayer: false,


	animSheet: new ig.AnimationSheet( 'media/tinkiwinki.png', 64, 64 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		var crawFrameTime = 0.04 + Math.random() * 0.02;

		this.addAnim( 'crawl', 0.04, [0] );
		this.currentAnim.gotoRandomFrame();

		this.hurtTimer = new ig.Timer(); 
		
		if (settings.attackNow) {
                this.angle = this.angleTo(ig.game.player) + (Math.random() - 0.5) * 1;
                this.didHurtPlayer = false;
                this.currentAnim = this.anims.attack;
                this.currentAnim.gotoFrame(12);
                this.tile.quad.position[1] += 10;
            }
	},


	update: function() {
	
	
		var distanceToPlayer = this.distanceTo(ig.game.player);
            if (this.currentAnim == this.anims.idle && (distanceToPlayer > 80 || !this.canSee(ig.game.player))) {
                this.currentAnim.update();
                this.updateQuad();
                return;
		}
		
		this.angle = this.angleTo( ig.game.player );

		this.vel.x = Math.cos(this.angle) * this.speed;
		this.vel.y = Math.sin(this.angle) * this.speed;
		
		if( ig.game.dead ) {
			// Move away from the player if he's dead
			this.vel.x *= -1;
			this.vel.y *= -1;
		}

		this.parent();
	},

	kill: function() {
		var cx = this.pos.x + this.size.x/2;
		var cy = this.pos.y + this.size.y/2;
		for( var i = 0; i < 20; i++ ) {
			ig.game.spawnEntity( EntityEnemyBlobGib, cx, cy );
		}
		ig.game.blobKillCount++;
		this.parent();
	},

	check: function( other ) {
		if( this.hurtTimer.delta() < 0 ) {
			// Player already hurt during this attack move?
			return;
		}

		// Only hurt the player once a second
		this.hurtTimer.set(1);

		
		this.vel.x = -this.vel.x;
		this.vel.y = -this.vel.y;
		other.receiveDamage( this.damage, this );
	}
});



EntityEnemyBlobGib = EntityParticle.extend({
	vpos: 0,
	scale: 0.5,
	initialVel: {x:120, y: 120, z: 2.5},
	friction: {x: 10, y: 10},
	
	lifetime: 2,
	
	animSheet: new ig.AnimationSheet( 'media/blob-gib.png', 16, 16 ),
	
	init: function( x, y, settings ) {
		this.addAnim( 'idle', 5, [0,1,2,3,4,5,6,7,8,9,10,11] );
		this.parent( x, y, settings );
	}
});

/*EntityFireball = tpf.Entity.extend({
        type: ig.Entity.TYPE.NONE,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        size: {
            x: 1,
            y: 1
        },
        maxVel: {
            x: 300,
            y: 300
        },
        vpos: 0,
        gravity: 40,
        zvel: 0,
        scale: 0.4,
        angle: 0,
        speed: 100,
        damage: 15,
        startZ: 0.8,
        startZVel: 10,
        dynamicLight: true,
        _wmIgnore: true,
        animSheet: new ig.AnimationSheet('media/grenade.png', 32, 32),
        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.vel.x = Math.cos(this.angle) * this.speed;
            this.vel.y = Math.sin(this.angle) * this.speed;
            this.addAnim('idle', 0.1, [0, 1, 2, 3]);
            if (!ig.global.wm) {
                this.floor = this.tile.quad.position[1];
                this.tile.quad.position[1] = this.startZ;
                this.zvel = this.startZVel;
            }
        },
        reset: function(x, y, settings) {
            this.tile.quad.position[1] = this.startZ;
            this.zvel = this.startZVel;
            this.parent(x, y, settings);
            this.vel.x = Math.cos(this.angle) * this.speed;
            this.vel.y = Math.sin(this.angle) * this.speed;
        },
        handleMovementTrace: function(res) {
            this.parent(res);
            if (res.collision.x || res.collision.y) {
                this.kill();
            }
        },
        updateQuad: function() {
            this.zvel -= this.gravity * ig.system.tick;
            var nz = this.tile.quad.position[1] + this.zvel * ig.system.tick;
            if (nz < this.floor) {
                this.kill();
                return;
            }
            this.tile.quad.position[1] = nz;
            this.tile.quad._dirty = true;
            this.parent();
        },
        check: function(other) {
            other.receiveDamage(this.damage, this);
            this.kill();
        }
    });*/

});