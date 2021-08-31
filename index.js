// Generating navbar items
(function () {
  // array of navbar items
  const navItems = ["home", "courses", "testimonials", "description"];

  const navEl = document.querySelector(".navbar");
  let html_navbar = "";

  //iterating through nav items and displaying on the page
  navItems.map((item) => {
    // default active state for nav item 'home';
    if (navItems.indexOf(item) === 0) {
      html_navbar += `<li class="nav-item active">${item}</li>`;
    } else {
      html_navbar += `<li class="nav-item">${item}</li>`;
    }
  });

  navEl.innerHTML = html_navbar;
})();

// cards display of courses
const cards_courses = document.querySelector(".course_cards");

let html_course = "";

// function to display course items in the page
const displayCourse = (items) => {
  items.map((item) => {
    html_course += `<div class="card">
                <picture>
                 <img src="./media/${item["logo"]}" alt="${item["name"]}" />
                </picture>
              <div class="story">
                <div class="course_title">
                  ${item["title"]}
                </div>
                <div class="brief">
                <div>Duration:<span class="brief-span"> ${item["duration"]} weeks & ${item["hours"]}hrs per week<span></div>             
                <div>Course Fee: <span class="brief-span"> $${item["cost"]}</span></div>
                </div>
                <div class="headline"> ${item["description"]}</div>
              </div>
              <a href=${item["weblink"]}>More...</a>
            </div>
  `;
  });

  cards_courses.innerHTML = html_course;
};

// cards display style of testimonials
const cardsEl = document.querySelector(".testi_cards");

// function iterating through the data of student data;
function testimonialQuote(arr) {
  return arr.filter((student) => student["isGraduated"] === true);
}

let html = "";

// function to display quotes into page
const displayQuote = (items) => {
  items.map((item) => {
    html += `<div class="card">
                <picture>
                 <img src="./media/${item["photo"]}" alt="${item["name"]}" />
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

// To direct to enrollment form when clicking on enroll button
function enrollmentButton() {
  const btnEnrollment = document.querySelectorAll(".btn-course");

  for (let i = 0; i < btnEnrollment.length; i++) {
    btnEnrollment[i].addEventListener("click", function () {
      location.href = "../forms.html";
    });
  }
}

// Navigation and scrolling
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
    document.getElementById(id).classList.add("section_active");
  });
});

// To remove class 'active' from each item;
function removeActiveClass() {
  //to remove active class from navbar items
  navlist.forEach((item) => {
    item.classList.remove("active");
  });
  // to remove active class from sections
  sectionList.forEach((element) => {
    element.classList.remove("section_active");
  });
}

// invoking functions;
displayCourse(courses);
displayQuote(testimonialQuote(students));
enrollmentButton();
