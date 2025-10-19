/**
 * Arena Class
 * Manages the game arena and battle royale mechanics
 */

const config = require('../config/gameConfig');

class Arena {
  constructor() {
    this.size = config.arenaSize;
    this.players = [];
    this.isActive = false;
    this.timeElapsed = 0;
    this.safeZone = { ...this.size };
  }

  addPlayer(player) {
    if (this.players.length < config.maxPlayers) {
      this.players.push(player);
      return true;
    }
    return false;
  }

  removePlayer(playerId) {
    this.players = this.players.filter(p => p.id !== playerId);
  }

  start() {
    if (this.players.length >= config.minPlayers) {
      this.isActive = true;
      console.log(`🎮 Arena started with ${this.players.length} players`);
      return true;
    }
    console.log(`⚠️  Need at least ${config.minPlayers} players to start`);
    return false;
  }

  update(deltaTime) {
    if (!this.isActive) return;

    this.timeElapsed += deltaTime;

    // Shrink safe zone
    if (config.shrinkingZone.enabled) {
      this.updateSafeZone();
    }

    // Check for winners
    const alivePlayers = this.players.filter(p => p.isAlive);
    if (alivePlayers.length === 1) {
      this.endGame(alivePlayers[0]);
    }
  }

  updateSafeZone() {
    const shrinkFactor = 0.95; // Shrink by 5%
    this.safeZone.width *= shrinkFactor;
    this.safeZone.height *= shrinkFactor;
  }

  endGame(winner) {
    this.isActive = false;
    console.log(`🏆 Winner: ${winner.username}`);
    this.distributeRewards(winner);
  }

  distributeRewards(winner) {
    winner.earnStableCoins(config.stableCoin.firstPlace);
    // Award participation rewards to all players
    this.players.forEach(player => {
      if (player.id !== winner.id) {
        player.earnStableCoins(config.stableCoin.participation);
      }
    });
  }

  getStatus() {
    return {
      isActive: this.isActive,
      playerCount: this.players.length,
      alivePlayers: this.players.filter(p => p.isAlive).length,
      timeElapsed: this.timeElapsed,
      safeZone: this.safeZone
    };
  }
}

module.exports = Arena;
