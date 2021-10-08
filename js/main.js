const toggle = document.querySelector('.toggle')
const topbar = document.querySelector('.topbar')
const navigation = document.querySelector('.navigation')
const main = document.querySelector('.main')
const themeSwitch = document.querySelector('.themeSwitch')
const body = document.querySelector('body')



themeSwitch.onclick = function () {
	body.classList.toggle('dark')
}


toggle.onclick = function (){
	toggle.classList.toggle('active');
	topbar.classList.toggle('active');
	navigation.classList.toggle('active');
	main.classList.toggle('active');

}