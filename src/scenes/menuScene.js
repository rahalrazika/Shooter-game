import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  preload() {
    this.load.image('logo', '../src/assets/logo.png');
    this.load.image('play-btn', '../src/assets/play-btnO.png');
    this.load.image('high-score', '../src/assets/hscoreB.png');
  }

  create() {
    this.cameras.main.setBackgroundColor(0xffffff);
    this.logo = this.add.image(250, 100, 'logo');
    this.play = this.add.image(300, 200, 'play-btn');
    this.hscore = this.add.image(300, 250, 'high-score');

    this.logo.setScale(0.7);
    this.play.setScale(0.4);
    this.hscore.setScale(0.2);

    this.play.setInteractive().on(
      'pointerdown',
      function startScene() {
        this.scene.start('MainScene');
      },
      this
    );

    this.hscore.setInteractive().on(
      'pointerdown',
      function startScene() {
        this.scene.start('LeaderBoard');
      },
      this
    );
  }
}
