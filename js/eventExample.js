function clicked() {
  window.alert("tıkladınız!");
}

//clicked();

function mouseOver() {
  document.getElementById("demo1").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo1").style.color = "black";
}

document.getElementById("demo1").addEventListener("mouseover", mouseOver);
document.getElementById("demo1").addEventListener("mouseout", mouseOut);


function selectButtonOnChange() {
  let selectedValue = document.getElementById("demo2").value;
  document.getElementById("message").innerHTML = selectedValue;
}




