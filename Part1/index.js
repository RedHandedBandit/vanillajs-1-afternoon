const playTracker = [];

function play(id) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(id);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    playTracker[id] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    playTracker[id] = '0';
  }
  console.log(playTracker);

  const topLeft = playTracker[0];
  const topCenter = playTracker[1];
  const topRight = playTracker[2];
  const middleLeft = playTracker[3];
  const middleCenter = playTracker[4];
  const middleRight = playTracker[5];
  const bottomLeft = playTracker[6];
  const bottomCenter = playTracker[7];
  const bottomRight = playTracker[8];

  
  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`Winner Winner Chicken Dinner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`Winner Winner Chicken Dinner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`Winner Winner Chicken Dinner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`Winner Winner Chicken Dinner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`Winner Winner Chicken Dinner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`Winner Winner Chicken Dinner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`Winner Winner Chicken Dinner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`Winner Winner Chicken Dinner`);
    return;
  }


  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (playTracker[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cats game");
  }
}

