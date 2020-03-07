var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
var product_info = document.getElementById("product_info");

function Showimage($id) {
    var img = document.getElementById($id);
    modal.style.display = "block";
    modalImg.src = img.src;
    ShowInnerDiv($id);


}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

function ShowInnerDiv($id) {
    var titel = "";
    var Company = "";
    var txt = "";
    var tag = "";
    // All tag {<div class='chip col-lg-3'>PCB Design</div><div class='chip col-lg-3'>Electronics</div><div class='chip col-lg-3'>PLC</div><div class='chip col-lg-6'>Programming</div>}
    switch ($id) {
        case "myImg1":
            titel = "Gas Price";
            Company = "iDealChip";
            txt = "High performance Board ,which can control up to 32 Dot matrix driver.<br> Control the led driver over Wi-Fi,Bluetooth,Rf and ethernet";
            tag = "<div class='chip col-lg-3'>PCB Design</div><div class='chip col-lg-3'>Electronics</div>";

            break;
        case "myImg2":
            titel = "IOModule";
            Company = "iDealChip";
            txt = "High performance Board ,which can control up to 8 Relay Via ethernet,Wi-Fi&Bluetooth.Also monitor 8 digital input and 3 Analog input";
            tag = "<div class='chip col-lg-3'>PCB Design</div><div class='chip col-lg-3'>Electronics</div>";

            break;
        case "myImg3":
            titel = "IOModule-Wet Contact";
            Company = "iDealChip";
            txt = "High performance Board ,which can control up to 8 wet Output Via ethernet,Wi-Fi&Bluetooth.Also monitor 8 digital input and 3 Analog input";
            tag = "<div class='chip col-lg-3'>PCB Design</div><div class='chip col-lg-3'>Electronics</div>";

            break;
        case "myImg4":
            titel = "Datalogger";
            Company = "iDealChip";
            txt = "High performance Board ,which can monitor the data and send it using RF,ethernet . make warning calls and send messages";
            tag = "<div class='chip col-lg-3'>PCB Design</div><div class='chip col-lg-3'>Electronics</div>";

            break;
        case "myImg5":
            titel = "Atomic Clock";
            Company = "iDealChip";
            txt = "High performance Board ,which Read the time and date From atomic Clock and Display is in P10 dot matrix . Also it take time from RTC & GPRS ";
            tag = "<div class='chip col-lg-3'>PCB Design</div><div class='chip col-lg-3'>Electronics</div>";

            break;

    }
    product_info.innerHTML = "<div class='product-text'><center><h1>" + titel + "</h1></center><center><h2>" + Company + "</h2></center><p>" + txt +
        "</p></div><div class='Col-lg-12 center' >" + tag + "</div>";


}
