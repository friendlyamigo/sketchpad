$(document).ready( function(){

  // when user clicks on the button
  $('button').click(function(){

    // remove all div's
    $('.box').remove();
    var ans = prompt("How big do you want the grid to be?");

    // to make the divs
    for (var i = 0; i < ans * ans; i++){
      $('div.canvas').append('<div class="box"></div>');
    }

    // to find the size of each div
    var boxSize = Math.floor(464 / ans) + 'px';
    boxSize.toString();
    $('.box').css({
      'width': boxSize,
      'height': boxSize,
    });

    // when hovering over a div

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    $('.box').hover(function(){
      $(this).css({
        'background-color': getRandomColor()
      });
    });
  });
});
