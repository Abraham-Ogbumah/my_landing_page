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

//gives boolean value if section is in viewport
function isInViewport(e) {
    let bounding = e.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//highlights corresponding section of navbar if section is in viewport
const navHighlight = document.querySelector('.nav_bar').querySelectorAll('a');

function highlightSection() {
    for (let i = 0; i < sectionList.length; i++) {
        if (isInViewport(sectionList[i]) === true) {
            navHighlight[i].classList.add('active')
        } else navHighlight[i].classList.remove('active');
    }
}


document.addEventListener('scroll', highlightSection);