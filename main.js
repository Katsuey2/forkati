let userInput = document.getElementById('input')
let text;
let button = document.getElementById('submit')


button.onclick = function() {
   result = userInput.value
  text = document.getElementById('h1').textContent = `HI MY BABY LOVE ${result}!!!`
}


