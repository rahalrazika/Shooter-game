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

    this.playerFires = this.physics.add.group({
      defaultKey: 'fire',
      maxSize: 10,
    });
    this.playerFires.enableBody = true;

    /*     this.enemy = new Enemy({
      scene: this, x: 200, y: 450, texture: 'enemy', frame: 'largeeliteknight_walk_1',
    }); */
    for (let i = 0; i < 3; i += 1) {
      this.enemies.push(new Enemy({
        scene: this, x: 300 + i * 10, y: 450, texture: 'enemy', frame: 'largeeliteknight_walk_1',
      }));
    }

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    // eslint-disable-next-line no-unused-vars
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);
    layer1.setCollisionByProperty({ collide: true });
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
    // this.enemy.update();
    this.cameras.main.startFollow(this.player);
    this.enemies.forEach(enemy => enemy.update());
    this.playerFires.children.each((b) => {
      if (b.active) {
        if (b.y < 0) {
          b.setActive(false);
        }
      }
    });
  }

  shoot() {
    const fire = new Fire(this, this.player.x, this.player.y - 5);
    if (fire) {
      fire.setActive(true);
      fire.setVisible(true);
      fire.body.velocity.y = -200;
    }
  }
}