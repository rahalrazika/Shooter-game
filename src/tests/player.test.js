import Phaser from 'phaser';
import Player from '../entities/player';

test('Player is subclass of phaser', () => {
  expect(Player).toBeSubclassOf(Phaser.GameObjects.Sprite);
});