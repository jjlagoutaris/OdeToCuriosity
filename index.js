let round = 0;
let answers = ['sponge',];

function clearScreenAndLoadRiddle() {
  document.body.innerHTML = ``;
  loadRiddle();
}

let startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const helpModal = createHelpModal();
  document.body.append(helpModal.newModal);

  helpModal.newModal.showModal();
});

const createHelpModal = () => {

  const newModal = document.createElement('dialog');
  newModal.classList.add('helpModal');
  newModal.setAttribute('id', 'helpModal');

  const helpModalForm = document.createElement('form');
  helpModalForm.classList.add('helpForm');
  helpModalForm.setAttribute('method', 'dialog');

  const help = document.createElement('p');
  help.style = `font-size: 24px`;
  help.innerHTML = `
  <li>Answers are case insensitive, so capitalization is not important.</li>
  <li>All answers should be just one word. Omit articles (i.e. 'a', 'an', 'the').</li>
  <br><hr><br>Example: What has to be broken before you can use it?<br><br><span style='color: green'>Valid:</span> eGG<br><br><span style="color: red">Invalid:</span> an eGG<br><br><hr><br>May the odds be ever in your favor. :)`;

  const continueBtn = document.createElement('button');
  continueBtn.textContent = `CONTINUE`;
  continueBtn.classList.add('continueBtn');
  continueBtn.setAttribute('type', 'button');
  continueBtn.style = `padding: 10px; font-size: 24px; margin: 10px; background-color: greenyellow;`;

  continueBtn.addEventListener('click', (e) => {
    e.preventDefault();

    document.body.removeChild(newModal);

    clearScreenAndLoadRiddle();
  });

  helpModalForm.appendChild(help);
  helpModalForm.appendChild(continueBtn);
  newModal.appendChild(helpModalForm);

  return { newModal, helpModalForm, continueBtn, help };
};

function createSuccessModal() {
  const newModal = document.createElement('dialog');
  newModal.classList.add('successModal');
  newModal.setAttribute('id', 'successModal');

  const successModalForm = document.createElement('form');
  successModalForm.classList.add('successForm');
  successModalForm.setAttribute('method', 'dialog');

  const success = document.createElement('p');
  success.style = `font-size: 24px`;
  success.innerHTML = `Correct!`;

  const continueBtn = document.createElement('button');
  continueBtn.textContent = `CONTINUE`;
  continueBtn.classList.add('continueBtn');
  continueBtn.setAttribute('type', 'button');
  continueBtn.style = `padding: 10px; font-size: 24px; margin: 10px; background-color: greenyellow;`;

  continueBtn.addEventListener('click', (e) => {
    e.preventDefault();

    document.body.removeChild(newModal);

    clearScreenAndLoadRiddle();
  });

  successModalForm.appendChild(help);
  successModalForm.appendChild(continueBtn);
  newModal.appendChild(successModalForm);

  return { newModal, successModalForm, continueBtn, success };
}

function loadRiddle() {
  // dom manipulation
  let container = document.createElement('div');
  container.classList.add('riddleContainer');

  let title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = `QUESTION ${round + 1}`;

  let guess = document.createElement('input');
  guess.classList.add('guess');
  guess.setAttribute('type', 'text');

  let guessBtn = document.createElement('button');
  guessBtn.classList.add('guessBtn');
  guessBtn.textContent = `SUBMIT ANSWER`;
  guessBtn.addEventListener('click', () => {
    if (guess.value === answers[round]) {
      round++;
      clearScreenAndLoadRiddle();
    }
  })

  container.append(title, guess, guessBtn);
  document.body.append(container);
}