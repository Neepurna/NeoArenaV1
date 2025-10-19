/**
 * NeoArenaV1 - Main Entry Point
 * Hyper Casual Battle Royale for Mobile
 */

const config = require('./config/gameConfig');

class NeoArena {
  constructor() {
    this.config = config;
    this.isInitialized = false;
  }

  initialize() {
    console.log('🎮 Initializing Neo Arena...');
    console.log(`📱 Game: ${this.config.gameName}`);
    console.log(`🎯 Version: ${this.config.version}`);
    console.log(`👥 Max Players: ${this.config.maxPlayers}`);
    this.isInitialized = true;
    console.log('✅ Neo Arena initialized successfully!');
  }

  start() {
    if (!this.isInitialized) {
      this.initialize();
    }
    console.log('🚀 Neo Arena is ready to start!');
    console.log('💰 Players compete for Stable Coin rewards');
  }
}

// Run if this is the main module
if (require.main === module) {
  const arena = new NeoArena();
  arena.start();
}

module.exports = NeoArena;
