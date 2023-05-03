// array of image names
var images = ["./A_place_in_the_heart_of_Jaffa/place1.jpg", 
"./Dancers/dancers1.jpg", 
"./Exhibitions/Exhibitions1.jpg", 
"./Gilad_Kahana_series/Gilad1.jpg", 
"./Landscapes_and_houses_in_the_village/Landscapes1.jpg", 
"./Life_is_here/Life_is_here2.jpg", 
"./Love_for_sale_for_site/love1.jpg",
"./Nude_model/nude_model2.jpg", 
"./People/people2.jpg", 
"./People_at_sea/people_at_sea2.jpg",
"./The_colors_from_the_site/colors_from_the_site1.jpg"];
var currentIndex = 0;
var img = document.getElementById("myImage");

function swapImages() {
currentIndex++;
if (currentIndex == images.length) {
currentIndex = 0;
}
img.src = images[currentIndex];
}

// call swapImages every 3 seconds
setInterval(swapImages, 4000);