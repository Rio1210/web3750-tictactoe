/*Tic Tac toe game
xuanchel
 project2*/
//restart button reload the game
//click button to set X on the board, player always be "X"
//alert meg if win
//rootNode needs to be accessible from everything
//but no guarantee that the DOM is ready
//to do an ID lookup right now, so assign it in init
let rootNode;

let aiBtn;
//our array of button dom elements
let buttonNodes = [
  [], //row 0
  [], //row 1
  [] //row 2
];


let oncick = function () {
  let flag = false;
  this.innerHTML = "X";
  this.owned = "X";
  this.disabled = true;
  //check win and tie if the game end,
  //delay 3sec and reloat the game
  //after player click button, delay 0.2 sec ,then put O on the board
  flag = checkwinx(buttonNodes);
  if (flag) {
	  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        buttonNodes[i][j].disabled = true;
      }
    }
    setTimeout(function () {
      alert("player win!");
    }, 50);
  }
  if (!flag) {
    if (fca() === true) {
		for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        buttonNodes[i][j].disabled = true;
      }
    }
      setTimeout(function () {
        alert("AI win!");
      }, 50);
      flag = true;
    }
  }
  if (!flag) {
    tie(buttonNodes);
  }
};

//this gets called by the 'load' event listener
//set board and restart button
let init = function () {
  console.log("init");
  rootNode = document.getElementById("app");
  let re_btn = document.createElement("button");
  re_btn.innerHTML = "restart  ";
  re_btn.onclick = function () {
    window.location.reload();
  };
  rootNode.appendChild(re_btn);

  for (let i = 0; i < 3; i++) {
    let rowDivNode = document.createElement("div");
    for (let j = 0; j < 3; j++) {
      let btn = (buttonNodes[i][j] = document.createElement("button"));
      btn.innerHTML = "-";
      btn.row = i;
      btn.col = j;
      btn.owned = false;
      btn.onclick = oncick;
      rowDivNode.appendChild(btn);
    }
    rootNode.appendChild(rowDivNode);
  }
};
  //check free board space put O on the board
  function fca() {
    var freebtn = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!buttonNodes[i][j].disabled) {
          freebtn.push(buttonNodes[i][j]);
          buttonNodes[i][j].row = i;
          buttonNodes[i][j].col = j;
          buttonNodes[i][j].owned = false;
        }
      }
    }
    if (freebtn.length === 0) return;
    var r_num = Math.floor(Math.random() * (freebtn.length - 1));
    freebtn[r_num].innerHTML = "O";
    freebtn[r_num].owned = "O";
    freebtn[r_num].disabled = true;
    return checkwino(buttonNodes);
  }


//check the game tie or not
function tie(buttonNodes) {
  var count = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (buttonNodes[i][j].innerHTML === "-") {
        count++;
      }
    }
  }
  if (count === 0) {
	  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        buttonNodes[i][j].disabled = true;
      }
    }
    setTimeout(function () {
      alert("game tie!");
    }, 50);
  }
}
//check player win nor not (hon ver and diag)
function checkwinx(buttonNodes) {
  let flag = false;
  if (
    (buttonNodes[0][0].innerHTML === "X" &&
      buttonNodes[0][1].innerHTML === "X" &&
      buttonNodes[0][2].innerHTML === "X") ||
    (buttonNodes[1][0].innerHTML === "X" &&
      buttonNodes[1][1].innerHTML === "X" &&
      buttonNodes[1][2].innerHTML === "X") ||
    (buttonNodes[2][0].innerHTML === "X" &&
      buttonNodes[2][1].innerHTML === "X" &&
      buttonNodes[2][2].innerHTML === "X")
  ) {
    console.log("player win!");
    flag = true;
  } else if (
    (buttonNodes[0][0].innerHTML === "X" &&
      buttonNodes[1][0].innerHTML === "X" &&
      buttonNodes[2][0].innerHTML === "X") ||
    (buttonNodes[0][1].innerHTML === "X" &&
      buttonNodes[1][1].innerHTML === "X" &&
      buttonNodes[2][1].innerHTML === "X") ||
    (buttonNodes[0][2].innerHTML === "X" &&
      buttonNodes[1][2].innerHTML === "X" &&
      buttonNodes[2][2].innerHTML === "X")
  ) {
    console.log("player win!");
    flag = true;
  } else if (
    (buttonNodes[0][0].innerHTML === "X" &&
      buttonNodes[1][1].innerHTML === "X" &&
      buttonNodes[2][2].innerHTML === "X") ||
    (buttonNodes[0][2].innerHTML === "X" &&
      buttonNodes[1][1].innerHTML === "X" &&
      buttonNodes[2][0].innerHTML === "X")
  ) {
    console.log("player win!");
    flag = true;
  }


  return flag;
}
//check AI win or not (hon, ,ver, diag)
function checkwino(buttonNodes) {
  var flag = false;
  console.log("in check O: ");
  if (
    (buttonNodes[0][0].innerHTML === "O" &&
      buttonNodes[0][1].innerHTML === "O" &&
      buttonNodes[0][2].innerHTML === "O") ||
    (buttonNodes[1][0].innerHTML === "O" &&
      buttonNodes[1][1].innerHTML === "O" &&
      buttonNodes[1][2].innerHTML === "O") ||
    (buttonNodes[2][0].innerHTML === "O" &&
      buttonNodes[2][1].innerHTML === "O" &&
      buttonNodes[2][2].innerHTML === "O")
  ) {
    console.log("ai win!");
    flag = true;
    console.log(flag);
  } else if (
    (buttonNodes[0][0].innerHTML === "O" &&
      buttonNodes[1][0].innerHTML === "O" &&
      buttonNodes[2][0].innerHTML === "O") ||
    (buttonNodes[0][1].innerHTML === "O" &&
      buttonNodes[1][1].innerHTML === "O" &&
      buttonNodes[2][1].innerHTML === "O") ||
    (buttonNodes[0][2].innerHTML === "O" &&
      buttonNodes[1][2].innerHTML === "O" &&
      buttonNodes[2][2].innerHTML === "O")
  ) {
    console.log("ai win!");
    flag = true;
    console.log(flag);
  } else if (
    (buttonNodes[0][0].innerHTML === "O" &&
      buttonNodes[1][1].innerHTML === "O" &&
      buttonNodes[2][2].innerHTML === "O") ||
    (buttonNodes[0][2].innerHTML === "O" &&
      buttonNodes[1][1].innerHTML === "O" &&
      buttonNodes[2][0].innerHTML === "O")
  ) {
    console.log("ai win!");
    flag = true;
  }
  return flag;
}


//called once page is laded,
//DOM is ready and has all it's nodes loaded
//console.log("adding init");
window.addEventListener("load", init);
init();
