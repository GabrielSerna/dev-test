function startGame() {
  let counter = 0;

  document.querySelector('button').addEventListener('click', () => {
    ++counter;
  });

  return new Promise( (res, rej) => {
    setTimeout( () => {
      if (counter > 5) { res() }
      else { rej() };
    }, 2000);
  });
}

startGame()
.then( () => alert('You win!'))
.catch( () => alert('You lost!'))