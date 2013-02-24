/**
 * User: Martin
 * Date: 24-2-13
 * Time: 20:40
 */
function renderCanvas(){
    var drawingDone = false;
    var $canvas = $("#myCanvas");
    var zoomLevel = 0;
    drawingDone = draw($canvas, zoomLevel);

    $canvas.bind('mousewheel', function(event, delta) {
        if (drawingDone) {
            drawingDone = false;
            zoomLevel = zoomLevel + -delta;
            if (zoomLevel < 0) {
                zoomLevel = 0;
            }
            $canvas.clearCanvas();
            drawingDone = draw($canvas, zoomLevel);
        }
    });
}

function draw($canvas, zoomLevel) {
    $canvas.drawArc({
        id: "test",
        fillStyle: "#3333CC",
        x: 100, y: 100,
        radius: 50 + zoomLevel * 5,
        strokeWidth: 2,
        strokeStyle: "#000",
        draggable:true
    });
    return true;
}