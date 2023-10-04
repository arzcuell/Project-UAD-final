// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
});


//show or hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        
        //if there are some faq open, then close all
        faqs.forEach(item => {
            if(item !== faq) {
                item.classList.remove('open')
                //change de icon for all
                const icon = item.querySelector('.faq__icon i');
                if(icon.className === 'uil uil-minus') {
                    icon.className = 'uil uil-plus'
                }
            }
        });

        //toggle faq open/close
        faq.classList.toggle('open')

        //change de icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        } else {
            icon.className = 'uil uil-plus'
        }
    })
});


/* nav menu on screens less than 1024px*/
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style .display = "none";
});


//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
};

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
};


// modo oscuro persistente
if(localStorage.getItem('dark-theme') === 'true') {
    document.body.classList.add("dark-theme");
    icon.innerHTML = "<i class='uil uil-sun'></i>";
} else {
    document.body.classList.remove("dark-theme");
    icon.innerHTML = "<i class='uil uil-moon'></i>";
};


// Mostrar popup si la cookie no existe
if (!getCookie("popupClosed")) {
    document.querySelector(".popup").style.display = "block";
};

// Escuchar clic en el botón de cerrar
document.querySelector(".close-btn").addEventListener("click", function() {
document.querySelector(".popup").style.display = "none";
document.querySelector(".popup-content video").pause();
});

// Escuchar cambios en el checkbox
document.querySelector("#popup-checkbox").addEventListener("change", function() {
if (this.checked) {
    // Crear cookie con duración de 60 días
    setCookie("popupClosed", true, 60);
    // Ocultar popup
    document.querySelector(".popup").style.display = "none";
    // Pausar video
    document.querySelector(".popup-content video").pause();
}
});

// Función para crear una cookie
function setCookie(name, value, days) {
var expires = "";
if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
}
document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};

// Función para obtener el valor de una cookie
function getCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
};
