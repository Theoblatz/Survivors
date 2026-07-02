import { render } from './core/render.js';

const gameState = {
  tick: 0,
  entities: []
};

function loop() {
  gameState.tick++;
  render(gameState);
  requestAnimationFrame(loop);
}

loop();
