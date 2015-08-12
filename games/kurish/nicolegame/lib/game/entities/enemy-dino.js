ig.module(
	'game.entities.enemy-dino'
)
.requires(
	'plugins.twopointfive.entity',
	'game.entities.particle'
)
.defines(function(){


EntityFireball = tpf.Entity.extend({
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
    });

ig.EntityPool.enableFor(EntityFireball);
EntityEnemyDino = tpf.Entity.extend({
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.ACTIVE,

	size: {x: 16, y: 16},
	friction: {x: 100, y: 100},
	scale: 0.82,

	health: 600,
	damage: 30,

	dynamicLight: true,
	
	//just added 
	shootTimer: null,
	shootWaitTimer: null,
        
	_wmBoxColor: '#ffd700',

	angle: 0,
	speed: 20,
	currentPath: null,
    currentTarget: null,
	injump: false,
	
	rangeAttackCount: 0,
    rangeAttackCountMax: 3,

	didHurtPlayer: false,
	seenPlayer: false,


	animSheet: new ig.AnimationSheet( 'media/enemy-dino.png', 64, 64 ),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		var crawFrameTime = 0.04 + Math.random() * 0.02;

		this.addAnim( 'crawl', 0.04, [0,0,0,0,0,0,1,1,1,1,2,2,3,3,2,3,3,3,2,2,3,2,2,3,3,3,2,2,3,2,3,3,3,2,2,3,2,4,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,6,6,6,6,6,7,7,8,7,8,7,7,8,8,7,7,7,8,7,7,8,8,7,8,6,6,6,6,6,6,5,5,5,5] );
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
	handleAttack: function() {
            if (!this.attacked && this.currentAnim.frame > 3) {
                this.shoot();
                this.attacked = 1;
            }
        },
    shoot: function() {
            var aimAngle = this.angleTo(ig.game.player);
            var vx = this.pos.x + 3 + Math.cos(aimAngle) * 2;
            var vy = this.pos.y + 3 + Math.sin(aimAngle) * 2;
            ig.game.spawnEntity(this.projectileEntity, vx, vy, {
                angle: aimAngle
            });
            this.soundAttack.play();
        },
	receiveDamage: function(amount, from) {
            //this.awoken = true;
            this.health -= amount;
            this.vel.x = 0;
            this.vel.y = 0;
            if (this.health <= 0) {
                //this.currentAnim = this.anims.die.rewind();
                //this.soundDie.play();
                this.collides = ig.Entity.COLLIDES.NEVER;
                this.type = ig.Entity.TYPE.NONE;
                //this.spawnedVines = false;
            /*} else if (this.health < 30 && !this.painAnimPlayed) {
                this.painAnimPlayed = true;
                this.soundPain.play();
                this.currentAnim = this.anims.pain.rewind();
            }*/
            
            /*var cx = this.pos.x + this.size.x / 2;
            var cy = this.pos.y + this.size.y / 2;
            var gibs = Math.ceil(amount / 3);
            for (var i = 0; i < gibs; i++) {
                ig.game.spawnEntity(EntityVineGib, cx, cy);*/
            }
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

});