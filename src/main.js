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
  var currentIdea = createIdeas();
  displayIdeas(currentIdea);
  clearFields();
});
window.addEventListener('load', function(){
if(localStorage.length === 0){
  return
}
console.log(localStorage)
  retrieveDisplayIdeasfromLocalStorage()

  for(var i = 0; i<displayedIdeas.length; i++){
    displayIdeas(displayedIdeas[i])
  }
})

ideaForm.addEventListener("keyup", checkUserInput);

ideaCardsArea.addEventListener("click", function() {
  if(event.target.classList.contains('star')){
    toggleStars(event.target);
  }
  if(event.target.classList.contains('delete-icon')){
    deleteFromDataModel(event.target.parentElement.parentElement.parentElement.dataset.id)
    event.target.parentElement.parentElement.parentElement.innerHTML=''
  }
});

var displayedIdeas = [];

function checkUserInput() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.disabled = false;
  }
}

function createIdeas() {
  var ideaInstance = new Idea(titleInput.value, bodyInput.value, false);
  saveToDataModel(ideaInstance)
  saveDisplayedIdeasToLocalStorage()
  return ideaInstance
}

function displayIdeas(idea) {
  var section = document.createElement("section");
  section.classList.add("idea-cards");
  section.dataset.id = idea.id
  //add section.id.add to select by id for deletion
  section.innerHTML = `<div>
  <p class="idea-card-top">
    <img src="icons/star.svg" class="star " width="30" height="auto">
    <img src="icons/delete.svg" class="delete-icon" width="30" height="auto">
  </p>
  <section class="idea-card-body">
    <h1 class="idea-card-title">${idea.title}</h1>
    <section class="idea-card-text">
      <p>${idea.body}</p>
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
  var imagePath = window.location.href+'/';
  console.log(element.src)
  console.log(imagePath);
  console.log("star off", element.src == "./icons/star.svg")
  console.log("active star", element.src == "./icons/star-active.svg")
  //toggle hidden class on star icon to be active or inactive;
  var activeStarImage = `${imagePath}icons/star-active.svg`
  var inactiveStarImage = `${imagePath}icons/star.svg`
  if (element.src == inactiveStarImage) {
    element.src = activeStarImage
   } else {
      element.src = inactiveStarImage
    }
}
function updateDisplayIdeas(idea){
  displayedIdeas.forEach(function(ideaInDisplayedIdeas,i){
    if(ideaInDisplayedIdeas.id === idea.id){
      displayedIdeas[i].title = idea.title;
      displayedIdeas[i].body = idea.body;
      displayedIdeas[i].star = idea.star;
    }
  })
}
function saveDisplayedIdeasToLocalStorage(){
  var displayedIdeasString = JSON.stringify(displayedIdeas)
  localStorage.setItem('displayedIdeas',displayedIdeasString)
}

function retrieveDisplayIdeasfromLocalStorage(){
var displayIdeasInLocalStorage = JSON.parse(localStorage.getItem('displayedIdeas'))
if(displayedIdeas.length > 0){
  displayedIdeas = displayedIdeas.concat(displayIdeasInLocalStorage)

}else{
  displayedIdeas = displayIdeasInLocalStorage
console.log('when changed',displayedIdeas)
}

}
function deleteFromDataModel(id){
  console.log(displayedIdeas[0])
  console.log(localStorage)
  console.log(displayedIdeas[0].id)
  for(var i = 0; i<displayedIdeas.length; i++){
    if(displayedIdeas[i].id == Number(id)){
      displayedIdeas.splice(i,1)
    }
  }
  console.log(displayedIdeas)
  saveDisplayedIdeasToLocalStorage()
}
function saveToDataModel(idea) {
  displayedIdeas.push(idea)
}
