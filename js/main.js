$(function(){
    
});

// selector
const optionMenu = document.querySelector(".select"),
	selectBtn = optionMenu.querySelector(".select__btn"),
	options = optionMenu.querySelectorAll(".select__option"),
	sBtn_text = optionMenu.querySelector(".select__title");

selectBtn.addEventListener("click", () => {
	optionMenu.classList.toggle("select--active");
});

options.forEach((option) => {
	option.addEventListener("click", () => {
		let selectedOption = option.querySelector(".select__text").innerText;
		sBtn_text.innerText = selectedOption;
		optionMenu.classList.toggle("select--active");
		console.log(selectedOption);
	});
});






// range
function rangeSlide(value)
{
  document.getElementById('rangeValue').innerHTML = value;
}

// начало бургер меню
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.menu__btn', '.menu__lines');
    let links = menu.find('.menu__link');
    let overlay = menu.find('.menu__overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('menu__burger--active');
      
      if (menu.hasClass('menu__burger--active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.header__menu');
