let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

let current = 0;

function nextImage(){
    current++;
    if(current >= images.length){
        current = 0;
    }
    document.getElementById("galleryImage").src = images[current];
}

function prevImage(){
    current--;
    if(current < 0){
        current = images.length - 1;
    }
    document.getElementById("galleryImage").src = images[current];
}