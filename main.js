const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks){
    menuIcon.addEventListener('click' , () => {
        navLinks.classList.toggle('active');
        console.log('Sto cliccando il menu', menuIcon);
    })

}else{
    console.error('errore : Menuicon o il navlink non trovati')
}


