let lastScrollTop = 0;
let navbar = document.getElementById('nav');

window.addEventListener('scroll', function (){
    const scrollTop = window.pageYOffset || 
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop){
        navbar.style.top="-60px";
    }else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})