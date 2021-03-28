import { TestScheduler } from 'jest';
import Phaser from 'phaser';
import Enemy from '../entities/enemy';

test('Enemy is subclass of phaser', () => {
  expect(Enemy).toBeSubclassOf(Phaser.GameObjects.Sprite);
});