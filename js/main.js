const toggle = document.querySelector('.toggle')
const topbar = document.querySelector('.topbar')
const navigation = document.querySelector('.navigation')
const main = document.querySelector('.main')
const themeSwitch = document.querySelector('.themeSwitch')
const mobileTheme = document.querySelector('.mobileTheme')
const body = document.querySelector('body')
const closeHome = document.querySelector('.close-home')
const closeAbout = document.querySelector('.close-about')
const closeServices = document.querySelector('.close-services')
const closeProject = document.querySelector('.close-project')
const closeTest = document.querySelector('.close-test')
const closeContact = document.querySelector('.close-contact')


themeSwitch.onclick = function () {
	body.classList.toggle('dark')
}
mobileTheme.onclick = function () {
	body.classList.toggle('dark')
}

toggle.onclick = function (){
	toggle.classList.toggle('active');
	topbar.classList.toggle('active');
	navigation.classList.toggle('active');
	main.classList.toggle('active');
}


if (document.documentElement.clientWidth < 992) {
	closeHome.onclick = function(){
		toggle.classList.toggle('active');
		topbar.classList.toggle('active');
		navigation.classList.toggle('active');
		main.classList.toggle('active');
	}
	closeTest.onclick = function(){
		toggle.classList.toggle('active');
		topbar.classList.toggle('active');
		navigation.classList.toggle('active');
		main.classList.toggle('active');
	}
	closeAbout.onclick = function(){
		toggle.classList.toggle('active');
		topbar.classList.toggle('active');
		navigation.classList.toggle('active');
		main.classList.toggle('active');
	}
	closeContact.onclick = function(){
		toggle.classList.toggle('active');
		topbar.classList.toggle('active');
		navigation.classList.toggle('active');
		main.classList.toggle('active');
	}
	closeProject.onclick = function(){
		toggle.classList.toggle('active');
		topbar.classList.toggle('active');
		navigation.classList.toggle('active');
		main.classList.toggle('active');
	}
	closeServices.onclick = function(){
		toggle.classList.toggle('active');
		topbar.classList.toggle('active');
		navigation.classList.toggle('active');
		main.classList.toggle('active');
	}
}

