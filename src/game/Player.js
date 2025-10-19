/**
 * Player Class
 * Represents a player in Neo Arena
 */

class Player {
  constructor(id, username) {
    this.id = id;
    this.username = username;
    this.health = 100;
    this.position = { x: 0, y: 0 };
    this.score = 0;
    this.isAlive = true;
    this.stableCoinsEarned = 0;
  }

  move(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.health = 0;
      this.isAlive = false;
    }
  }

  heal(amount) {
    this.health = Math.min(100, this.health + amount);
  }

  addScore(points) {
    this.score += points;
  }

  earnStableCoins(amount) {
    this.stableCoinsEarned += amount;
  }

  getStatus() {
    return {
      id: this.id,
      username: this.username,
      health: this.health,
      position: this.position,
      score: this.score,
      isAlive: this.isAlive,
      stableCoinsEarned: this.stableCoinsEarned
    };
  }
}

module.exports = Player;
