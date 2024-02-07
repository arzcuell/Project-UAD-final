// ++++++++++++++++++++++++++++++++++++++++++++++ NAV AND FOOTER FOR EVERYBODY +++++++++++++++++++++++++++++++++++++++++


window.addEventListener('DOMContentLoaded', ()=> {

let body = document.querySelector('body');
let nav = document.createElement('nav');
nav.innerHTML=`
    <div class="container nav__container">

        <a href="index.html">
            <div class="waviy" id="waviy">
                <span style="--i:1">U</span>
                <span style="--i:2">A</span>
                <span style="--i:3">D</span>
            </div>
        </a>

        <ul class="nav__menu">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="acerca.html">Acerca</a></li>
            <li><a href="categorias.html">Categorías</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
        <button title="Tema claro/oscuro" id="toggle-menu-btn" type="button"><i class="uil uil-moon"></i></button>
        <button title="Abrir menú" id="open-menu-btn"><i class="uil uil-bars"></i></button>
        <button title="Cerrar menú" id="close-menu-btn"><i class="uil uil-multiply"></i></button>
        
    </div>
        `
    body.appendChild(nav)
        
let footer = document.createElement('footer');
footer.innerHTML = `
    <footer class="footer">
                
        <section class="container footer__container">
            
            <div class="footer__1">
                <a href="index.html" class="footer__logo"><h4>UAD</h4></a>
                <p id="responsive-text">Sitio Web destinado a la capacitación del recurso humano adscrito al área administrativa de las Unidades Administradoras Desconcentradas</p>
            </div>

            <div class="footer__2">
                <h4>Enlaces</h4>
                <ul class="permalinks">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="acerca.html">Acerca</a></li>
                    <li><a href="categorias.html">Categorías</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>

            <div class="footer__4">
                
                <h4>Contáctenos</h4>
                
                <div>
                    <p>+58-412-238.5742</p>
                    <p>+58-212-709.4094</p>
                    <p>uad-seniat@proton.me</p>
                </div>
                
                <ul class="footer__socials">
                    <li><a href="mailto:asiste@seniat.gob.ve" title="Correo"><i class="uil uil-envelope-alt"></i></a></li>
                    <li><a href="https://www.x.com/Seniat_Oficial" title="X.com"><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/seniat_oficial/" title="Instagram"><i class="uil uil-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/noticiasseniat" title="Youtube"><i class="uil uil-youtube"></i></a></li>
                </ul>

            </div>

            <div class="footer__5">

                <div>
                    <img src="./assets/images/undraw_mailbox_re_dvds.svg" alt="contacto">
                </div>

            </div>

        </section>

        <section class="footer__copyright">
            
            <small>&copy; 2024 | Servicio Nacional Integrado de Administración Aduanera y Tributaria | G-20000303-0</small>

        </section>

    </footer>
`
body.appendChild(footer)

// ++++++++++++++++++++++++++++++++++++++++++++++ CHANGE NAVBAR STYLE ON SCROLL +++++++++++++++++++++++++++++++++++++++++

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
});

// ++++++++++++++++++++++++++++++++++++++++++++++ SHOW OR HIDE FAQ ANSWER +++++++++++++++++++++++++++++++++++++++++

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

// ++++++++++++++++++++++++++++++++++++++++++++++ NAV MENU ON SCREENS LESS THAN 1024PX +++++++++++++++++++++++++++++++++++++++++

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

// ++++++++++++++++++++++++++++++++++++++++++++++ DARK THEME MANAGE +++++++++++++++++++++++++++++++++++++++++

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

// persistent dark mode
if(localStorage.getItem('dark-theme') === 'true') {
    document.body.classList.add("dark-theme");
    icon.innerHTML = "<i class='uil uil-sun'></i>";
} else {
    document.body.classList.remove("dark-theme");
    icon.innerHTML = "<i class='uil uil-moon'></i>";
};

// ++++++++++++++++++++++++++++++++++++++++++++++ SHOW POPUP IF LOCAL STORAGE ITEM DOES NOT EXIST +++++++++++++++++++++++++++++++++++++++++

window.addEventListener('load', function() {
    setTimeout(function() {
        // Your code to open the modal goes here
        if (!getLocalStorage("popupClosed")) {
            document.querySelector(".popup").style.display = "block";
            document.body.style.overflow = "hidden";
        }
    }, 1000); // 1000 milliseconds = 1 seconds
});

// Listen for click on the close button
document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup-content video").pause();
    enableScroll();
});

// Listen for changes in the checkbox
document.querySelector("#popup-checkbox").addEventListener("change", function() {
    if (this.checked) {
        // Save to localStorage
        setLocalStorage("popupClosed", true);
    }
});

// Function to create a local storage
function setLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

// Function to get the value of a local storage
function getLocalStorage(name) {
    return localStorage.getItem(name);
}

// ++++++++++++++++++++++++++++++++++++++++++++++ AVOID SCROLL WHEN THE POPUP IS ACTIVE +++++++++++++++++++++++++++++++++++++++++

// Disable scroll on the main page
function enableScroll() {
    document.body.style.overflow = 'visible';
}

// ++++++++++++++++++++++++++++++++++++++++++++++ MODAL FOR MINIMUM BROWSER VERSION +++++++++++++++++++++++++++++++++++++++++
// Object with the minimum required versions for each browser
const minimalBrowserVersions = {
    chrome: 46,
    firefox: 75,
    safari: 11,
    edge: 79,
    opera: 33,
};

// ++++++++++++++++++++++++++++++++++++++++++++++ FUNCTION BROWSER VERSION +++++++++++++++++++++++++++++++++++++++++

function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let M = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        const temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        return {name: 'IE', version: (temp[1] || '')};
    }
    if (M[1] === 'Chrome') {
        const temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
        if (temp != null) return {name: temp[1].replace('OPR', 'Opera'), version: temp[2]};
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((temp = userAgent.match(/version\/(\d+)/i)) != null) M.splice(1, 1, temp[1]);
    return {name: M[0], version: M[1]};
}

// ++++++++++++++++++++++++++++++++++++++++++++++ FUNCTION MINIMUM BROWSER VERSION +++++++++++++++++++++++++++++++++++++++++

function checkBrowserVersion() {
    const browserInfo = getBrowserInfo();
    const browserName = browserInfo.name.toLowerCase();
    const browserVersion = parseInt(browserInfo.version);
    
    if (browserName in minimalBrowserVersions && browserVersion < minimalBrowserVersions[browserName]) {
        // Show the modal with the browser update information
        alert(`Por favor actualice su navegador ${browserName} a la versión ${minimalBrowserVersions[browserName]} o superior para una mejor experiencia en el Sitio Web.`);
    }
}
checkBrowserVersion();

})

// ++++++++++++++++++++++++++++++++++++++++++++++ DOWNLOAD FILES SECTION +++++++++++++++++++++++++++++++++++++++++


function downloadFile(fileUrl) {
    if (fileUrl) {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.substr(fileUrl.lastIndexOf('/') + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error('Error obteniendo el archivo, por favor comuníquese con el administrador.');
    }
}

document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        const fileUrl = this.parentElement.getAttribute('data-file-url');
        downloadFile(fileUrl);
    });
});



// ++++++++++++++++++++++++++++++++++++++++++++++ FUNCTION TO SHOW THE SPLASH SCREEN +++++++++++++++++++++++++++++++++++++++++

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';
}

// Function to hide the splash screen
function hideLoadingScreen() {
const loadingScreen = document.getElementById('loading-screen');
loadingScreen.style.display = 'none';
}

// Call the showLoadingScreen function when the page starts loading
document.addEventListener('DOMContentLoaded', showLoadingScreen);

// Call the hideLoadingScreen function when the page has fully loaded
window.onload = hideLoadingScreen;