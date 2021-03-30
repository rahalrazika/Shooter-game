import Phaser from 'phaser';
import PlayerName from '../scenes/playerName';

test('expect PlayerNameScene to be  subclass of Phaser.Scene', () => {
  expect(PlayerName).toBeSubclassOf(Phaser.Scene);
});