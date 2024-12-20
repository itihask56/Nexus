
const showTime = function(){
    const timer= document.getElementById("root");
    const now = new Date();
    const indianTime = now.toLocaleTimeString();
    timer.innerHTML=indianTime;
}
setInterval(showTime,1000);
const timer= document.getElementById("root");
timer.style.height="100vh";
timer.style.fontSize="80px";
timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";


