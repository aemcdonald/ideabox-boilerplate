var saveButton = document.querySelector(".save-button");
var ideaForm = document.querySelector(".idea-form");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var ideaCardsArea = document.querySelector(".idea-cards-main-area");
var deleteButton = document.querySelector(".delete-icon");
var favoritedStar = document.querySelectorAll(".star-active");
var unfavoriteStar = document.querySelectorAll(".star-inactive");

saveButton.disabled = true; //need to add class in CSS to change appearance
saveButton.addEventListener("click", function(){
  createIdeas();
  displayIdeas();
  clearFields();
});
ideaForm.addEventListener("keyup", checkUserInput);

ideaCardsArea.addEventListener("click", function() {
  toggleStars(event.target);
});

var displayedIdeas = [];

function checkUserInput() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.disabled = false;
  }
}

function createIdeas() {
  var ideaInstance = new Idea(titleInput.value, bodyInput.value, false);
  displayedIdeas.unshift(ideaInstance);
}

function displayIdeas() {
  var section = document.createElement("section");
  section.classList.add("idea-cards");
  //add section.id.add to select by id for deletion
  section.innerHTML = `<div>
  <p class="idea-card-top">
    <img src="icons/star-active.svg" class="star star-active none" width="30" height="auto">
    <img src="icons/star.svg" class="star star-inactive" width="30" height="auto">
    <img src="icons/delete.svg" class="delete-icon" width="30" height="auto">
  </p>
  <section class="idea-card-body">
    <h1 class="idea-card-title">${displayedIdeas[0].title}</h1>
    <section class="idea-card-text">
      <p>${displayedIdeas[0].body}</p>
     </section>
      <p class="idea-card-comment"><img src="icons/comment.svg" width="30" height="auto">Comment</p>
    </a>
    </section>
  </div>`
  ideaCardsArea.appendChild(section);
}

function clearFields() {
  event.preventDefault();
  titleInput.value = "";
  bodyInput.value = "";
}

function toggleStars(element) {

}
