// Seleziona tutti gli elementi con la classe sleepMain
document.querySelectorAll(".sleepMain").forEach(element => {
    element.addEventListener("click", function() {
      document.getElementById("pag1").classList.add("nascondi");     // Nasconde pag1
      document.getElementById("sleep").classList.remove("nascondi"); // Mostra sleep
    });
  });