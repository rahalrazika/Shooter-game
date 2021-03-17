import Phaser from 'phaser';
import Player from '../entities/player';
import fire from '../assets/fire1.png';
import Enemy from '../entities/enemy';
import Fire from '../entities/fire';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.enemies = [];
  }

  preload() {
    Player.preload(this);
    Enemy.preload(this);
    this.load.image('fire', fire);
    this.load.image('tiles', '../src/assets/tileset.png');
    this.load.tilemapTiledJSON('map', '../src/assets/map.json');
  }

  create() {
    this.player = new Player({
      scene: this, x: 100, y: 150, texture: 'doctor', frame: 'idle_01',
    });

  /*   this.playerFires = this.add.group({
      classType: Fire,
      runChildUpdate: true,
    }); */
    this.playerFire = new Fire(this, 300, 200);
    for (let i = 0; i < 3; i += 1) {
      this.enemies.push(new Enemy({
        scene: this,
        x: Phaser.Math.Between(0, 400),
        y: Phaser.Math.Between(0, 400),
        texture: 'enemy',
        frame: 'largeeliteknight_walk_1',
      }));
    }
    this.collisionMap = {
      objectA: this.playerFire,
      // objectA: this.player,
      // objectB: this.enemies[0],
      callback: eventData => {
        if (eventData.bodyA.label === 'fireCollider' && eventData.bodyB.label === 'enemyCollider') {
          console.log(eventData);
        }
      },
    };

    this.enemies.forEach((enemy, i) => {
      this.collisionMap[`enemy_${i}`] = enemy;
    });
    this.matterCollision.addOnCollideStart(this.collisionMap);

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);
    layer1.setCollisionByProperty({ collide: true });
    layer2.setCollisionByProperty({ collide: true });
    this.matter.world.convertTilemapLayer(layer1);

    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.A,
      down: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.S,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,

    });
  }

  update() {
    this.player.update();
    this.cameras.main.startFollow(this.player);
    this.enemies.forEach(enemy => enemy.update());
    this.playerFire.fires(this.playerFire.x + 10, this.playerFire.y);

    if (this.player.inputKeys.space.isDown) {
      this.player.anims.play('doctor_shoot', true);

      // const fire = this.playerFires.get();
      const fire = this.playerFire;
      fire.x = this.player.x;
      fire.y = this.player.y;
      // this.collisionMap.fire = fire;

      // if (fire) {
      //  }
    }
  }
}