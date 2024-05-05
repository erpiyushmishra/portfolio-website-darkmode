
const darkImg=document.getElementById('dark-img');


darkImg.addEventListener('click',darkTheme);


function darkTheme(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        darkImg.setAttribute('src','./portfolio_site_img/sun.png');
    }else{
        darkImg.setAttribute('src','./portfolio_site_img/moon.png')
    }
}