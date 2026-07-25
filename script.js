const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");

menuBtn.onclick = () => {
    sideMenu.classList.toggle("active");
};

// يقفل القائمة لما تضغط بره
document.addEventListener("click", (e) => {

    if(
        !sideMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){
        sideMenu.classList.remove("active");
    }

});


window.addEventListener("load",()=>{

    document.querySelector(".loader").classList.add("hide");

});
// ===============================
// Floating Background Icons
// ===============================

const bgContainer = document.querySelector(".background-icons");

const images = [
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg"
];

function createFloatingIcon(){

    const img = document.createElement("img");

    img.src = images[Math.floor(Math.random()*images.length)];

    img.style.position = "fixed";
    img.style.left = Math.random()*100 + "vw";
    img.style.top = "110vh";

    const size = 40 + Math.random()*40;

    img.style.width = size + "px";
    img.style.opacity = "0.07";
    img.style.pointerEvents = "none";
    img.style.zIndex = "-1";

    document.body.appendChild(img);

    img.animate([
        {
            transform:"translateY(0) rotate(0deg)",
            opacity:0.07
        },
        {
            transform:`translate(${Math.random()*200-100}px,-120vh) rotate(${Math.random()*720}deg)`,
            opacity:0
        }
    ],{
        duration:18000,
        easing:"linear"
    });

    setTimeout(()=>{
        img.remove();
    },18000);
}

for(let i=0;i<15;i++){
    setTimeout(createFloatingIcon,i*1000);
}

setInterval(createFloatingIcon,1500);



const beans = document.getElementById("beans");
const intro = document.getElementById("coffee-intro");
const logo = document.getElementById("intro-logo");

function coffeeIntro(){

    for(let i=0;i<80;i++){

        const b=document.createElement("span");

        b.className="bean";

        b.innerHTML="☕";

        const angle=Math.random()*Math.PI*2;
        const distance=250+Math.random()*450;

        b.style.setProperty("--x",
        Math.cos(angle)*distance+"px");

        b.style.setProperty("--y",
        Math.sin(angle)*distance+"px");

        b.style.animationDelay=
        (Math.random()*0.2)+"s";

        beans.appendChild(b);

    }

    setTimeout(()=>{

        logo.classList.add("show");

    },700);

    setTimeout(()=>{

        intro.classList.add("hide");

    },2200);

}

window.addEventListener("load",coffeeIntro);