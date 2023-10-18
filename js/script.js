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


window.addEventListener('load', function() {
    setTimeout(function() {
        // Your code to open the modal goes here
        if (!getCookie("popupClosed")) {
            document.querySelector(".popup").style.display = "block";
            document.body.style.overflow = "hidden";
        };
    }, 1000); // 1000 milliseconds = 1 seconds
});

// Escuchar clic en el botón de cerrar
document.querySelector(".close-btn").addEventListener("click", function() {
document.querySelector(".popup").style.display = "none";
document.querySelector(".popup-content video").pause();
enableScroll();
});

// Escuchar cambios en el checkbox
document.querySelector("#popup-checkbox").addEventListener("change", function() {
if (this.checked) {
    // Crear cookie con duración de 90 días
    setCookie("popupClosed", true, 90);
    // Ocultar popup
    document.querySelector(".popup").style.display = "none";
    // Pausar video
    document.querySelector(".popup-content video").pause();
    enableScroll();
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




// ++++++++++++++++++++++++++++++++++++++++++++++ EVITAR SCROLL CUANDO EL POPUP ESTA ACTIVO +++++++++++++++++++++++++++++++++++++++++


// Deshabilitar el scroll en la página principal
function enableScroll() {
    document.body.style.overflow = 'visible';
}


// ++++++++++++++++++++++++++++++++++++++++++++++ MODAL FOR MINIMUM BROWSER VERSION +++++++++++++++++++++++++++++++++++++++++
// Objeto con las versiones mínimas necesarias para cada navegador
const minimalBrowserVersions = {
    chrome: 119,
    firefox: 45,
    safari: 10,
    edge: 14,
    opera: 37,
};

// Función para obtener el navegador y la versión del usuario
function getBrowserInfo() {
    let userAgent = navigator.userAgent, temp,
        M = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        return {name: 'IE', version: (temp[1] || '')};
    }
    if (M[1] === 'Chrome') {
        temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
        if (temp != null) return {name: temp[1].replace('OPR', 'Opera'), version: temp[2]};
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((temp = userAgent.match(/version\/(\d+)/i)) != null) M.splice(1, 1, temp[1]);
    return {name: M[0], version: M[1]};
}

// Función para mostrar el modal si el navegador no cumple con la versión mínima
function checkBrowserVersion() {
    let browserInfo = getBrowserInfo();
    let browserName = browserInfo.name.toLowerCase();
    let browserVersion = parseInt(browserInfo.version);

    if (browserName in minimalBrowserVersions && browserVersion < minimalBrowserVersions[browserName]) {
        // Mostrar el modal con la información de actualización del navegador
        alert(`Por favor, actualice su navegador ${browserName} a la versión ${minimalBrowserVersions[browserName]} o superior para una mejor experiencia en este sitio web.`);
    }
}
