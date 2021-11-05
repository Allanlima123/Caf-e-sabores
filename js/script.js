var imagem = document.querySelector('.imagem-main');
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.imagem-main'). src = src;
    };
});

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}