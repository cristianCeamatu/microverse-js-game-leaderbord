const updateLeaderboard = () => {
  fetch(`${process.env.LEADERBORD_SCORES_URI}`)
    .then((data) => data.json())
    .then((data) => {
      document.querySelector('#leaderboard').innerHTML = '';
      data.result.forEach(({ user, score }) => {
        const scoreNode = document.createElement('li');
        scoreNode.innerHTML = `
        <span class="text-capitalize">${user}</span> has the score ${score}
      `;

        document.querySelector('#leaderboard').appendChild(scoreNode);
      });
    })
    .catch((error) => console.log(error));
};

const addScore = (data) => {
  fetch(
    `https://cors-anywhere.herokuapp.com/${process.env.LEADERBORD_SCORES_URI}`,
    {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
    .then((data) => data.json())
    .then((data) => {
      const message = document.createElement('p');
      message.className = 'text-info d-block w-100 text-center my-2';
      message.innerText = data.result;
      document.querySelector('#form').appendChild(message);

      updateLeaderboard();
    })
    .catch((error) => console.log(error));
};

const refreshButtonListener = () => {
  document
    .querySelector('#refresh')
    .addEventListener('click', updateLeaderboard);
};

const submitScoreForm = () => {
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    const [user, score] = [
      e.target.elements.user.value,
      e.target.elements.score.value,
    ];
    addScore({ user, score: +score });
  });
};

const addListeners = () => {
  refreshButtonListener();
  submitScoreForm();
};

export { updateLeaderboard, addScore, addListeners };
