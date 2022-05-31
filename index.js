let round = 0;
let answers = ['sponge', 'all', 'towel', 'age', 'darkness', 
'future', 'promise', 'bald', 'hidden', 'technology', 'magic', 'incorrectly'];
let outcomeResult = 'incorrect';

function clearScreenAndLoadRiddle() {
  if(round == 8){
    document.body.innerHTML = `<!-- So you've found me... Well done! 
  
    Welcome to the inside of the internet... kind of :)
  
    You can do all kinds of stuff back here.
  
    For example, you can make websites for riddles :P
  
    Anyway, let me not get distracted. Your answer is, uhhh - HIDDEN - in plain sight :)
  -->`;
    loadRiddle();
  } else if (round == 9) {
    document.body.innerHTML = `  <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <!-- 
    *BURIED TREASURE*
    
    Oh no, now everything's so... white. If only we could change the background-color to something a little darker, like, I don't know, say, black? Or brown? Or any color you can think of but white! :D

    Open my container of riddles if you dare (sometimes the buried treasure is found beneath the buried treasure). Inside you'll find some things that are... out of style and desperately in need of some color!
  -->
    `
    loadRiddle();
    console.log(document.body.children[100].children[0]);
    document.body.style = `background-image: none`;
    document.body.children[100].children[0].textContent = `TECHNOLOGY can be wonderful :)`
    document.body.children[100].children[0].style.backgroundColor = 'white';
    document.body.children[100].children[0].style.color = 'FIX ME';
    document.body.children[100].children[1].style.border = `2px solid white`;
    document.body.children[100].children[1].style.color = `FIX ME`;
    document.body.children[100].children[2].style.border = `2px solid white`;
    document.body.children[100].children[2].style.color = `FIX ME`;
    document.body.children[100].children[2].style.backgroundColor = `white`;
  } else if (round == 10) {
    document.body.innerHTML = `<p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  
    <!-- *BURIED TREASURE #2*
       
    Drat. What happened now? It's awfully dark in here, isn't it? Why don't we try turning the lights back on? Try boosting the opacity up a notch to see things for what they are.

    -->`
    loadRiddle();
    document.body.style = `background-image: none; background-color: black`;
    document.body.children[100].children[0].innerHTML = `but so is <span style='opacity: 0;'>MAGIC</span>`;
    document.body.children[100].children[0].style.backgroundColor = 'white';
    document.body.children[100].children[0].style.color = 'black';
    document.body.children[100].children[1].style.border = `2px solid transparent`;
    document.body.children[100].children[1].style.color = `black`;
    document.body.children[100].children[2].style.border = `2px solid transparent`;
    document.body.children[100].children[2].style.color = `black`;
    document.body.children[100].children[2].style.backgroundColor = `greenyellow`;
  } else if (round == 11) {
    document.body.innerHTML = ``;
    loadRiddle();
    document.body.style = `background: url(./imgs/bg.jpg) center / cover no-repeat; background-color: white`;
  } else if (round == 12){
    document.body.innerHTML = `
    <!-- Good job! Thanks for playing! :) - John -->`;
    document.body.style = `background: url(./imgs/end.gif) center / cover no-repeat; background-color: white`;
  } else{
    document.body.innerHTML = ``;
    loadRiddle();
    document.body.style = `background: url(./imgs/bg.jpg) center / cover no-repeat; background-color: white`;
  }
  
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
  <br><hr><br>Example: What is the opposite of a lie?<br><br><span style='color: green'>Valid:</span> truTH<br><br><span style="color: red">Invalid:</span> The Truth<br><br><hr><br>May the odds be ever in your favor. :)`;

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

function createOutcomeModal() {
  const newModal = document.createElement('dialog');
  newModal.classList.add('outcomeModal');
  newModal.setAttribute('id', 'outcomeModal');

  const outcomeModalForm = document.createElement('form');
  outcomeModalForm.classList.add('outcomeForm');
  outcomeModalForm.setAttribute('method', 'dialog');

  const outcome = document.createElement('p');
  outcome.style = `font-size: 24px`;

  if(outcomeResult == 'correct'){
    outcome.innerHTML = `Correct!`;
  } else{
    outcome.innerHTML = `Incorrect - try again :)`;
  }
  
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

  outcomeModalForm.appendChild(outcome);
  outcomeModalForm.appendChild(continueBtn);
  newModal.appendChild(outcomeModalForm);

  return { newModal, outcomeModalForm, continueBtn, outcome };
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
    if (guess.value.toLowerCase() === answers[round]) {
      round++;
      outcomeResult = 'correct';
    } else{
      outcomeResult = 'incorrect';
    }
    const outcomeModal = createOutcomeModal();
    document.body.append(outcomeModal.newModal);
    outcomeModal.newModal.showModal();
  });

  guess.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
      guessBtn.click();
    }
  });

  container.append(title, guess, guessBtn);
  document.body.append(container);
}