var button = document.querySelector('.btn-navigation');
let before_button = document.querySelector('.navigation');
let is_open = document.querySelector('navigation.isOpen');
button.addEventListener('click',function() {
	button.classList.remove('navigation');
	before_button.classList.toggle('isOpen');

})