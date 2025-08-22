// main.ts
import { renderInfo } from './info.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = renderInfo();
  }
});
