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
  "Basics of HTML5/CSS3",
  "Advanced HTML5/CSS3",
  "Basics of JavaScript",
  "Advanced JavaScript",
  "Introducotry jQuery",
];

const cardsEl = document.querySelector(".cards");

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
                <div class="student-profile">${item["name"]},<span id="profile-course"> ${item["course"]}</span></div>
              </div>
            </div>
  `;
  });
  cardsEl.innerHTML = html;
};

displayQuote(testimonialQuote(students));
