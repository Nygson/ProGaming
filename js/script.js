document.addEventListener('DOMContentLoaded', function(){


    const navigation = document.querySelector('.navbar')

    function addShadow(){
        if (window.scrollY>=100){
            navigation.classList.add ('shadow-bg')
        } else
        {
            navigation.classList.remove ('shadow-bg')
        }
    }
    
    window.addEventListener ('scroll', addShadow) 
})
const navLink = document.querySelector('.navbar-nav')
const navBox = document.querySelector('.navbar-collapse')
function hide(){
    navBox.classList.remove ('show')
    }
    navLink.addEventListener ('click', hide)