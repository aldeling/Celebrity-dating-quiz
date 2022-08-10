// User Interface Logic

function hideResultsAndError() {
  document.getElementById("Chris Evans").setAttribute("class", "hidden");
  document.getElementById("Lily James").setAttribute("class", "hidden");
  document.getElementById("Hank Green").setAttribute("class", "hidden");
  document.getElementById("Sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  let form = document.querySelector("form#userInfo"); 
  form.onsubmit = function(event) {
    // in this section we get the value for each form input
    const age = parseInt(document.querySelector("input#ageInput").setAttribute("class", "hidden"));
    const height = parseInt(document.querySelector("input#heightInput").setAttribute("class", "hidden"));
    //const pet = document.querySelector("input#petInput").setAttribute("class", "hidden");
/*
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    const nounInput = document.getElementById("nounInput").value;
*/ 
  

    if (age && height) {
      if (age >= 25 && height >= 64 ) {
        document.getElementById("Chris Evans").removeAttribute("class"); 
        document.getElementById("Lily James").removeAttribute("class");
        document.getElementById("Hank Green").removeAttribute("class");
      } else if (age >= 25 || height >= 48 ) {
        document.getElementById("Lily James").removeAttribute("class");
        document.getElementById("Hank Green").removeAttribute("class");
      } else if (age >= 23) {
        document.getElementById("Hank Green").removeAttribute("class");
      } else {
        document.getElementById("Sorry").removeAttribute("class");
      }

      document.getElementById("quiz").removeAttribute("class"); 

      event.preventDefault(); 
    }
  }; 
};