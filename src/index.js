import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/style.scss';

import { updateLeaderboard, addListeners } from './utils';

function component() {
  const element = document.createElement('div');
  element.className =
    'container-fluid my-3 d-flex align-items-center flex-column';

  element.innerHTML = `
    <h1 class="text-center text-info h3">Welcome to the Microverse leaderbord game!</h1>
    <p>Current leaderboard:</p>
    <ul id="leaderboard">
    </ul>

    <button class="btn btn-info" id="refresh">Refresh list</button>

    <form action="#" id="form" class="my-3 p-3 shadow text-center">
      <div class="form-group">
        <label for="user">User</label>
        <input type="text" name="user" id="user" class="form-control d-inline my-2" required minlength="2" maxlength="30">
      </div>
      <div class="form-group">
        <label for="score">Score (1-100)</label>
        <input type="number" name="score" id="score" min="1" max="100" required class="form-control d-inline my-2">
      </div>

      <button type="submit" class="btn btn-success">Submit score</button>
    </form>

  `;

  return element;
}

document.body.appendChild(component());

addListeners();
updateLeaderboard();
