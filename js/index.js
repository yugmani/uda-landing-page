// Function to Generate navbar items
const sections = document.querySelectorAll(".section");

let ids = []; // Getting array of section ID names

sections.forEach((section) => {
  ids.push(section.attributes[0].nodeValue);
});

(function () {
  const navEl = document.querySelector(".navbar");
  let html_navbar = "";

  //iterating through nav items and displaying on the page
  ids.map((id) => {
    if (ids.indexOf(id) === 0) {
      html_navbar += `<li class="nav-item active">${id}</li>`;
    } else {
      html_navbar += `<li class="nav-item">${id}</li>`;
    }
  });

  navEl.innerHTML = html_navbar;
})();

// function to display course items in the page
const cards_courses = document.querySelector(".course_cards");
let html_course = "";

const displayCourse = (items) => {
  items.map((item) => {
    html_course += `
        <div class="card">
            <picture>
                <img src="./assets/media/${item["logo"]}" alt="${item["name"]}" />
            </picture>
              
            <div class="story">
                <div class="course_title">
                  ${item["title"]}
                </div>
                <div class="brief">
                  <div><strong>Duration: </strong><span class="brief-span">${item["duration"]} weeks @ ${item["hours"]}hrs per week<span></div>             
                  <div><strong>Course Fee:</strong><span class="brief-span"> $${item["cost"]}</span></div>
                </div>
                <div class="course-headline"> ${item["description"]}</div>
            </div>
            <a href=${item["weblink"]} target="_blank">More...</a>
        </div>
    `;
  });

  cards_courses.innerHTML = html_course;
};

// function iterating through the data of student data;
const cardsEl = document.querySelector(".testi_cards");

function testimonialQuote(arr) {
  return arr.filter((student) => student["isGraduated"] === true);
}

// function to display quotes into page
let html = "";

const displayQuote = (items) => {
  items.map((item) => {
    html += `<div class="card">
                <picture>
                 <img src="./assets/media/${item["photo"]}" alt="${item["name"]}" />
                </picture>
              <div class="story">
                <blockquote class="headline">
                  ${item["feedback"]}
                </blockquote>
                <div class="profile">${item["name"]},<span id="profile-course"> ${item["course"]}</span></div>
              </div>
            </div>
  `;
  });

  cardsEl.innerHTML = html;
};

// To direct to enrollment form while clicking on enroll button
function enrollmentButton() {
  const btnEnrollment = document.querySelectorAll(".btn-course");

  for (let i = 0; i < btnEnrollment.length; i++) {
    btnEnrollment[i].addEventListener("click", function () {
      location.href = "../assets/forms.html";
    });
  }
}

// Navigation and scrolling while clicking on menu items
const navlist = document.querySelectorAll(".nav-item");
const sectionList = document.querySelectorAll("section");

// Adding event listener to scrollview of target id;
navlist.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    //remove active class
    removeActiveClass();
    const id = e.target.textContent.toLowerCase();
    //add active class
    e.target.className = "active";
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  });
});

// To remove class 'active' from each item;
function removeActiveClass() {
  navlist.forEach((item) => {
    item.classList.remove("active");
  });
}

// Eventlistner to display menu bar
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  hamburger.style.display = "none";
  navClass.style.display = "block";
  closeWindow.style.display = "block";
});

// Eventlistener to close menu bar
const closeWindow = document.getElementById("close-window");
const navClass = document.querySelector(".nav");

closeWindow.addEventListener("click", (e) => {
  e.preventDefault();
  hamburger.style.display = "block";
  navClass.style.display = "none";
  closeWindow.style.display = "none";
});

// invoking functions;
displayCourse(courses);
displayQuote(testimonialQuote(students));
enrollmentButton();

// Implementing the Intersection Observer API
const myOptions = {
  root: null,
  thresholds: 0.3,
  rootMargin: "-100px",
};

const cbFunction = (entries) => {
  const [entry] = entries;

  if (entry.isIntersecting) {
    removeActiveClass();

    const idName = entry.target.attributes[0].nodeValue;
    const navlistIndexed = navlist[ids.indexOf(idName)];
    navlistIndexed.classList.add("active");
  }
};

const myObserver = new IntersectionObserver(cbFunction, myOptions);

sections.forEach((section) => {
  myObserver.observe(section);
});
