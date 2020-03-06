var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function Showimage($id) {
    var img = document.getElementById($id);
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}