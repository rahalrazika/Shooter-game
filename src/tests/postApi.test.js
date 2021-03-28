import { createScore } from '../APi/api';

it('expect to save username and score', () => {
  createScore('Raza', 200)
    .then((data) => {
      expect(data.result).toBe('sucesse LeadeBoard updated.');
    });
});

it('expect an error invalid username', () => {
  createScore(200)
    .then((data) => {
      expect(data.result).toBe('you need to provide a valid user for the score.');
    });
});

it('expect an error invalid score', () => {
  createScore('Nes')
    .then((data) => {
      expect(data.result).toBe('you need to provide a valid score for the user.');
    });
});

it('expect to be an object ', () => {
  createScore()
    .then((data) => {
      expect(typeof data).toBe('object');
    });
});