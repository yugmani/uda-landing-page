const students = [
  {
    name: "Vernonica",
    dateIn: "01/01/2021",
    birthDate: "02/02/2000",
    photo: "DSC07201.JPG",
    course: "Basic JavaScript",
    feedback:
      "This is the course you should not miss, if you want to master the basics of JavaScript. We don't just learn coding but also we collaborate, teach each other and explore more.",
    isGraduated: true,
  },
  {
    name: "Andrew",
    dateIn: "03/01/2021",
    birthDate: "01/30/2001",
    photo: "free_website_wallpaper_backgrounds_012.jpg",
    course: "Advanced HTML5 & CSS3",
    feedback:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nostrum eveniet nulla corporis facilis velit     dignissimos ab ipsam illo mollitia!",
    isGraduated: true,
  },
  {
    name: "Benjamin",
    dateIn: "04/01/2021",
    birthDate: "04/30/2003",
    photo: "free_website_wallpaper_backgrounds_012.jpg",
    course: "Advanced JavaScript",
    feedback:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nostrum eveniet nulla corporis facilis velit     dignissimos ab ipsam illo mollitia!",
    isGraduated: true,
  },
];

const courses = [
  {
    title: "Basics to Advanced HTML5/CSS3",
    logo: "html5.png",
    duration: 4,
    hours: 20,
    instructors: ["Madhu", "Adam", "Maya"],
    cost: 200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus.",
    weblink: "https://www.w3schools.com/html/default.asp",
  },

  {
    title: "Basics to Advanced JavaScript",
    logo: "js.png",
    duration: 4,
    hours: 30,
    instructors: ["Shova", "Prakash", "Barun"],
    cost: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus.",
    weblink: "https://www.w3schools.com/js/default.asp",
  },
  {
    title: "Introducotry jQuery",
    logo: "jquery.png",
    duration: 2,
    hours: 20,
    instructors: ["Vikash", "Aakash", "Jennifer"],
    cost: 200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus.",
    weblink: "https://www.w3schools.com/js/default.asp",
  },
];

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

displayCourse(courses);

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

displayQuote(testimonialQuote(students));
