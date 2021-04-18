const body = document.body;
const navLinks = [...document.querySelectorAll('section')].map(item => item.id); //Extract the Section names as a nodeList
const linksList = document.querySelector('.items');
const sectionList = document.querySelectorAll('section');
//const classElement = document.querySelector('.active');

function buildNav() {
    for (const link of navLinks) {
        let a = document.createElement("a");
        let li = document.createElement("li");

        a.href = '#' + link;
        a.innerText = link;
        a.setAttribute('class', 'links');

        li.appendChild(a);
        linksList.appendChild(li);
    }
}

buildNav();

//window.addEventListener("load", buildNav);


//Smooth scroll behavior
const getAnchor = 'a[href^="#"]';
const allAnchors = document.querySelectorAll('.links');
allAnchors.forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
        const destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    })
});

/*const menuLength = allAnchors.length;
for (let i = 0; i < menuLength; i++) {
    if (allAnchors[i].href === navLinks) {
        allAnchors[i].className = "active"
    }
}*/