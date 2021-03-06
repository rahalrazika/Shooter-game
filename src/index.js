import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin/src';
import MainScene from './scenes/mainScene';
import IntroScene from './scenes/introScene';
import MenuScene from './scenes/menuScene';
import GameOver from './scenes/gameOverScene';
import LeaderBoard from './scenes/leaderBoard';
import PlayerName from './scenes/playerName';

import './APi/api';

const config = {
  width: 640,
  height: 350,
  backgroundColor: 0x999999,
  type: Phaser.AUTO,
  parent: 'shooter-game',
  dom: {
    createContainer: true,
  },
  scene: [PlayerName, IntroScene, MenuScene, LeaderBoard, MainScene, GameOver],
  scale: {
    zoom: 2,
  },
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 0 },
      debug: false,
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
