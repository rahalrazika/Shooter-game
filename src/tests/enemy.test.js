import Phaser from 'phaser';
import Enemy from '../entities/enemy';

test('expect Enemy to be a subclass of phaser', () => {
  expect(Enemy).toBeSubclassOf(Phaser.GameObjects.Sprite);
});