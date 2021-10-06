import Phaser from 'phaser';
import GameOver from '../scenes/gameOverScene';

test('expect GameOverScene to be  subclass of Phaser.Scene', () => {
  expect(GameOver).toBeSubclassOf(Phaser.Scene);
});