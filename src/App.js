import './App.css';
import { useState } from 'react';
function App() {
  const [helpingEvent, setHelpingEvent] = useState({});
  const handleBox = (event) => {
    console.group(event.target.id)
    setHelpingEvent(event);
  }
  const [arr, setArr] = useState([[".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."]]);
  const handleButton = (id) => {
    // console.log(arr[0][0]);
    let Arr = arr;
    let coord = helpingEvent.target.id.split(' ');
    let y = Number(coord[0]);
    let x = Number(coord[1]);
    if (id === "one") {
      Arr[y][x] = "1";
      // helpingEvent.target.innerHTML = "1";
    }
    if (id === "two") {
      Arr[y][x] = "2";
      // helpingEvent.target.innerHTML = "2";
    }
    if (id === "three") {
      Arr[y][x] = "3";
      // helpingEvent.target.innerHTML = "3";
    }
    if (id === "four") {
      Arr[y][x] = "4";
      // helpingEvent.target.innerHTML = "4";
    }
    if (id === "five") {
      Arr[y][x] = "5";
      // helpingEvent.target.innerHTML = "5";
    }
    if (id === "six") {
      Arr[y][x] = "6";
      // helpingEvent.target.innerHTML = "6";
    }
    if (id === "seven") {
      Arr[y][x] = "7";
      // helpingEvent.target.innerHTML = "7";
    }
    if (id === "eight") {
      Arr[y][x] = "8";
      // helpingEvent.target.innerHTML = "8";
    }
    if (id === "nine") {
      Arr[y][x] = "9";
      // helpingEvent.target.innerHTML = "9";
    }
    if (id === "cross") {
      Arr[y][x] = ".";
      // helpingEvent.target.innerHTML = "";
    }
    setArr([...Arr]);
    // helpingEvent.target.innerHTML = arr[y][x];
    console.log(arr);
  }
  const validation = (board, x, y, num) => {
    // Checking in row
    for (let i = 0; i < 9; i++) {
      if (board[y][i] === num) {
        return false;
      }
    }
    // Checking in column
    for (let i = 0; i < 9; i++) {
      if (board[i][x] === num) {
        return false;
      }
    }
    // Finding block to check
    const lowerX = Math.floor(x / 3) * 3;
    const higherX = lowerX + 2;
    const lowerY = Math.floor(y / 3) * 3;
    const higherY = lowerY + 2;

    // Checking in block
    for (let i = lowerY; i <= higherY; i++) {
      for (let j = lowerX; j <= higherX; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  }
  const allDone = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === '.') {
          return false;
        }
      }
    }
    return true;
  }
  const solver = (board) => {
    if (allDone(board)) {
      // helpingBoard = board;
      setArr([...board]);
      return true;
    }
    let x, y;
    let found = false;
    for (y = 0; y < 9; y++) {
      for (x = 0; x < 9; x++) {
        if (board[y][x] === '.') {
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    const choices = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i of choices) {
      if (validation(board, x, y, i)) {
        board[y][x] = i;
        setArr([...board])
        if (solver(board)) {
          return true;
        }
        board[y][x] = '.';
        setArr([...board])
      }
    }
    return false;
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to Sudoku Solver</h1>
      </div>
      <div className="numberBox">
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="one">1</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="two">2</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="three">3</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="four">4</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="five">5</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="six">6</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="seven">7</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="eight">8</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="nine">9</div>
        <div className="number" onClick={(e) => { handleButton(e.target.id) }} id="cross">{"<-"}</div>
      </div>
      <div className="container">

        <div className="bigerBox">
          <div className="rowDivisons">
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes box1 " id="0 0" onClick={(e) => { handleBox(e) }} value={arr[0][0]}>{arr[0][0]}</div>
                <div className="boxes" id="0 1" onClick={(e) => { handleBox(e) }}>{arr[0][1]}</div>
                <div className="boxes" id="0 2" onClick={(e) => { handleBox(e) }}>{arr[0][2]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="1 0" onClick={(e) => { handleBox(e) }}>{arr[1][0]}</div>
                <div className="boxes" id="1 1" onClick={(e) => { handleBox(e) }}>{arr[1][1]}</div>
                <div className="boxes" id="1 2" onClick={(e) => { handleBox(e) }}>{arr[1][2]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="2 0" onClick={(e) => { handleBox(e) }}>{arr[2][0]}</div>
                <div className="boxes" id="2 1" onClick={(e) => { handleBox(e) }}>{arr[2][1]}</div>
                <div className="boxes" id="2 2" onClick={(e) => { handleBox(e) }}>{arr[2][2]}</div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes" id="0 3" onClick={(e) => { handleBox(e) }}>{arr[0][3]}</div>
                <div className="boxes" id="0 4" onClick={(e) => { handleBox(e) }}>{arr[0][4]}</div>
                <div className="boxes" id="0 5" onClick={(e) => { handleBox(e) }}>{arr[0][5]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="1 3" onClick={(e) => { handleBox(e) }}>{arr[1][3]}</div>
                <div className="boxes" id="1 4" onClick={(e) => { handleBox(e) }}>{arr[1][4]}</div>
                <div className="boxes" id="1 5" onClick={(e) => { handleBox(e) }}>{arr[1][5]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="2 3" onClick={(e) => { handleBox(e) }}>{arr[2][3]}</div>
                <div className="boxes" id="2 4" onClick={(e) => { handleBox(e) }}>{arr[2][4]}</div>
                <div className="boxes" id="2 5" onClick={(e) => { handleBox(e) }}>{arr[2][5]}</div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes" id="0 6" onClick={(e) => { handleBox(e) }}>{arr[0][6]}</div>
                <div className="boxes" id="0 7" onClick={(e) => { handleBox(e) }}>{arr[0][7]}</div>
                <div className="boxes box9" id="0 8" onClick={(e) => { handleBox(e) }}>{arr[0][8]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="1 6" onClick={(e) => { handleBox(e) }}>{arr[1][6]}</div>
                <div className="boxes" id="1 7" onClick={(e) => { handleBox(e) }}>{arr[1][7]}</div>
                <div className="boxes" id="1 8" onClick={(e) => { handleBox(e) }}>{arr[1][8]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="2 6" onClick={(e) => { handleBox(e) }}>{arr[2][6]}</div>
                <div className="boxes" id="2 7" onClick={(e) => { handleBox(e) }}>{arr[2][7]}</div>
                <div className="boxes" id="2 8" onClick={(e) => { handleBox(e) }}>{arr[2][8]}</div>
              </div>
            </div>
          </div>
          <div className="rowDivisons">
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes" id="3 0" onClick={(e) => { handleBox(e) }}>{arr[3][0]}</div>
                <div className="boxes" id="3 1" onClick={(e) => { handleBox(e) }}>{arr[3][1]}</div>
                <div className="boxes" id="3 2" onClick={(e) => { handleBox(e) }}>{arr[3][2]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="4 0" onClick={(e) => { handleBox(e) }}>{arr[4][0]}</div>
                <div className="boxes" id="4 1" onClick={(e) => { handleBox(e) }}>{arr[4][1]}</div>
                <div className="boxes" id="4 2" onClick={(e) => { handleBox(e) }}>{arr[4][2]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id=" 5 0" onClick={(e) => { handleBox(e) }}>{arr[5][0]}</div>
                <div className="boxes" id=" 5 1" onClick={(e) => { handleBox(e) }}>{arr[5][1]}</div>
                <div className="boxes" id=" 5 2" onClick={(e) => { handleBox(e) }}>{arr[5][2]}</div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes" id="3 3" onClick={(e) => { handleBox(e) }}>{arr[3][3]}</div>
                <div className="boxes" id="3 4" onClick={(e) => { handleBox(e) }}>{arr[3][4]}</div>
                <div className="boxes" id="3 5" onClick={(e) => { handleBox(e) }}>{arr[3][5]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="4 3" onClick={(e) => { handleBox(e) }}>{arr[4][3]}</div>
                <div className="boxes" id="4 4" onClick={(e) => { handleBox(e) }}>{arr[4][4]}</div>
                <div className="boxes" id="4 5" onClick={(e) => { handleBox(e) }}>{arr[4][5]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="5 3" onClick={(e) => { handleBox(e) }}>{arr[5][3]}</div>
                <div className="boxes" id="5 4" onClick={(e) => { handleBox(e) }}>{arr[5][4]}</div>
                <div className="boxes" id="5 5" onClick={(e) => { handleBox(e) }}>{arr[5][5]}</div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes" id="3 6" onClick={(e) => { handleBox(e) }}>{arr[3][6]}</div>
                <div className="boxes" id="3 7" onClick={(e) => { handleBox(e) }}>{arr[3][7]}</div>
                <div className="boxes" id="3 8" onClick={(e) => { handleBox(e) }}>{arr[3][8]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="4 6" onClick={(e) => { handleBox(e) }}>{arr[4][6]}</div>
                <div className="boxes" id="4 7" onClick={(e) => { handleBox(e) }}>{arr[4][7]}</div>
                <div className="boxes" id="4 8" onClick={(e) => { handleBox(e) }}>{arr[4][8]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="5 6" onClick={(e) => { handleBox(e) }}>{arr[5][6]}</div>
                <div className="boxes" id="5 7" onClick={(e) => { handleBox(e) }}>{arr[5][7]}</div>
                <div className="boxes" id="5 8" onClick={(e) => { handleBox(e) }}>{arr[5][8]}</div>
              </div>
            </div>
          </div>
          <div className="rowDivisons">
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes" id="6 0" onClick={(e) => { handleBox(e) }}>{arr[6][0]}</div>
                <div className="boxes" id="6 1" onClick={(e) => { handleBox(e) }}>{arr[6][1]}</div>
                <div className="boxes" id="6 2" onClick={(e) => { handleBox(e) }}>{arr[6][2]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="7 0" onClick={(e) => { handleBox(e) }}>{arr[7][0]}</div>
                <div className="boxes" id="7 1" onClick={(e) => { handleBox(e) }}>{arr[7][1]}</div>
                <div className="boxes" id="7 2" onClick={(e) => { handleBox(e) }}>{arr[7][2]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes box2" id="8 0" onClick={(e) => { handleBox(e) }}>{arr[8][0]}</div>
                <div className="boxes" id="8 1" onClick={(e) => { handleBox(e) }}>{arr[8][1]}</div>
                <div className="boxes" id="8 2" onClick={(e) => { handleBox(e) }}>{arr[8][2]}</div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes" id="6 3" onClick={(e) => { handleBox(e) }}>{arr[6][3]}</div>
                <div className="boxes" id="6 4" onClick={(e) => { handleBox(e) }}>{arr[6][4]}</div>
                <div className="boxes" id="6 5" onClick={(e) => { handleBox(e) }}>{arr[6][5]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="7 3" onClick={(e) => { handleBox(e) }}>{arr[7][3]}</div>
                <div className="boxes" id="7 4" onClick={(e) => { handleBox(e) }}>{arr[7][4]}</div>
                <div className="boxes" id="7 5" onClick={(e) => { handleBox(e) }}>{arr[7][5]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="8 3" onClick={(e) => { handleBox(e) }}>{arr[8][3]}</div>
                <div className="boxes" id="8 4" onClick={(e) => { handleBox(e) }}>{arr[8][4]}</div>
                <div className="boxes" id="8 5" onClick={(e) => { handleBox(e) }}>{arr[8][5]}</div>
              </div>
            </div>
            <div className="smallBox">
              <div className="smallerRowDivison">
                <div className="boxes" id="6 6" onClick={(e) => { handleBox(e) }}>{arr[6][6]}</div>
                <div className="boxes" id="6 7" onClick={(e) => { handleBox(e) }}>{arr[6][7]}</div>
                <div className="boxes" id="6 8" onClick={(e) => { handleBox(e) }}>{arr[6][8]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="7 6" onClick={(e) => { handleBox(e) }}>{arr[7][6]}</div>
                <div className="boxes" id="7 7" onClick={(e) => { handleBox(e) }}>{arr[7][7]}</div>
                <div className="boxes" id="7 8" onClick={(e) => { handleBox(e) }}>{arr[7][8]}</div>
              </div>
              <div className="smallerRowDivison">
                <div className="boxes" id="8 6" onClick={(e) => { handleBox(e) }}>{arr[8][6]}</div>
                <div className="boxes" id="8 7" onClick={(e) => { handleBox(e) }}>{arr[8][7]}</div>
                <div className="boxes box3" id="8 8" onClick={(e) => { handleBox(e) }}>{arr[8][8]}</div>
              </div>
            </div>
          </div>

        </div>
        <button className='starter' onClick={()=>{solver(arr)}}>Start</button>
      </div>
    </div>
  );
}

export default App;
