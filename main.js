 noseX= 0;
 noseY= 0;

function preload(){
clown_nose=loadImage('https://i.postimg.cc/MTLYVTwH/580b57fbd9996e24bc43bed5.png');

}

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);


}

function draw(){
image(video,0,0,300,300);
/*fill("red");
stroke("green");
circle(noseX,noseY,20);*/
image(clown_nose,noseX,noseY,30,30);



}

function take_snapshot(){
    save("photo.png");
}

function modelLoaded(){
    console.log("Posenet is Loaded");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results); 
    noseX=results[0].pose.nose.x-10;
    noseY=results[0].pose.nose.y-10;
    console.log("nose X = "+ noseX);
    console.log("nose Y = "+noseY);
}
}