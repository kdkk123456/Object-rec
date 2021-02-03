Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera")

function capture() {
    Webcam.snap(function (pic) {
        document.getElementById("snapshot").innerHTML=`<img src=${pic} id="imgtag">`
    })
}

console.log(ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rHhpL03RH/model.json",modelloaded)

function modelloaded() {
    console.log("hi")
    
}