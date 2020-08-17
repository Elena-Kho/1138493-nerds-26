let slider = document.querySelector('.slider');
let buttons = slider.querySelectorAll('button');
let slides = slider.querySelectorAll('.slide');


for(let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  let slide = slides[i];

  button.addEventListener("click", function (evt) {
    for(let j = 0; j < slides.length; j++) {
      let slide = slides[j];
      slide.style.display = 'none';
    };
    for(let k = 0; k < buttons.length; k++) {
      let button = buttons[k];
      button.classList.remove('active');
    };
    slide.style.display = 'block';
    button.classList.add('active');
  })
}

