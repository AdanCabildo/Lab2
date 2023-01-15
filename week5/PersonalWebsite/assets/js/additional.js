function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
}
setInterval(displayTime, 1000);

function Random() {
    var rnd = Math.floor(Math.random() * 101);
    document.getElementById("tb").value = rnd;
}