// Javascript for TP6



function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML += this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}




window.onload = function() {
  
   loadFileInto("ingredients.html", "#ingredients ul");
   loadFileInto("equipment.html", "#equipment ul");
  loadFileInto("directions.html", "#directions ol");
  
  

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

setTimeout(function() {
document.querySelector("#recipeColumns #equipment ul").innerHTML += "<li>A love for sweet potato</li>";
}, 100); 


  

} //end window.onload