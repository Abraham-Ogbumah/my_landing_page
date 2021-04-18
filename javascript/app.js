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
const anchor = document.querySelectorAll('.links');
anchor.forEach(a => {
    a.addEventListener('click', function(evt) {
        evt.preventDefault();
        const destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    })
});