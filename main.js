status = "";
object = [];

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide(); 
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = 'Detecting Objects';
    object_name = document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log(modelLoaded);
    status = true;
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        object = results;
    }
    }

function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
    for(i = 0; 1 < object.length; i++ ){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            fill("#FF0000");
            nofill();
            percent = floor(object[i].confidence * 100);
            text(object[i].label + percent + "%" , object[i].x + 15 , object[i].y + 15)
            stroke("#FF0000");
            rect(object[1].x, object[i].y, object[i].width, object[i].height);
        }
    } 
}

