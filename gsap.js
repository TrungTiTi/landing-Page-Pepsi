gsap.registerPlugin(ScrollTrigger);
// 

    let mouseCursor = document.querySelector(".cursor");
    let textCursor = document.querySelector(".text-home");
    let textHover = document.querySelectorAll(".text-hover");
    let textImg = document.querySelectorAll(".span-hover");

// hover menu
    textCursor.addEventListener("mouseleave", () =>{
    mouseCursor.classList.remove("link-home"); 
    });
    textCursor.addEventListener("mouseover", () =>{
        mouseCursor.classList.add("link-home"); 
    });
// hover change img
    for(let i=0; i < textHover.length; i++){
        textHover[i].addEventListener("mouseleave", () =>{
            mouseCursor.classList.remove("link-hover"); 
            });
        textHover[i].addEventListener("mouseover", () =>{
            mouseCursor.classList.add("link-hover"); 
        });
    }
// hover text and image
function mouseHover(text, a){
    textImg[a].addEventListener("mouseleave", () =>{
        mouseCursor.classList.remove(text); 
        });
    textImg[a].addEventListener("mouseover", () =>{
        mouseCursor.classList.add(text); 
    });
}
mouseHover("zero", 0);
mouseHover("one", 1);
mouseHover("two", 2);
mouseHover("three", 3);
mouseHover("four", 4);
// hover footer img
    
document.addEventListener('mousemove', e => {
  mouseCursor.setAttribute("style", "top: "+(e.pageY-20)+"px; left:"+(e.pageX-20)+"px;")
}); 

// 
function img(){
    const words = ['HELLO!', 'WELCOME', 'TITWO'];
let masterTl = gsap.timeline();

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true});
    tl.to('.intro-text', {
        duration: 1,
        text: word,
        ease:"back"
    });
    masterTl.add(tl)
});
gsap.from('.intro-img-background',{opacity: 0, duration: 2, y: 100, ease:"power3", delay: 5});
gsap.from('.test',{opacity: 0, duration: 2, y: 100, ease:"power3", delay: 5});
gsap.from('.main',{opacity: 0, duration: 2, x: -100, ease:"slow", delay: 5});

gsap.fromTo('.feature',{opacity: 0, display:"none", x: -100}, {opacity: 1, display:"flex", x: 0, duration:2, delay:6} );
gsap.fromTo('.nav-wrap' ,{opacity: 0, display:"none", y: 100}, {opacity: 1, display:"block", y: 0, duration:2, delay:6} );
gsap.fromTo('.video',{opacity: 0, display:"none", x: -100}, {opacity: 1, display:"flex", x: 0, duration:2, delay:6} );
gsap.fromTo('.last',{opacity: 0, display:"none", y: 100}, {opacity: 1, display:"block", y: 0, duration:2, delay:6} );
gsap.fromTo('.footer',{opacity: 0, display:"none", y: 100}, {opacity: 1, display:"block", y: 0, duration:2, delay:6} );
}
img();

// 
let mainImg = document.getElementById("main-img");
let imgMin = document.querySelectorAll(".img-min");
for(let i=0; i < imgMin.length; i++){
    imgMin[i].addEventListener("mouseleave", () =>{
        mouseCursor.classList.remove("link-hover"); 
        });
    imgMin[i].addEventListener("mouseover", () =>{
        mouseCursor.classList.add("link-hover"); 
    });
}
function twoClick(){
    mainImg.src="./img/pepsi-white2.png";
    mainImg.style.animationName = "null";
    setTimeout(() => {
        mainImg.style.animationName = "unble";
        mainImg.style.animationDuration = "2s";
    },300);

}
function oneClick(){
    mainImg.src="./img/pepsi-blue.png";
    mainImg.style.animationName = "null";
    setTimeout(() => {
        mainImg.style.animationName = "unble";
        mainImg.style.animationDuration = "2s";
    },300);
}
function threeClick(){
    mainImg.src="./img/pepsi-black.png";
    mainImg.style.animationName = "null";
    setTimeout(() => {
        mainImg.style.animationName = "unble";
        mainImg.style.animationDuration = "2s";
    },300);
 
}
// 
