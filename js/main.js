let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
}); 

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

        
    document.querySelector('.mob-open').addEventListener('click', (e) => {
		document.querySelector('.mob-close').classList.add('mob-close--open');
		document.querySelector('.header__menu').classList.add('header__menu--open');
		document.querySelector('.hero__wrapper').classList.add('hero__wrapper--close');
		document.querySelector('.mob-open').classList.add('mob-open--close');
		
	 });

	 document.querySelector('.mob-close').addEventListener('click', () => {
		document.querySelector('.header__menu').classList.remove('header__menu--open');
		document.querySelector('.hero__wrapper').classList.remove('hero__wrapper--close');
		document.querySelector('.mob-open').classList.remove('mob-open--close');
		document.querySelector('.mob-close').classList.remove('mob-close--open');
	 }); 