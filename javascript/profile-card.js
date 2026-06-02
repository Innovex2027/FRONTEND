const contactbtn=document.getElementById("btn1");
const profilebtn=document.getElementById("btn2");
const contactinfo=document.getElementById("personalinfo");

contactbtn.addEventListener('click',()=>{

    if(contactinfo.style.display==="none"){
        contactinfo.style.display="block";
    }
    else{
        contactinfo.style.display="none";
    }

});

profilebtn.addEventListener('click',()=>{
    window.open("../html/porfolio.html","_blank");

});