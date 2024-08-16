const navLinks = document.querySelectorAll('.nav-link');
const table = document.querySelectorAll('.tab-pane');
navLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(link);
            
           
            navLinks.forEach(nav => nav.classList.remove('active'));
            table.forEach(pane => pane.classList.remove('show', 'active','fade'));

            
            link.classList.add('active');

            table[index].classList.add('show', 'active','fade');
        });
    });

    

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");
const closeModalBtn = document.getElementById("closeModalBtn");


openModalBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    modal.style.display = "flex";
});


closeBtn.addEventListener("click", ()=> {
    modal.style.display = "none";
});

closeModalBtn.addEventListener("click", ()=> {
    modal.style.display = "none";
});




let containers = document.querySelectorAll(".carousel-container");
let currentIndex = 0;

const slideImage = (index, container) => {
    let slides = container.querySelectorAll(".cardCarousel");
    let carosel = container.querySelector(".carousel");
    let slideWidth = slides[0].clientWidth;
    let indicators = container.querySelectorAll('.indicator');

   
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    indicators.forEach(indicator => {
        indicator.classList.remove('activeIndicator');
    });
    indicators[index].classList.add("activeIndicator"); 
    carosel.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
};
containers.forEach(container => {
    let slides = container.querySelectorAll(".cardCarousel");
    let indicatorsGrp = document.createElement("div");
    indicatorsGrp.classList.add("indicators-grp");
    container.appendChild(indicatorsGrp);

    slides.forEach((slide, i) => {
        let indicator = document.createElement("div");
        indicator.classList.add("indicator");
        indicatorsGrp.appendChild(indicator);      
        indicator.addEventListener("click", () => {
            slideImage(i, container);
        });
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator');   
});