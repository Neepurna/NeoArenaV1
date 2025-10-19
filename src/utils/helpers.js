/**
 * Utility Functions
 * Helper functions for Neo Arena
 */

/**
 * Generate a unique player ID
 */
function generatePlayerId() {
  return `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Calculate distance between two points
 */
function calculateDistance(pos1, pos2) {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Generate random position within bounds
 */
function generateRandomPosition(maxWidth, maxHeight) {
  return {
    x: Math.floor(Math.random() * maxWidth),
    y: Math.floor(Math.random() * maxHeight)
  };
}

/**
 * Check if position is within safe zone
 */
function isInSafeZone(position, safeZone) {
  return position.x >= 0 && 
         position.x <= safeZone.width && 
         position.y >= 0 && 
         position.y <= safeZone.height;
}

module.exports = {
  generatePlayerId,
  calculateDistance,
  generateRandomPosition,
  isInSafeZone
};
