import Phaser from 'phaser';
import IntroScene from '../scenes/introScene';

test('expect IntroSceneScene to be  subclass of Phaser.Scene', () => {
  expect(IntroScene).toBeSubclassOf(Phaser.Scene);
});