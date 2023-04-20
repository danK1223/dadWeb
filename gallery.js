$(document).ready(function() {
    $('.list').click(function() {
        const value = $(this).attr('data-filter');
        if(value == 'All') {
            $('.itemBox').show('1000');
        }
        else {
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})
var elements = document.getElementsByClassName("itemBox");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.onclick = function() {
        var img = this.getElementsByTagName("img")[0];
        var imgSrc = img.getAttribute("src");
        modal.style.display = "block";
        modalImg.src = imgSrc;
    } 
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
