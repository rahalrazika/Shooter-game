import Phaser from 'phaser';
import Fire from '../entities/fire';

test('Fire is subclass of phaser', () => {
  expect(Fire).toBeSubclassOf(Phaser.GameObjects.Sprite);
});