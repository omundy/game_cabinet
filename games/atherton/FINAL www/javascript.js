var downKey = 1;
var prevKey = 1;

var score = 0;
var boxPos = 0;
var alreadyPressed = false;
var minusScore = false;
var keyMissed = false;

var beatTimer = setInterval(function() {beatCheck()}, 1020);

window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    
    if (key == 40) { //down arrow
		prevKey = downKey;
        downKey = 1;
    } else if (key == 39) { //right arrow
		prevKey = downKey;
		downKey = 2;
    } else if (key == 37) { //left arrow
		prevKey = downKey;
		downKey = 3;
	} else if (key == 38) {
		prevKey = downKey;
		downKey = 4;
	}
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    
    /*if (key == 40) { //down arrow
        downKey = false;
        console.log(downKey);
        if (alreadyPressed) {
            minusScore = true;
        }
        keyMissed = false;
    }else {

    }*/
	
	
}
    
function beatCheck() {
	
    console.log(downKey);
	
	if (downKey == prevKey) { //non-transitions
		if (downKey == 1) {
			$('#poiPos').attr('src', 'gifs/down.gif');
		} else if (downKey == 2) {
			$('#poiPos').attr('src', 'gifs/right.gif');
		} else if (downKey == 3) {
			$('#poiPos').attr('src', 'gifs/left.gif');
		} else if (downKey == 4) {
			$('#poiPos').attr('src', 'gifs/up.gif');
		}
		
	} else { //code for transitions
		if (prevKey == 1) {
			if (downKey == 2) {
				$('#poiPos').attr('src', 'gifs/down_to_right.gif');
			} else if (downKey == 3) {
				$('#poiPos').attr('src', 'gifs/down_to_left.gif');
			} else if (downKey == 4) {
				$('#poiPos').attr('src', 'gifs/down_to_up.gif');
			}		
			
		} else if (prevKey == 2) {
			if (downKey == 1) {
				$('#poiPos').attr('src', 'gifs/right_to_down.gif');
			} else if (downKey == 3) {
				$('#poiPos').attr('src', 'gifs/right_to_left.gif'); //MAKE ONE TO THREE
			} else if (downKey == 4) {
				$('#poiPos').attr('src', 'gifs/right_to_up.gif'); //MAKE ONE TO THREE
			}	
			
		} else if (prevKey == 3) {
			if (downKey == 1) {
				$('#poiPos').attr('src', 'gifs/left_to_down.gif');
			} else if (downKey == 2) {
				$('#poiPos').attr('src', 'gifs/left_to_right.gif'); //MAKE ONE TO THREE
			} else if (downKey == 4) {
				$('#poiPos').attr('src', 'gifs/left_to_up.gif'); //MAKE ONE TO THREE
			}	
			
		} else if (prevKey == 4) {
			if (downKey == 1) {
				$('#poiPos').attr('src', 'gifs/up_to_down.gif');
			} else if (downKey == 2) {
				$('#poiPos').attr('src', 'gifs/up_to_right.gif'); //MAKE ONE TO THREE
			} else if (downKey == 3) {
				$('#poiPos').attr('src', 'gifs/up_to_left.gif'); //MAKE ONE TO THREE
			}	
		}
			
		
		prevKey = downKey; //done with transition
	}
	
	
    /*if (boxPos >= 150 && boxPos <= 250) { //if it's time to press
        if (downKey) {
            changeScore(true);
            console.log("addscore");
            alreadyPressed = true;
        } else {
            console.log("Don't addscore");
            console.log(downKey + " in beatcheck");
        }
    } else {
        if (downKey) {
            changeScore(false);
            console.log("addscore");
        } else {
            console.log("Don't addscore");
            console.log(downKey + " in beatcheck");
        }
    }
    
    $('.beatBox').css("margin-left", boxPos += 10);

    if (boxPos > 240) {
        boxPos = 0;
        alreadyPressed = false;
        minusScore=false;
    }*/
    
}

function changeScore(doAdd) {
    if (minusScore == false && doAdd == true && keyMissed == false) {
        if (alreadyPressed == false) {
            score += 10;
        }
        $('#scoreCount').text("Score: " + score);    
        console.log("addScore");
    } else {
        if (keyMissed == false) {
            score -= 10;
        }
        keyMissed = true;
    }
    $('#scoreCount').text("Score: " + score);    
}


