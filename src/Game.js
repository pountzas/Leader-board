const GAME_ID = 'EtQZjbZctTfC60wlEG9f';

class Game {
  constructor(id) {
    this.id = id;
    this.url = `
      https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/
    `;
  }
