function preload(){

}

function setup(){
    canvas=createCanvas(300,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,350);
    video.hide();
    bosenet=ml5.poseNet(video,modelLoaded);
    bosenet.on('pose',gotPoses);
} 
  
function draw(){
  image(video,0,0,300,350);
}  

function snap(){
    save('my_instagram_status.png');
}

function modelLoaded(){
    console.log('posenet is initilized');
}

function gotPoses(results){
    if(results.length>0){
console.log(results);
console.log("nose x ="+results[0].pose.nose.x);
console.log("nose y ="+results[0].pose.nose.y);
    }
}







