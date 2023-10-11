// toggle icon navbar

let menuIcon= document.getElementById("menu-icon");
let navbarRight= document.querySelector(".right");
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbarRight.classList.toggle('active');
}

// scroll selection active link
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('.page-links');

window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset =sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach((links)=>{
                // links.classList.remove('active-link');
                links.style.color="white";
                // document.querySelector('.page-links[href*=' + id +']').classList.add('active-link');
                document.querySelector('.page-links[href*=' + id +']').style.color="aqua";
            })
        }
    });
    // remove menuicon and navbar when click navbar link///
    menuIcon.classList.remove('bx-x');
    navbarRight.classList.remove('active');
};


///show more about me on click read more button
let moreStuff=document.getElementById("more");
let readMore=document.getElementById("readMore");
let readLess=document.getElementById("readLess");

readMore.addEventListener("click",()=>{
    moreStuff.classList.toggle("hide");
    readMore.classList.add("hide");
    readLess.classList.toggle("hide")
})

readLess.addEventListener("click",()=>{
    moreStuff.classList.toggle("hide");
    readMore.classList.remove("hide");
    readLess.classList.toggle("hide")
})