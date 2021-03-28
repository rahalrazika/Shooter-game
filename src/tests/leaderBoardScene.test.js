import Phaser from 'phaser';
import LeaderBoard from '../scenes/leaderBoard';

test('expect LeaderBoardScene to be  subclass of Phaser.Scene', () => {
  expect(LeaderBoard).toBeSubclassOf(Phaser.Scene);
});