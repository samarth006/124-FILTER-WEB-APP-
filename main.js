var noseX = 0;
var noseY = 0;
function preload() {
    noseImage = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video , modeLoded);
    poseNet.on("pose" , gotPoses);
}
function gotPoses(results) {
if(results.length>0) {
 noseX = results[0].pose.nose.x
 noseY = results[0].pose.nose.y
 console.log("noseX = "+noseX+"noseY="+noseY)
 console.log(results[0].pose.leftEye.y);
 console.log(results[0].pose.leftEye.y);
 console.log(results[0].pose.leftHip.x);
 console.log(results[0].pose.leftHip.y)

}
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save("filter.png");
}

function modeLoded() {
    console.log("Modeloded properly");
}

