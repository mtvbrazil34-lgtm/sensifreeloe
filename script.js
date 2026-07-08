function generate(){

let device = document.getElementById("device").value.trim();

if(device.length < 6){

alert("❌ Device name must be at least 6 characters.");

return;

}

let output=document.getElementById("output");

...
}