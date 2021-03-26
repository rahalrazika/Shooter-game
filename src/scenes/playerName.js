import Phaser from 'phaser';
import { createScore } from '../APi/api';

export default class PlayerName extends Phaser.Scene {
  constructor() {
    super('PlayerName');
  }

  preload() {
    this.load.image('namelogo', '../src/assets/namelogo.jpg');
  }

  create() {
    this.cameras.main.setBackgroundColor(0xE8E8E8);
    this.logo = this.add.image(350, 70, 'namelogo');
    this.logo.setScale(0.7);
    this.text = this.add.text(120, 170, 'Please enter your player name:', { fontSize: '20px', fill: '#00000' });
    this.input = this.add.dom(300, 220, 'input', 'background-color: white; width: 220px; height: 50px; font: 22px Arial');
    this.button = this.add.dom(300, 300, 'button', 'background-color: grey; width: 120px; height: 50px; font: 22px Arial', 'Submit');

    const submit = document.querySelector('button');

    submit.onclick = () => {
      const userName = document.querySelector('input').value;
      if (userName) {
        createScore.user = userName;
        this.scene.start('IntroScene');
      }
      return this.add.text(200, 250, ' Player Name field is empty ', { fontSize: '15px', fill: 'red' });
    };
  }
}
