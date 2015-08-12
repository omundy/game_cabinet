ig.module( 'game.levels.base2' )
.requires( 'impact.image','game.entities.player','game.entities.player-girl','game.entities.health-pickup','game.entities.grenade-pickup' )
.defines(function(){
LevelBase2=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 1040,
			"y": 96
		},
		{
			"type": "EntityPlayerGirl",
			"x": 1048,
			"y": 140
		},
		{
			"type": "EntityHealthPickup",
			"x": 220,
			"y": 724
		},
		{
			"type": "EntityGrenadePickup",
			"x": 220,
			"y": 720
		},
		{
			"type": "EntityGrenadePickup",
			"x": 348,
			"y": 1112
		},
		{
			"type": "EntityHealthPickup",
			"x": 348,
			"y": 1112
		},
		{
			"type": "EntityHealthPickup",
			"x": 720,
			"y": 1696
		}
	],
	"layer": [
		{
			"name": "floor",
			"width": 32,
			"height": 32,
			"linkWithCollision": false,
			"visible": 0,
			"tilesetName": "media/tiles/level2-tiles-64.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[0,0,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,31,31,31,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,31,31,31,31,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,31,31,0,0,0,0,0,31,31,31,31,31,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,31,0,0,0,0,0,0,31,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,31,31,31,0,0,0],
				[0,0,0,31,31,31,31,31,31,31,31,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,32,0,0,0,0,32,31,31,31,0,0,0,0,0,0,0,0,0,0,31,31,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,31,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,31,0,0,0,0,31,31,31,0],
				[0,0,0,0,0,31,31,0,31,31,31,31,31,0,0,31,31,31,0,0,0,0,0,31,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,31,0,31,31,0,0,31,0,0,31,31,31,0,0,0,0,0,31,0,0,0,0,31,0,31,0],
				[0,0,31,31,31,31,31,0,0,31,0,0,31,0,0,31,0,0,0,0,0,0,0,31,31,31,31,31,31,0,31,0],
				[0,0,31,0,0,0,0,0,0,31,0,0,31,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,31,0,31,0],
				[0,0,31,31,31,31,31,31,31,31,0,0,31,31,31,31,0,0,0,0,0,0,0,0,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,0,0,0,0,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,31,31,31,0,31,31,31,31,31,31,31,31,31,31,0,31,31,31,31,31,0,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,0,0,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,0,0,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 32,
			"height": 32,
			"linkWithCollision": false,
			"visible": 0,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 64,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0],
				[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0],
				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0],
				[0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0],
				[0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0],
				[0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0],
				[0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0],
				[0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0],
				[0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1],
				[0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1],
				[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0],
				[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1],
				[0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1],
				[0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1],
				[0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1],
				[0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1],
				[0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1],
				[0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1],
				[0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1],
				[0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1],
				[0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1],
				[0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1],
				[0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1],
				[0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "walls",
			"width": 32,
			"height": 32,
			"linkWithCollision": true,
			"visible": 1,
			"tilesetName": "media/tiles/level2-tiles-64.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,9,3,3,3,3,3,3,3,3,3,3,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,10,3,3,3,3,3,3,3,3,3,0,3,0,0],
				[0,0,0,0,0,0,3,3,3,3,3,3,3,3,10,0,0,0,3,0,0,0,0,0,0,0,0,3,0,3,0,0],
				[0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,3,0,3,0,0],
				[0,0,0,0,0,0,3,0,3,3,3,3,3,3,11,0,0,0,3,0,0,0,0,0,0,0,0,3,0,3,0,0],
				[0,0,0,3,3,3,3,0,3,0,0,0,0,0,3,0,0,0,12,0,0,0,0,0,0,0,0,3,0,3,0,0],
				[0,0,3,3,0,0,0,0,3,3,3,3,3,3,12,0,0,0,3,0,0,0,0,0,0,0,0,3,0,3,0,0],
				[0,0,3,31,0,3,3,3,3,3,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,3,3,3,0,3,0,0],
				[0,0,3,31,3,3,3,3,3,3,0,3,3,3,13,0,0,0,3,0,0,0,0,0,0,11,0,0,0,3,0,0],
				[0,0,3,31,0,0,0,0,0,0,0,3,0,0,3,0,0,0,14,0,0,0,0,0,0,3,3,3,0,3,3,3],
				[0,0,3,3,3,3,3,3,3,3,3,3,0,0,14,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,14],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,15,3,3,3,3,3,3,0,0,3,0,3,3,3],
				[0,0,0,0,3,3,3,3,3,3,3,3,3,3,15,0,0,0,0,0,0,0,0,0,3,0,0,3,0,3,0,0],
				[0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,16,3,3,3,3,0,3,0,0,3,0,3,3,3],
				[0,0,0,0,3,0,3,3,3,3,3,3,3,3,16,0,0,0,3,0,0,0,3,0,3,0,0,3,0,0,0,3],
				[0,0,0,0,3,0,0,3,0,0,0,0,0,3,3,0,0,0,3,0,0,0,3,0,3,0,0,3,0,3,0,3],
				[0,3,3,3,3,3,0,3,0,0,3,3,0,3,3,0,0,0,3,0,0,0,3,0,3,3,3,3,0,3,0,3],
				[0,3,0,0,0,0,0,3,3,0,3,3,0,3,3,0,3,3,3,0,0,0,3,0,0,0,0,0,0,3,0,3],
				[0,3,0,3,3,3,3,3,3,0,3,3,0,3,3,0,3,0,0,0,0,0,3,3,3,3,3,3,0,3,0,3],
				[0,3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3,0,0,0,0,0,0,3,3,3,3,3,0,3,0,3],
				[0,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0,10,0,0,0,0,0,3,0,3],
				[0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,3,0,3],
				[0,0,0,0,0,0,0,3,0,3,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,3,0,3,0,3],
				[0,0,0,0,0,0,0,3,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,3,0,3],
				[0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,3,0,3],
				[0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,9,10,11,0,0,0,0,3,3,3,3,3,3,3,0,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,12,13,14,0,0,0,0,3,3,3,3,3,3,3,0,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "ceiling",
			"width": 32,
			"height": 32,
			"linkWithCollision": false,
			"visible": 0,
			"tilesetName": "media/tiles/level2-tiles-64.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,31,31,31,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,31,31,31,31,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,31,0,0,0,0,0,31,31,31,31,31,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,31,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,31,31,31,0,0,0],
				[0,0,0,0,31,31,31,31,31,31,31,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,31,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,0,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,31,0,0,0,0,31,0,0,0],
				[0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,31,31,31,0,0,0,0,0,31,0,0,0,0,31,31,31,0],
				[0,0,0,0,0,31,31,0,31,31,31,31,31,0,0,31,31,31,0,0,0,0,0,31,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,31,0,31,31,0,0,31,0,0,31,31,31,0,0,0,0,0,31,0,0,0,0,31,0,31,0],
				[0,0,31,31,31,31,31,0,0,31,0,0,31,0,0,31,0,0,0,0,0,0,0,31,31,31,31,31,31,0,31,0],
				[0,0,31,0,0,0,0,0,0,31,0,0,31,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,31,0,31,0],
				[0,0,31,31,31,31,31,31,31,31,0,0,31,31,31,31,0,0,0,0,0,0,0,0,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,0,0,0,0,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,31,0,31,0],
				[0,0,0,0,0,0,0,0,31,31,31,31,0,31,31,31,31,31,31,31,31,31,31,0,31,31,31,31,31,0,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,0,0,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,0,0,0,0,0,0,0,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "light",
			"width": 32,
			"height": 32,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tiles/lights-64.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,17,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,17,17,17,145,145,145,145,145,145,145,145,145,145,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,17,1,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,17,17,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,0,0,0,0,145,145,145,145,145,145,145,17,33,17,1,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,1,17,17,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,33,17,1,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,0,145,145,145,145,0,0,0,0,0,0,0,1,17,17,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,145,145,0,0,0,0,0,145,145,145,145,17,33,17,1,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,145,0,0,0,0,0,0,145,0,0,0,0,1,17,33,0,0,0,0,0,0,0,0,1,33,145,0,0,0],
				[0,0,0,145,145,145,145,145,145,145,145,0,0,0,0,33,17,1,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,17,33,0,0,0,0,0,0,0,0,0,0,145,33,1,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,17,1,0,0,0,0,0,0,0,0,0,0,145,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,17,33,17,145,145,145,145,145,0,0,0,0,145,0,0,0],
				[0,0,0,0,0,145,145,145,145,145,145,145,145,145,17,33,17,1,0,0,0,0,0,145,0,0,0,0,145,0,0,0],
				[0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,1,17,33,0,0,0,0,0,145,0,0,0,0,145,145,145,0],
				[0,0,0,0,0,145,145,0,145,145,145,145,145,0,0,65,65,65,0,0,0,0,0,145,0,0,0,0,145,0,145,0],
				[0,0,0,0,0,0,145,0,145,145,0,0,145,0,0,97,97,97,0,0,0,0,0,145,0,0,0,0,145,0,145,0],
				[0,0,145,145,145,145,145,0,0,145,0,0,145,0,0,145,0,0,0,0,0,0,0,145,145,145,145,145,145,0,145,0],
				[0,0,145,0,0,0,0,0,0,145,0,0,145,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,145,0,145,0],
				[0,0,145,145,145,145,145,145,145,145,0,0,145,145,145,145,0,0,0,0,0,0,0,0,0,0,0,0,145,0,145,0],
				[0,0,0,0,145,145,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,33,145,145,145,0,145,0],
				[0,0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,145,0,145,0],
				[0,0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,145,0,145,0],
				[0,0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,145,0,145,0],
				[0,0,0,0,0,0,0,0,145,145,145,145,0,0,0,0,0,0,0,0,0,0,0,0,145,145,145,145,145,0,145,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,145,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,145,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,145,145,145,145,145,145,145,145,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelBase2Resources=[new ig.Image('media/tiles/level2-tiles-64.png'), new ig.Image('media/tiles/level2-tiles-64.png'), new ig.Image('media/tiles/level2-tiles-64.png'), new ig.Image('media/tiles/lights-64.png')];
});