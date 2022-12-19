//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}

let experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      return (whatHappens = "you found a river");
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

//#2 return value when moveCommand("forward");
//undefined because break is declared before assigning the value to the variable.
//#3 return value when moveCommand("back");
//you arrived home
//#4 return value when moveCommand("right");
//you found a river
//#5 return value when moveCommand("left");
//undefined because break is declared before assigning the value to the variable.
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function getEmployeeRole(name) {
  let role;
  switch (name) {
    case "Raghavendra":
      role = "SDET";
      break;
    case "Lokesh":
      role = "AQA";
      break;
    case "Laxmikant":
      role = "AQA";
      break;
    case "Abhilash":
      role = "QA1";
      break;
    case "Venkat":
      role = "QA1";
      break;
    case "Sudam":
      role = "QA1";
      break;
    default:
      role = "Your name is not in our records";
  }
  return role;
};
