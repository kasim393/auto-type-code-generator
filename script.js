var p = document.getElementById('text');
var code = document.getElementById("code");
var inputVal = document.getElementById("myText");
var copybtn = document.getElementById("copyBtn");
var code_container = document.querySelector(".code-container");
code_container.style.display = "none";
let index = 0;

function autoType(){
  var text = inputVal.value;
  p.innerHTML = text.slice(0,index);
  index++
}

function getInputValue(){
var speed = document.getElementById("speed").value;
  let interval = speed;
  setInterval(autoType,interval);
}

function reset(){
  location.reload();
}

function generate(){
  code_container.style.display = "block";
  code.innerHTML = ` 
  var result = document.getElementById('text');
  <br>
  let index = 0;  <br><br>
  function autoType(){  <br> 
    var text = "${inputVal.value}";  <br> 
    result.innerHTML = text.slice(0,index);  <br>
    index++;  <br>
  }  <br>
  <br> 
    let interval = ${speed.value};  <br>
    setInterval(autoType,interval);  <br>
  `
}
function copyCode(){
  const textarea = document.createElement("textarea");
  const outputCode = code.innerText;


  textarea.value = outputCode;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  copybtn.innerHTML = "Copied!!";
}

