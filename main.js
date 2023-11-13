noseX = 0;
noseY = 0;


rightwristx = 0;
leftwristx = 0;
difference = 0;
function setup()
{
    canvas = createCanvas(550 , 550);
    canvas.position(580,125);

    video = createCapture(VIDEO);
    video.size(550 , 550);

    posenet = ml5.poseNet(video , modelloaded);
    posenet.on("pose" , gotposes);
}

function gotposes(results)
{
    if (results.length > 0 ) 
    {
        console.log(results);

        noseX = results[0].pose.nose.x ; 
        noseY = results[0].pose.nose.y ;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        rightwristx = results[0].pose.rightWrist.x;
        leftwristx = results[0].pose.leftWrist.x;
        difference = floor(leftwristx  -  rightwristx);
        console.log("right wrist x = " + rightwristx + " left wrist x = " + leftwristx + " difference = " + difference);
    }
}

function modelloaded()
{
    console.log("model is loaded");
}



function draw()
{
    background("#289985");

    document.getElementById("square_landB").innerHTML = "Size of the Square will be = "  +  difference  +  " px";
    fill("#A8FCEE");
    stroke("#F9BF43");
    square(noseX , noseY , difference)
}