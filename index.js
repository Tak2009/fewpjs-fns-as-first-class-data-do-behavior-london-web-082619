/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let time24 = timeString.split(":")[0];
  if (time24 < 12) {
    return "Good Morning";
  } else if (time24 > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(greet){
  let msg = document.querySelector("#greeting");
  msg.innerText = greet;
}
