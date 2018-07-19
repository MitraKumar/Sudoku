function main() {
  createBoard();
  startTimmer();

  // submit function
  document.getElementById("submit").addEventListener("click", checkSolved);

  // quit function 
  document.getElementById("reset").addEventListener("click", reset);
}

main();


document.getElementById("saveUser").addEventListener("click", () => {
  let username = document.getElementById("username").value;
  var obj = {
    user: username,
    time: 5.01
  };
  console.log(JSON.stringify(obj));
  localStorage.setItem("highestscore", JSON.stringify(obj));
})