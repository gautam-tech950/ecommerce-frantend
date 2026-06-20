// Slider 

let images = [
    "https://via.placeholder.com/1200*400?text=banner+1",

    "https://via.placeholder.com/1200*400?text=banner+2",

    "https://via.placeholder.com/1200*400?text=banner+3",   
]

let index = 0;
const slide = document.getElementById("sloide");

setInterval(() => {
    index = (index +1) % images.length;
    slide.src = images[index];
}, 3000);

// Scroll to top 

document.getElementById("topBtn").addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});