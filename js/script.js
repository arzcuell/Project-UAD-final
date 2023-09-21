// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
})


//show or hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        //change de icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        } else {
            icon.className = 'uil uil-plus'
        }
    })
})


/* navmenu on screens less than 1024px*/
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style .display = "none";
})


//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

//dark-theme
const icon = document.getElementById('toggle-menu-btn');

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")) {
        icon.innerHTML = "<i class='uil uil-sun'></i>";
        localStorage.setItem('dark-theme', 'true');
    }else {
        icon.innerHTML = "<i class='uil uil-moon'></i>";
        localStorage.setItem('dark-theme', 'false');
    }    
}


// modo oscuro persistente
if(localStorage.getItem('dark-theme') === 'true') {
    document.body.classList.add("dark-theme");
    icon.innerHTML = "<i class='uil uil-sun'></i>";
} else {
    document.body.classList.remove("dark-theme");
    icon.innerHTML = "<i class='uil uil-moon'></i>";
}