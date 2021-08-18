// JavaScript Document Name: huluMain.js

// DOM Elements
const modal = document.querySelector('.modal'); //Bring in the LogIn Modal
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

// Event Listeners
loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Functions
function openModal()
{
	modal.style.display = 'block'; // Show the LogIn Modal
}

function closeModal()
{
	modal.style.display = 'none'; // Hide the LogIn Modal
}

function outsideClick(e) // Close the LogIn Modal by clicking anywhere
{
	if(e.target == modal)
	{
		closeModal();		
	}
}
