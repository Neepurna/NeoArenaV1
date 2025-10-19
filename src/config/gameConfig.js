/**
 * Game Configuration
 * Core settings for Neo Arena
 */

module.exports = {
  // Game Identity
  gameName: 'Neo Arena V1',
  version: '1.0.0',
  
  // Game Settings
  maxPlayers: 100,
  minPlayers: 10,
  matchDuration: 300, // seconds (5 minutes)
  
  // Arena Settings
  arenaSize: {
    width: 1000,
    height: 1000
  },
  
  // Rewards
  stableCoin: {
    firstPlace: 100,
    secondPlace: 50,
    thirdPlace: 25,
    participation: 5
  },
  
  // Game Mechanics
  shrinkingZone: {
    enabled: true,
    shrinkInterval: 30, // seconds
    damagePerSecond: 10
  }
};
