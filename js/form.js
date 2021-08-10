const submitEl = document.getElementById("form_submit");

submitEl.addEventListener("click", function (event) {
  event.preventDefault();
  radioButtonValidate();
});

function radioButtonValidate() {
  let checked = 0;
  const radioEl = document.getElementsByName("mode");
  for (let i = 0; i < radioEl.length; i++) {
    if (radioEl[i].checked) {
      checked++;
      msgDisplay();
    }
  }
  if (checked < 1) {
    alert("Please select the mode of the class that you prefer...");
  }
}

function msgDisplay() {
  const containerEl = document.querySelector(".container");
  const formDiv = document.getElementById("enrollment_form");
  let newDiv = document.createElement("div");
  let html = `
          <h1>Congratulations!</h1>
          <h2>You are successfully enrolled!</h2>
          <p>We will send you further information of your course in your email.</p>
          <h3>Thank you for being a part of us.<h3>
            `;
  newDiv.className = "enrollment_message";
  newDiv.innerHTML = html;
  // containerEl.appendChild(newDiv);
  document.body.appendChild(newDiv);
  containerEl.style.display = "none";
}
