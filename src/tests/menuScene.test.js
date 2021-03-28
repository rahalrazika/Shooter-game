import Phaser from 'phaser';
import MenuScene from '../scenes/menuScene';

test('expect MenuSceneScene to be  subclass of Phaser.Scene', () => {
  expect(MenuScene).toBeSubclassOf(Phaser.Scene);
});