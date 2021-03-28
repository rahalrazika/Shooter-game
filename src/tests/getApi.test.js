import { gameScores } from '../APi/api';

it('expect equal to  username', () => {
  gameScores()
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            user: 'Maya',
          }),
        ]),
      );
    });
});

it('expect equal to  score', () => {
  gameScores()
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            score: '200',
          }),
        ]),
      );
    });
});

it('expect equal to  score and user name ', () => {
  gameScores()
    .then((data) => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            user: 'Nes',
            score: '200',
          }),
        ]),
      );
    });
});
it('expect to be an object ', () => {
  gameScores()
    .then((data) => {
      expect(typeof data).toBe('object');
    });
});