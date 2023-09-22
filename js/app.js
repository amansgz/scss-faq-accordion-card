const accordion = document.getElementById('accordion-container');
const box = document.querySelector(".image__box__desktop");


accordion.addEventListener('click', e => {
    const targetClass = e.target.classList;

    if(targetClass.contains('accordion__question')) {
      e.target.nextElementSibling.classList.toggle('accordion__answer--active'); 
      e.target.classList.toggle('accordion__question--active');
    }
});

/* Move box image  */
accordion.addEventListener("mouseover", () => {
  box.classList.add("image__box__desktop--active");
})

accordion.addEventListener("mouseout", () => {
  box.classList.remove("image__box__desktop--active");
});