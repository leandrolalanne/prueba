var sheet = SpreadsheetApp.openById("18R1BjaVcMJKb-kboTAOVEJoVPUs3AWO5eevW1p_0-_0");
var sheetRange = sheet.getRange("A1");
sheetRange.setValue("The string value");

var file = Utilities.newBlob(fileData);
var sheet = SpreadsheetApp.openById("18R1BjaVcMJKb-kboTAOVEJoVPUs3AWO5eevW1p_0-_0");
var sheetRange = sheet.getRange("A1");
sheetRange.setValue(file);

function onsubmit() {
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/u/0/home/projects/1TKd8T12ZoGBFj76AxNROSpf_e6EWHLPHIFVUuE9lM1ioobf_MwjstRTR/exec");
    xhr.send(formData);
}
 