import Phaser from 'phaser';
import Player from '../entities/player';

test('expect player to be a subclass of phaser', () => {
  expect(Player).toBeSubclassOf(Phaser.GameObjects.Sprite);
});