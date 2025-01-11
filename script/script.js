function showmenu(){
    const menu = document.querySelector('.mobile-menu')
    menu.style.display = 'flex'
}
const menubar = document.querySelector('.menubar');
menubar.addEventListener('click',showmenu);


function hidemenubar(){
    const menu = document.querySelector('.mobile-menu')
    menu.style.display = 'none'
}
const hidebar = document.querySelector('.main');
hidebar.addEventListener('click',hidemenubar);


