// Javascript for TP5


window.onload = function() {

  document.querySelector("#heroBanner h1").classList.add("tp");

  document.querySelector("#heroBanner h1").onclick = function() {
    this.classList.toggle('black');

  }

  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }

   document.querySelector("#recipeColumns #equipment").onclick = function() {
    this.classList.toggle("tpShow");
  }

    document.querySelector("#recipeColumns #directions").onclick = function() {
    this.classList.toggle("tpShow");
  }

document.querySelector("#recipeColumns #equipment ul").innerHTML += "<li>A love for sweet potato</li>";


} //end window.onload