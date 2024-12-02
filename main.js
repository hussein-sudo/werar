const menuBtn=document.getElementById("menu-btn")
const navLinks=document.getElementById("nav-links")
const menuBtnIcon=menuBtn.querySelector("1");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isopen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isopen?"ri-close-line": "ri-menu-line")

});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");

});
const scrollRevealoption={
    distance:"50px",
    origin:"bottom",
    duration:100,
};

scrollReveal().reveal(".header_img img", {
   ...scrollRevealoption,
   origin:"right",
});scrollReveal().reveal(".header_content h2", {
    ...scrollRevealoption,
    delay:500
});

 scrollReveal().reveal(".header_content h1", {
     ...scrollRevealoption,
     delay:1000,
 });

 scrollReveal().reveal(".order_card", {
    ...scrollReveal,
    interval:500,
 });

 scrollReveal().reveal(".event_content",{
    duration:1000,
 })
 


