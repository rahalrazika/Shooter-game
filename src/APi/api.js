const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameId = '7iGivRjBUcI1ifQNWxsz';

async function gameScores() {
  return fetch(`${baseUrl}/games/${gameId}/scores`, {
    method: 'Get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then((data) => console.log(data));
}

async function createScore(user, score) {
  return fetch(`${baseUrl}/games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  }).then(response => response.json())
    .then(data => console.log('sucesse', data));
}

export { gameScores, createScore };