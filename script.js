$(document).ready(init);

function rightClick() {
  var active = $("img.active");     //Prendo immagine attiva
  active.removeClass("active");     //Rimuovo la classe active
  var nextImg = active.next("img"); //Prendo la prossima
    if (active.hasClass("last")) {  //Controllo che l'img attiva non abbia anche la classe .last
      nextImg = $("img.first");     //Se vero, nextimg è la prima (.first)
    }
  nextImg.addClass("active");       //aggiungo la classe active
  updateDots()                      //Richiamo funzione per aggiornare il puntino
}

function leftClick() {
  var active = $("img.active");     //Prendo immagine attiva
  active.removeClass("active");     //Rimuovo la classe active
  var prevImg = active.prev("img"); //Prendo la prossima
    if (active.hasClass("first")) {  //Controllo che l'img attiva non abbia anche la classe .first
      prevImg = $("img.last");     //Se vero, nextimg è l'ultima' (.last)
    }
  prevImg.addClass("active");       //aggiungo la classe active
  updateDots()                      //Richiamo funzione per aggiornare il puntino
}

function updateDots() {
  var dotIndex = $("img.active").index();    //Prendo indice dell'img con .active
  var oldDot = $(".circle > .fas");          //Seleziono puntino pieno vecchio
  oldDot.removeClass("fas").addClass("far"); // lo levo e metto quello vuoto sostituendo la classe

  var dot = $(".circle > .far");             //Selezione tutti i puntini vuoti
  var nextDot = dot.eq(dotIndex);            //seleziono il puntino con indice ricavato a riga 26 da img corrispondente
  nextDot.removeClass("far").addClass("fas");// riempio il puntino

}

function init() {
  var left = $(".left > i");
  var right = $(".right > i");
  left.click(leftClick);
  right.click(rightClick);

  // leftClick();
  // rightClick();
}
  // Dato che non abbiamo usato le funzioni anonime questa volte
  // le funzioni non le lanceremo così ma come a riga 15 e 16.
