//store and selected elements that we are going to use
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

//add a click event listender to the hamburguer button and use a callback funtion that toggles the list elements list's of classes
hambutton.addEventListener('click', ()=>{
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//What does toggle mean? Instead separate add and remove statements, toggle means add the class if it does not currently exist or remoce the name class if it does exist