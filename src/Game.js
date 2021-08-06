const GAME_ID = 'EtQZjbZctTfC60wlEG9f';

class Game {
  constructor(id) {
    this.id = id;
    this.url = `
      https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/
    `;
  }

  getScores = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(this.url, options);
    return response.json();
  }
