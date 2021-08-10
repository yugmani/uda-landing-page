// cards display of courses
const cards_courses = document.querySelector(".course_cards");

// function coursesCardsDisplay(arr) {
//   return arr.map((course) => course);
// }

let html_course = "";
const displayCourse = (items) => {
  items.map((item) => {
    html_course += `<div class="card">
                <picture>
                 <img src="../media/${item["logo"]}" alt="${item["name"]}" />
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

function testimonialQuote(arr) {
  return arr.filter((student) => student["isGraduated"] === true);
}

let html = "";
const displayQuote = (items) => {
  items.map((item) => {
    html += `<div class="card">
                <picture>
                 <img src="../media/${item["photo"]}" alt="${item["name"]}" />
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

// invoking functions;
displayCourse(courses);
displayQuote(testimonialQuote(students));
enrollmentButton();
