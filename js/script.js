let popupTimings = [];

function logPopupEvent(popupName, event) {
    const timestamp = new Date().toISOString();
    popupTimings.push({ popup: popupName, event: event, time: timestamp });
}

// Show Popup 1
function showIt() {
    document.getElementById("hid").style.visibility = "visible";
    logPopupEvent("Popup 1", "Shown");
}
setTimeout(showIt, 3000);

// Hide Popup 1
function dltFun() {
    document.getElementById("hid").style.visibility = "hidden";
    logPopupEvent("Popup 1", "Hidden");
}
setTimeout(dltFun, 5000);

// Show Popup 2
function showIt2() {
    document.getElementById("hid2").style.visibility = "visible";
    logPopupEvent("Popup 2", "Shown");
}
setTimeout(showIt2, 7000);

// Hide Popup 2
function dlt() {
    document.getElementById("hid2").style.visibility = "hidden";
    logPopupEvent("Popup 2", "Hidden");
}
setTimeout(dlt, 10000);

// Show Video Popup
function show() {
    document.getElementById("videoPopup1").style.display = "block";
    logPopupEvent("Video Popup", "Shown");
}
setTimeout(show, 12000);

// Hide Video Popup
function cl() {
    document.getElementById("videoPopup1").style.visibility = "hidden";
    logPopupEvent("Video Popup", "Hidden");
}
setTimeout(cl, 15000);

// Show Image Popup
function showimg() {
    document.getElementById("imagePopup1").style.display = "block";
    logPopupEvent("Image Popup", "Shown");
}
setTimeout(showimg, 17000);

// Hide Image Popup
function dlting() {
    document.getElementById("imagePopup1").style.visibility = "hidden";
    logPopupEvent("Image Popup", "Hidden");
}
setTimeout(dlting, 20000);

// Send data to the Python server to save the CSV file
function saveCSV() {
    fetch("http://127.0.0.1:5000/save-csv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(popupTimings),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

// Automatically save CSV after 22 seconds (after all popups)
setTimeout(saveCSV, 22000);
