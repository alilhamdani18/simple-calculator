// Süleymalı Fuad
// Iphone Calculator


function input(angka) {
  result = document.getElementById("result").innerHTML;
  result = result + angka;
  document.getElementById("result").innerHTML = result;

}

function min() {
  result = document.getElementById("result").innerHTML;
  result = "-" + result;
  document.getElementById("result").innerHTML = result;
}

function persen() {
  result = document.getElementById("result").innerHTML;
  result = result * 1 / 100;
  document.getElementById("result").innerHTML = result;
}

function titik() {
  result = document.getElementById("result").innerHTML
  result = result + "."
  document.getElementById("result").innerHTML = result;
}

function resetCalc() {
  reset = document.getElementById("result").innerHTML
  reset = "";
  document.getElementById("result").innerHTML = reset;
}

function kali() {
  result = document.getElementById("result").innerHTML
  result = result + "*"
  document.getElementById("result").innerHTML = result;
}

function bagi() {
  result = document.getElementById("result").innerHTML
  result = result + "/"
  document.getElementById("result").innerHTML = result;
}
function kurang() {
  result = document.getElementById("result").innerHTML
  result = result + "-"
  document.getElementById("result").innerHTML = result;

}
function plus() {
  result = document.getElementById("result").innerHTML
  result = result + "+"
  document.getElementById("result").innerHTML = result;

}



function cekAngka() {
  if (isNaN(eval(jumlah)) !== false) {
      alert("Anda belum memasukkan angka")
  }
}

function jumlahkan() {
  jumlah = document.getElementById("result").innerHTML
  cekAngka();
  document.getElementById("result").innerHTML = eval(jumlah)

}