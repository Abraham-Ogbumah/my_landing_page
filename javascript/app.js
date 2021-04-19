const body = document.body;
const navLinks = [...document.querySelectorAll('section')].map(item => item.id); //Extract the Section names as a nodeList, convert to an array and store is navLinks
const linksList = document.querySelector('.items'); //get the element with a class selector of items and assign to linksList
const sectionList = document.querySelectorAll('section'); //Get all sections and store in a nodelist


/*******************************************************
The function below build a dynamic nav bar using the section
ids by creating the li and a elements and appends both the
the unordered list The class and data-sections are also
assigned to the a elements once created

The nav bar is built such that when new sections are created,
they are automatically added to the navigation items
********************************************************/
function buildNav() {
    for (const link of navLinks) {
        let a = document.createElement("a");
        let li = document.createElement("li");

        a.href = '#' + link;
        a.innerText = link;
        a.setAttribute('class', 'links');
        a.setAttribute('data-section', a.innerText);

        li.appendChild(a);
        linksList.appendChild(li);
    }
}

buildNav();


//The function below implements the smooth scroll behavior
const anchor = document.querySelectorAll('.links');
anchor.forEach(a => {
    a.addEventListener('click', function(evt) {
        evt.preventDefault();
        const destinationLink = document.querySelector(this.hash);
        destinationLink.scrollIntoView({
            behavior: 'smooth'
        });
    })
});

// Add class 'active' to section when near top of viewport
function addActiveClass() {
    for (let section of sectionList) {
        const item = section.getBoundingClientRect();
        const activeElement = document.getElementById(section.id);
        if (item.y <= 90 && item.bottom >= 100) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
}

//the event listener listens for a scroll event and call the corresponding section to add the active class
document.addEventListener('scroll', addActiveClass);