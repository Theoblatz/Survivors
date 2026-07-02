export function render(gameState) {
  const container = document.getElementById('game-container');
  container.textContent = `Tick: ${gameState.tick}`;
}
