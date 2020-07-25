var saveButton = document.querySelector(".save-button");
var ideaForm = document.querySelector(".idea-form");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");

saveButton.disabled = true; //need to add class in CSS to change appearance
saveButton.addEventListener("click", FUNCTIONNAME); //add function name to fire when save button clicked;
ideaForm.addEventListener("keyup", checkUserInput);


function checkUserInput() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.disabled = false;
  }
}
