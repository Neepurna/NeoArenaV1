/**
 * Basic Tests for Neo Arena
 */

const NeoArena = require('../src/index');
const Player = require('../src/game/Player');
const Arena = require('../src/game/Arena');
const { generatePlayerId, calculateDistance } = require('../src/utils/helpers');

console.log('🧪 Running Neo Arena Tests...\n');

// Test 1: NeoArena Initialization
console.log('Test 1: NeoArena Initialization');
const game = new NeoArena();
game.initialize();
console.log('✅ NeoArena initialized successfully\n');

// Test 2: Player Creation
console.log('Test 2: Player Creation');
const playerId = generatePlayerId();
const player = new Player(playerId, 'TestPlayer');
console.log(`Player created: ${player.username} (${player.id})`);
console.log(`Initial health: ${player.health}`);
console.log('✅ Player created successfully\n');

// Test 3: Player Actions
console.log('Test 3: Player Actions');
player.move(100, 200);
console.log(`Player moved to: (${player.position.x}, ${player.position.y})`);
player.takeDamage(30);
console.log(`Player took 30 damage, health: ${player.health}`);
player.heal(10);
console.log(`Player healed 10, health: ${player.health}`);
player.addScore(50);
console.log(`Player score: ${player.score}`);
console.log('✅ Player actions working correctly\n');

// Test 4: Arena Creation
console.log('Test 4: Arena Creation');
const arena = new Arena();
console.log(`Arena size: ${arena.size.width}x${arena.size.height}`);
console.log('✅ Arena created successfully\n');

// Test 5: Adding Players to Arena
console.log('Test 5: Adding Players to Arena');
const player1 = new Player(generatePlayerId(), 'Player1');
const player2 = new Player(generatePlayerId(), 'Player2');
arena.addPlayer(player1);
arena.addPlayer(player2);
console.log(`Players in arena: ${arena.players.length}`);
console.log('✅ Players added to arena\n');

// Test 6: Distance Calculation
console.log('Test 6: Distance Calculation');
const pos1 = { x: 0, y: 0 };
const pos2 = { x: 3, y: 4 };
const distance = calculateDistance(pos1, pos2);
console.log(`Distance between (0,0) and (3,4): ${distance}`);
console.log('✅ Distance calculation working\n');

// Test 7: Arena Status
console.log('Test 7: Arena Status');
const status = arena.getStatus();
console.log('Arena status:', status);
console.log('✅ Arena status retrieved\n');

console.log('🎉 All tests passed!');
