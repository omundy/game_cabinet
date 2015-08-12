// List of keys here:
// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes


console.log("key listener extension starting...")

 
// add event listener
window.addEventListener("keyup", keyListener, false);

// keyboard keyup listener callback function
function keyListener(e) {
 
  if (e.keyCode) {
    console.log("key pressed: "+ e.keyCode)

    // black button 1
    if (e.keyCode == 49) {
      console.log('1')
      // go to home
      window.location.href = 'http://localhost/';
    }
    // black button 2
    else if (e.keyCode == 50) {
      console.log('2')
      // reset current game by reloading the page
      location.reload();
    }
  }
}