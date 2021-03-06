import Phaser from 'phaser';
import Player from '../entities/player';
import fire from '../assets/fire1.png';
import Enemy from '../entities/enemy';
import Fire from '../entities/fire';
import { createScore } from '../APi/api';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  init(data) {
    this.userName = data.user;
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

    this.player.setFixedRotation();
    this.playerFire = new Fire(this, 200, 150);
    this.enemies = this.add.group();

    this.time.addEvent({
      delay: 2000,
      callback() {
        const enemy = new Enemy({
          scene: this,
          x: Phaser.Math.Between(200, 400),
          y: Phaser.Math.Between(200, 400),
          texture: 'enemy',
          frame: 'largeeliteknight_walk_1',
        });
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true,
    });

    this.score = 0;

    this.scoreText = this.add.text(30, -30, 'Score: 0', { fontSize: '17px', fill: '#ffffff' });

    this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {
      if ((bodyA.label === 'fireCollider' && bodyB.label === 'enemyCollider') || (bodyB.label === 'fireCollider' && bodyA.label === 'enemyCollider')) {
        const enemyCollider = bodyA === 'enemyCollider' ? bodyA : bodyB;
        const fire = enemyCollider.gameObject;
        fire.destroy();
        this.score += 20;
        this.scoreText.setText(`Score: ${this.score}`);
      }

      if ((bodyA.label === 'playerSensor' && bodyB.label === 'enemySensor') || (bodyB.label === 'playerSensor' && bodyA.label === 'enemySensor')) {
        this.player.setActive(false);
        this.player.setVisible(false);
        this.gameOver();
      }
    });

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);
    layer1.setCollisionByProperty({ collide: true });
    layer2.setCollisionByProperty({ collide: true });
    this.matter.world.convertTilemapLayer(layer1);

    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.UP,
      down: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,

    });
  }

  update() {
    this.player.update();
    this.cameras.main.startFollow(this.player);

    for (let i = 0; i < this.enemies.getChildren().length; i += 1) {
      const enemy = this.enemies.getChildren()[i];
      enemy.setFixedRotation();
      enemy.body.collideWorldBounds = true;
      enemy.flipX = true;
      enemy.setBounce(1);
      enemy.update();

      if (enemy.x <= 60) {
        enemy.destroy();
      }
    }
    this.playerFire.fires(this.playerFire.x, this.playerFire.y);
    if (this.player.inputKeys.space.isDown) {
      this.player.anims.play('doctor_shoot', true);
      const fire = this.playerFire;
      fire.x = this.player.x;
      fire.y = this.player.y;
    }
  }

  gameOver() {
    createScore(this.userName, this.score);
    this.scene.start('GameOver');
  }
}