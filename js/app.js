const accordion = document.getElementById('accordion-container');

accordion.addEventListener('click', e => {
    const targetClass = e.target.classList;

    if(targetClass.contains('accordion__question')) {
      e.target.nextElementSibling.classList.toggle('accordion__answer--active'); 
      e.target.classList.toggle('accordion__question--active');
    }
});

document.getElementById("accordion-container").addEventListener("mouseover", () => {
  document.querySelector(".img__box--desktop").classList.add("img__box--desktop--active");
})

document.getElementById("accordion-container").addEventListener("mouseout", () => {
  document.querySelector(".img__box--desktop").classList.remove("img__box--desktop--active");     
});