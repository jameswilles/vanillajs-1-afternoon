let board = []

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId)

  if(playerSpan.innerText === 'X') {
    board[clickedId] = 'X'
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
  } else {
    board[clickedId] = 'O'
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
  }

  const topLeft = board[0]
  const topMid = board[1]
  const topRight = board[2]
  const midLeft = board[3]
  const midMid =board[4]
  const midRight = board[5]
  const bottomLeft = board[6]
  const bottomMid = board[7]
  const bottomRight = board[8]

  if(topLeft !== undefined && topLeft === topRight && topLeft === topMid) {
    //winner top row
    alert(`${topLeft} is the winner!`)
  } else if (midLeft !== undefined && midLeft === midRight && midLeft === midMid) {
    //winner mid row
    alert(`${midLeft} is the winner!`)
  } else if (bottomLeft !== undefined && bottomLeft === bottomMid && bottomLeft === bottomRight) {
    //winner bottom row
    alert(`${bottomLeft} is the winner!`)
  } else if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft) {
    //winner left column
    alert(`${topLeft} is the winner!`)
  } else if (topMid !== undefined && topMid === midMid && topMid === bottomMid) {
    //winner mid column
    alert(`${topMid} is the winner!`)
  } else if (topRight !== undefined && topRight === midRight && topRight === bottomRight) {
    //winner right column
    alert(`${topRight} is the winner!`)
  } else if (topLeft !== undefined && topLeft === midMid && topLeft === bottomRight) {
    //winner left to right diagonal
    alert(`${topLeft} is the winner!`)
  } else if (topRight !== undefined && topRight === midMid && midMid === bottomLeft) {
    //winner right to left diagonal
    alert(`${topRight} is the winner!`)
  }
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}