const body = document.body;
const navLinks = [...document.querySelectorAll('section')].map(item => item.id); //Extract the Section names as a nodeList
const linksList = document.querySelector('.items');
const classElement = document.querySelector('.active');

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

function removeClassActive() {
    for (const classEle of classElement) {
        classEle.addEventListener("click", function() {
            classEle.classList.remove('active');
            //const current = document.getElementsByTagName("section");
            //current.classList.remove('active');
            //current.classList.add('active');
        })
    }
}


window.addEventListener("load", buildNav);

removeClassActive();