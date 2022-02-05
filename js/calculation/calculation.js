function calculate() {
  let s1 = parseInt(document.getElementById("sy1").value);
  let s2 = parseInt(document.getElementById("sy2").value);
  let process = document.getElementById("chooseProcess").value;
  if (isNaN(s1)) {
    document.getElementById("validation1").innerHTML = "*Bir sayı girin!";
    return;
  } else {
    document.getElementById("validation1").innerHTML = "";
  }
  if (isNaN(s2)) {
    document.getElementById("validation2").innerHTML = "*Bir sayı girin!";
    return;
  } else {
    document.getElementById("validation2").innerHTML = "";
  }
  if (process === "?") {
    document.getElementById("validation3").innerHTML = "*Bir işlem seçin!";

  } else {
    document.getElementById("validation3").innerHTML = "";
  }
  if (process === "+") {
    document.getElementById('result').innerHTML = s1 + s2;
  }
  if (process === "-") {
    document.getElementById('result').innerHTML = s1 - s2;
  }
  if (process === "*") {
    document.getElementById('result').innerHTML = s1 * s2;
  }
  if (process === "/") {
    document.getElementById('result').innerHTML = s1 / s2;
  }
}

function remove() {
  document.getElementById("sy1").value = null;
  document.getElementById("sy2").value = null;
  document.getElementById("result").innerHTML = null;
  document.getElementById("chooseProcess").value = "?";
  removeAllValidationMessages();
}

function removeAllValidationMessages() {
  document.getElementById("validation1").innerHTML = "";
  document.getElementById("validation2").innerHTML = "";
  document.getElementById("validation3").innerHTML = "";

}

