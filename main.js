peterpansong = "";
song2 = "";

function preload() {
    peterpansong = loadSound('music.mp3');
    song2 = loadSound('music2.mp3');
}

function setup() {
    canvas = createCanvas(500, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 450);
}

function modelLoaded() {
    
}