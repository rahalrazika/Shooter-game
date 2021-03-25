import Phaser from 'phaser';

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super('IntroScene');
    this.doctorTalk = [
      'Hello ',
      'Welcome to my personal spaceship.',
      'I’m Dr. Kureiji, I know it sounds just like crazy hihi 😁.',
      'Today I need your help to save my spaceship from',
      'the evil creatures made in the lab,I unfortenatly couldn’t ',
      'control them due to an accidental mistake within the ingredients.',
      'Be careful, these creatures can transform only by touching solid ',
      'objects including myself.Let me give you some tips:',
      'Use Q to go Left.',
      'Use D to go Right.',
      'Use S to go Up.',
      'Use W to go DOWN.',
      'Use space to Shoot',

      "Let's have some fun 🤪",
    ];
  }

  preload() {
    this.load.image('start-btn', '../src/assets/start-btn.png');
    this.load.image('background', '../src/assets/bg.png');
  }

  create() {
    this.cameras.main.setBackgroundColor(0xffffff);
    this.start = this.add.image(420, 270, 'start-btn');
    this.background = this.add.image(1, 0, 'background');
    this.background.setScale(0.2);
    this.background.setOrigin(0);
    this.start.setScale(0.1);
    this.text = this.add.text(300, 70, this.doctorTalk, {
      fill: '#000000',
      fontSize: '25',
    });
    this.start.setInteractive().on(
      'pointerdown',
      function startScene() {
        this.scene.start('MenuScene');
      },
      this
    );
  }
}
