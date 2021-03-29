import Phaser from 'phaser';

export default class PlayerName extends Phaser.Scene {
  constructor() {
    super('PlayerName');
  }

  init(data) {
    this.userName = data.user;
  }

  create() {
    this.cameras.main.setBackgroundColor(0x000000);

    this.text = this.add.text(150, 50, 'Please enter your player name:', { fontSize: '20px', fill: '#FFFFFF' });
    const input = this.add.dom(320, 120, 'input', 'background-color: white; width: 220px; height: 50px; font: 22px Arial');
    this.button = this.add.dom(320, 200, 'button', 'background-color: #89CFF0; width: 120px; height: 50px; font: 22px Arial', 'Submit');

    const submit = document.querySelector('button');

    submit.onclick = () => {
      const userName = document.querySelector('input').value;
      if (userName) {
        this.scene.start('IntroScene', { user: input.node.value });
      }
      return this.add.text(200, 250, ' Player Name field is empty ', { fontSize: '15px', fill: 'red' });
    };
  }
}
