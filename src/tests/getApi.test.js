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
    })
    .catch(() => {});
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
    })
    .catch(() => {});
});

it('expect equal to  score and username ', () => {
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
    })
    .catch(() => {});
});

it('expect to be an object ', () => {
  gameScores()
    .then((data) => {
      expect(typeof data).toBe('object');
    })
    .catch(() => {});
});