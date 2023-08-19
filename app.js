let sections=document.querySelectorAll(".section");
let navlinks=document.querySelector(".anc");

window.onscroll = () => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
if(top >= offset && top < offset+height){
        navelinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('.anc [href*=' + + ']')
        });
    }
}
