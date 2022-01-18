function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 640, 480);
    //circles
    fill(255, 8, 0)
    circle(600, 440, 80);
    circle(40, 40, 80);
    circle(600, 40, 80);
    circle(40, 440, 80);
    //rectangle
    fill(173, 235, 91)
    rect(90, 40, 460,20);
    rect(90, 420, 460,20);
    rect(40, 90, 20,300);
    rect(580, 90, 20,300);

}

function take_snapshot() {
    save('student_name.png');
}

