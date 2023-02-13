let topla = document.querySelector("#topla");
topla.onclick = function () {
  let x = document.querySelector('#x').value;
  let y = document.querySelector('#y').value;
  let sonuc = Number(x) + Number(y);
  document.querySelector("#toplam_x").textContent = x;
  document.querySelector("#toplam_operator").classList = "fa-solid fa-plus";
  document.querySelector("#toplam_y").textContent = y;
  document.querySelector("#toplam_esit").classList = "fa-solid fa-equals";
  document.querySelector("#toplam_sonuc").textContent = sonuc;
}


let cikar = document.querySelector("#cikar");
cikar.onclick = function () {
  let x = document.querySelector('#x').value;
  let y = document.querySelector('#y').value;
  let sonuc = Number(x) - Number(y);
  document.querySelector("#cikar_x").textContent = x;
  document.querySelector("#cikar_operator").classList = "fa-solid fa-minus";
  document.querySelector("#cikar_y").textContent = y;
  document.querySelector("#cikar_esit").classList = "fa-solid fa-equals";
  document.querySelector("#cikar_sonuc").textContent = sonuc;
}


let carp = document.querySelector("#carp");
carp.onclick = function () {
  let x = document.querySelector('#x').value;
  let y = document.querySelector('#y').value;
  let sonuc = Number(x) * Number(y);
  document.querySelector("#carp_x").textContent = x;
  document.querySelector("#carp_operator").classList = "fa-solid fa-x";
  document.querySelector("#carp_y").textContent = y;
  document.querySelector("#carp_esit").classList = "fa-solid fa-equals";
  document.querySelector("#carp_sonuc").textContent = sonuc;
}


let bol = document.querySelector("#bol");
bol.onclick = function () {
  let x = document.querySelector('#x').value;
  let y = document.querySelector('#y').value;
  let sonuc = Number(x) / Number(y);
  document.querySelector("#bol_x").textContent = x;
  document.querySelector("#bol_operator").classList = "fa-solid fa-divide";
  document.querySelector("#bol_y").textContent = y;
  document.querySelector("#bol_esit").classList = "fa-solid fa-equals";
  document.querySelector("#bol_sonuc").textContent = sonuc;
}


let mod = document.querySelector("#mod");
mod.onclick = function () {
  let x = document.querySelector('#x').value;
  let y = document.querySelector('#y').value;
  let sonuc = Number(x) % Number(y);
  document.querySelector("#mod_x").textContent = x;
  document.querySelector("#mod_operator").classList = "fa-solid fa-percent";
  document.querySelector("#mod_y").textContent = y;
  document.querySelector("#mod_esit").classList = "fa-solid fa-equals";
  document.querySelector("#mod_sonuc").textContent = sonuc;
}