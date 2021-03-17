import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin/src';
import MainScene from './scenes/mainScene';

const config = {
  width: 512,
  height: 512,
  backgroundColor: 0x999999,
  type: Phaser.AUTO,
  parent: 'survival-game',

  render: {
    pixelArt: true,
  },

  dom: {
    createContainer: true,
  },
  scene: [MainScene],
  scale: {
    zoom: 2,
  },
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision',
      },
    ],
  },
};
window.game = new Phaser.Game(config);
