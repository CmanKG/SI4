status=""
objects=[]
function setup(){
    canvas=createCanvas(800,500)
    canvas.center()
    }
    function preload(){
    img=loadImage("261962_pmfreq.webp")
    object_detector=ml5.objectDetector("cocossd",modelloaded)
document.getElementById("status").innerHTML="starting detecting objects"
    }
    function draw(){
    image(img,0,0,800,500)
    if (status !="") {
        for (i=0;i<objects.length;i++){
          document.getElementById("status").innerHTML="Status:Object Detected"
          fill("#FF0000");
          percent=floor(objects[i].confidene*100);
          text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
          noFill();
          stroke("#FF0000")
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
      }
      }
      }
      
      
  
  function modelloaded(){
    console.log("modelisloaded")  
        status = true;  
        object_detector.detect(img,gotResult)
}
function gotResult(error,results){
  if (error) {
    console.log(error)
  } else {
    console.log(results)
    objects=results
  }
}
  
    