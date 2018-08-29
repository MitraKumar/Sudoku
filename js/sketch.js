function main() {
  createBoard();
  startTimmer();

  // submit function
  document.getElementById("submit").addEventListener("click", checkSolved);

  // quit function 
  // document.getElementById("reset").addEventListener("click", reset);
}

// Save the highscore for the current user
document.getElementById("saveUser").addEventListener("click", () => {
  let username = document.getElementById("username").value;
  var obj = {
    user: username,
    time: t.getSeconds()
  };

  // get the current
  let highscore = JSON.parse(localStorage.getItem("highestscore"));

  // check if higscore present or not 
  if (!highscore) {
    localStorage.setItem("highestscore", JSON.stringify(obj));
    alert("You have the highest score");
    return;
  }

  // if highscore is present
  // compare the high score and the current score
  if (highscore.time > obj.time) {
    // save user to the local storage
    localStorage.setItem("highestscore", JSON.stringify(obj));
    alert("You have the highest score");
  } else {
    console.log(obj.time);
    alert("You haven't beat the high score");
  }
});