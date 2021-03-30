import Phaser from 'phaser';
import Fire from '../entities/fire';

test('expect Fire to be a subclass of phaser', () => {
  expect(Fire).toBeSubclassOf(Phaser.GameObjects.Sprite);
});