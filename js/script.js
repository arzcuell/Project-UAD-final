
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

// persistent dark mode
if(localStorage.getItem('dark-theme') === 'true') {
    document.body.classList.add("dark-theme");
    icon.innerHTML = "<i class='uil uil-sun'></i>";
} else {
    document.body.classList.remove("dark-theme");
    icon.innerHTML = "<i class='uil uil-moon'></i>";
};

// Show popup if the localStorage item does not exist
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

// Function to get the user's browser and version
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

// Function to show the modal if the browser does not meet the minimum version
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



window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');
});