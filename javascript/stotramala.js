let count=0, rcount=0;


const countDisplay=document.getElementById("count");
const rcountDisplay=document.getElementById("rcount");
const button=document.getElementById("btn");

const alarm = new Audio("../img/bell.mp3");

function increaseCount(){

    count++;
    if (count === 108) {
        alarm.play();
        alert("🎉 108 chants completed!");
    }
    if(count>108){
        count=1;
        rcount++;
    }
    countDisplay.textContent=count;
    rcountDisplay.textContent=rcount;
}

button.addEventListener("click",increaseCount);
button.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"||e.key===" "){
        e.preventDefault();
        increaseCount();
    }
});