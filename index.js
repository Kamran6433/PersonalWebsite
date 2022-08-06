$(document).on('mousemove', function(e) 
{
    var xPos = e.pageX;
    var yPos = e.pageY;
    $('.circle').css
    ({
        'top': yPos,
        'left': xPos
    });
});