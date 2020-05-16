// NEW DESING
//  FOR theClient Section
var index = 0;
// GetClientImage
var BOX1_IMAG = document.getElementById("BOX1_IMAGE");
var BOX2_IMAG = document.getElementById("BOX2_IMAGE");
var BOX3_IMAG = document.getElementById("BOX3_IMAGE");
// GetClientTitel
var BOX1_TITEL = document.getElementById("BOX1_Titel");
var BOX2_TITEL = document.getElementById("BOX2_Titel");
var BOX3_TITEL = document.getElementById("BOX3_Titel");
// ClientModel
var CLIENT_MODEL = document.getElementById("ClientModel");
var CLIENT_MODEL_IMAGE = document.getElementById("Modal_Image");
var CLIENT_MODEL_Titel = document.getElementById("ClientModelTitel");
var CLIENT_MODEL_Description = document.getElementById("ClientModelDesc");
var ClientCounterForimage = 0;
var $ClientModelNumber;
// MY Project Section 
var workImg = document.getElementById("workImage");
var Tags = document.getElementById("Tags");
var text = document.getElementById("text");
var projectname = document.getElementById("projectname");
var CounterForimageinTheBox = 0;
var slideCount = 0;
var nextClientBoxImage = 0;
// Client ALL Image ARRAY
var AllImageArrayClient = [
    [
        'include/Image/Gasprice/topview.png',
        'include/Image/Gasprice/BottomView.png',

    ],
    [
        'include/Image/iomodulwet/topview.png',
        'include/Image/iomodulwet/bottomview.png',
        'include/Image/iomodulwet/2DView.png',
    ],
    [
        'include/Image/iomoduledrycontact/3DTopView.png',
        'include/Image/iomoduledrycontact/3DTBottomView.png',
        'include/Image/iomoduledrycontact/2DView.png',
    ],
    [
        'include/Image/DataLogger/TOPView.png',
        'include/Image/DataLogger/BottomView.png',
    ],
    [
        'include/Image/AdressBoard/TOPView.png',
        'include/Image/AdressBoard/BottomView.png',
        'include/Image/AdressBoard/2DView.png',
    ],

];

// Titel Array
var TitelArrayClient = [
    'Gas Price',
    'IO Module - WET',
    'IO Module - DRY',
    'Datalogger',
    'Address Board',
];

var DescriptionArray = [
    'High performance Board ,which can control up to 32 Dot matrix driver.<br> Control the led driver over :<br> - Wi-Fi. <br> - Bluetooth. <br>  - Rf and ethernet',
    'High-performance IoT Board , for controlling up to 8 Wet Contact by mobile Application via WiFi or Bluetooth and read data  from many sensors and send them via WiFi some of its features:<br> -8 Digital output. <br>- 8 Digital isolated input<br> - 3 Analog input <br> - Wi-Fi & Bluetooth connectivity <br> - Ethernet connectivity',
    'High-performance IoT Board , for controlling up to 8 Dry Contact by mobile Application via WiFi or Bluetooth and read data  from many sensors and send them via WiFi some of its features:<br> -8 Digital output. <br>- 8 Digital isolated input<br> - 3 Analog input <br> - Wi-Fi & Bluetooth connectivity <br> - Ethernet connectivity',
    'High-performance Board, which can read data from up to  32 sensors, save them in SD card and share them in the internet some of its features:<br>- take data From up to 32 sensor <br>- send messages during the alert and make phone calls  <br> - Ethernet & RF connectivity <br> - Real-Time Clock ',
    'Our new product for controlling Seven-segment display,<br> it works in 7-12 voltage range with PIC18F25K Processor, and it has the following features:<br> - RS-485 connectivity <br>- Auto brightness adjustment<br> - Temperature control<br>- Low-cost BOM',

];

// MY Project Section

var slidImagesrc = [
    [
        "include/Image/Ninja-ESP/TOP3D.png",
        "include/Image/Ninja-ESP/Bottom3D.png",
        "include/Image/Ninja-ESP/TOP&Bottom2D.png"
    ],

];
var slidProjectName = [
    "Ninja-ESP",

];
var slidTags = [
    "<div class='chip col-lg-3'>PCB Design</div>" +
    "<div class='chip col-lg-3'>Electronics</div>" +
    "<div class='chip col-lg-3'>IOT</div>" +
    "<div class='chip col-lg-3 pinkTag'>OPEN Source</div>",
];
var slidTxt = [
    " Ninja-links is a high-performance development board for IoT application compatible with Arduino IDE and has WiFi, Bluetooth connectivity.with many more build-in feature so the developer can focus on programming" +
    "some of its features :  <br>" +
    "  - RS-485 <br>" +
    "  - USB Type C <br>" +
    "  - SD Card <br>" +
    "  - RGB <br>" +
    "  - Two 5 Volt IO  <br>" +
    "  - Bluetooth connectivity <br>" +
    "  - WiFi connectivity",
];

// Client Function
function nextClientBox() {
    if (AllImageArrayClient.length > (index + 3)) {
        index++;
        clientChangeImage(index);
        clientChangeTitel(index);
    }
}

function prevClientBox() {
    if (index > 0) {
        index--;
        clientChangeImage(index);
        clientChangeTitel(index);

    }

}

function clientChangeImage($index) {
    BOX1_IMAG.src = AllImageArrayClient[$index][0];
    BOX2_IMAG.src = AllImageArrayClient[$index + 1][0];
    BOX3_IMAG.src = AllImageArrayClient[$index + 2][0];
}

function clientChangeTitel($index) {
    BOX1_TITEL.innerHTML = TitelArrayClient[index];
    BOX2_TITEL.innerHTML = TitelArrayClient[index + 1];
    BOX3_TITEL.innerHTML = TitelArrayClient[index + 2];
}

// Client Model Design
function showClientModel($modeNum) {
    CLIENT_MODEL.style.display = "block";
    ClientModelTitel($modeNum);
    ClientModelDescription($modeNum);
    ClientModelImage($modeNum);
}

function hideClientModel() {
    CLIENT_MODEL.style.display = "none";
}
// CLIENT_MODEL_Titel
function ClientModelTitel($ClientModelNumber) {
    window.$ClientModelNumber = $ClientModelNumber;
    CLIENT_MODEL_Titel.innerHTML = TitelArrayClient[$ClientModelNumber];
}
// ClientModelDescription
function ClientModelDescription($ClientModelNumber) {
    CLIENT_MODEL_Description.innerHTML = DescriptionArray[$ClientModelNumber];
}
// CLIENT_MODEL_IMAGE 
function ClientModelImage($ClientModelNumber) {
    CLIENT_MODEL_IMAGE.src = AllImageArrayClient[$ClientModelNumber][0];
    ClientModelShow = 0;
    // Auto change image 
}
// Next Client IMAGE Change 
function nextClientBoximage() {
    if (AllImageArrayClient[$ClientModelNumber].length - 1 > nextClientBoxImage) {
        nextClientBoxImage++;
    } else {
        nextClientBoxImage = 0;
    }
    CLIENT_MODEL_IMAGE.src = AllImageArrayClient[$ClientModelNumber][nextClientBoxImage];
}


// MY Project Function
function nextSlide() {
    slideCount++;
    cahngeBody();
}

function befSlide() {
    slideCount--;
    cahngeBody();
}
// Auto Change Image
function changeworkimage() {
    if ((slidImagesrc[slideCount].length) - 1 > (CounterForimageinTheBox)) {
        CounterForimageinTheBox++;
    } else {
        CounterForimageinTheBox = 0;
    }
    workImg.src = slidImagesrc[slideCount][CounterForimageinTheBox];
    // Auto Slide 
    setTimeout(changeworkimage, 2200);
}
changeworkimage();

// Set the TextBody
function cahngeBody() {
    Tags.innerHTML = slidTags[slideCount];
    text.innerHTML = slidTxt[slideCount];
    projectname.innerHTML = slidProjectName[slideCount];

}
//------ PreLoad Screan
var overlay = document.getElementById("overlay");
window.addEventListener('load', function() {
    overlay.style.display = 'none';
});
// NEW DESING
