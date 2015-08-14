// List of keys here:
// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes





$( document ).ready(function() {

  if (window.location.href.indexOf('localhost') > -1){

    console.log('key listener extension starting on localhost');

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





    if (window.location.href.indexOf('http://localhost/web.art.fsu.edu/www/') > -1
        || window.location.href.indexOf('http://localhost/game_cabinet') > -1
        ){

      console.log('game controller starting on ' + window.location.href)

      // insert controller elements
      $('body').append( '<div id="box"></div>' );
      $('body').append( '<div id="status"></div>' );


      // get all anchor tags
      $("a").each(function(){
            console.log(this.href);
        });




      var box = $('#box'),
          w = $('body').width() - box.width(),
          d = {},
          x = 7,
          currentLink = -1;




console.log(box )




    

    function newv(v, a, b) {
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        return n < 0 ? 0 : n > w ? w : n;
    }

    $(window).keydown(function (e) {
        d[e.which] = true;
    });
    $(window).keyup(function (e) {
        d[e.which] = false;

        // on left shift
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){ 
            checkClick(); 
        }
    });

    setInterval(function () {
        box.css({
            left: function (i, v) {
                return newv(v, 37, 39);
            },
            top: function (i, v) {
                return newv(v, 38, 40);
            }
        });

/*
        // check to see if there is a collision
        if ( collision( box, $('#game0') )) {
            currentLink = 0;
        } else if ( collision(box, $('#game1')) ) {
            currentLink = 1;
        } else if ( collision(box, $('#game2')) ) {
            currentLink = 2;
        } else if ( collision(box, $('#game3')) ) {
            currentLink = 3;
        } else if ( collision(box, $('#game4')) ) {
            currentLink = 4;
        } else if ( collision(box, $('#game5')) ) {
            currentLink = 5;
        } else {
            currentLink = -1;
        }
*/        $('#status').html(currentLink);


    }, 20);


    function checkClick(){
        // the links for the buttons
        var links = [
            './games/biza/fakegeekgirlthegame.html',
            'http://vena-cava.herokuapp.com/begin',
            './games/kurish/nicolegame/index.html',
            'http://www.viralgame.org/',
            './games/heineman/scuba-steve/game/index.html',
            './games/atherton/FINAL%20www/index.html'
        ];
        // make sure we are over a button and launch link
        if (currentLink > -1){
            var win = window.open(links[currentLink], '_blank');
            win.focus();
        }
    }
/*

    // test collision
    function collision($div1, $div2) {
        if ($div1 !== undefined && $div2 !== undefined){
            var x1 = $div1.offset().left;
            var y1 = $div1.offset().top;
            var h1 = $div1.outerHeight(true);
            var w1 = $div1.outerWidth(true);
            var b1 = y1 + h1;
            var r1 = x1 + w1;
            var x2 = $div2.offset().left;
            var y2 = $div2.offset().top;
            var h2 = $div2.outerHeight(true);
            var w2 = $div2.outerWidth(true);
            var b2 = y2 + h2;
            var r2 = x2 + w2;

            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
            return true;
        }
    }
    */

  }

}
});