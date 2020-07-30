var saveButton = document.querySelector(".save-button");
var ideaForm = document.querySelector(".idea-form");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var ideaCardsArea = document.querySelector(".idea-cards-main-area");
var deleteButton = document.querySelector(".delete-icon");
var favoritedStar = document.querySelectorAll(".star-active");
var unfavoriteStar = document.querySelectorAll(".star-inactive");
var searchBar = document.querySelector(".search-ideas");
var showStarButton = document.querySelector(".show-ideas-button");
var menu = document.querySelector('.menu');
var hidden = document.querySelectorAll('.hidden');
var overlay = document.querySelector('.overlay');
//query selectors accessing html elements within another documenmt (by class in our case)

showStarButton.addEventListener('click',function() {
  if (showStarButton.innerText === 'Show Starred Ideas') {
    filterStar()
    showStarButton.innerText = 'Show All Ideas'
  } else {
    displayIdeas(displayedIdeas)
    showStarButton.innerText = 'Show Starred Ideas'
  }
})
//this event listener fires a function on a click based on the innerText of the click
  //if innertext is 'Show Starred Ideas'
    //execute filterStar functions
    //& change the innerText of show star button to 'Show All Ideas'
  //if innertext is 'Show All Ideas'
    //execute displayIdeas function & pass displayedIdeas Array which shows every idea card
    //changes the innertext of the show star button back


menu.addEventListener("click", function() {
  if (event.target.classList.contains('hamburger') || event.target.classList.contains('delete-button')) {
    toggleHidden(event)
  }
})
//this event listener is located on the parent element & fires based on the location of a click in its child elements
  //if the click occurs on a child element that contains 'hamburger' or 'delete-button'
    //then the child element that was clicked on will call the toggleHidden function using the click event as the parameter


searchBar.addEventListener("keyup", filterSearchBar);
//this event listener fires filterSearchBar function when a keyup event happens in the searchBar

ideaForm.addEventListener("keyup", checkUserInput);
//this event listener fires checkUserInput function when the keyup event happens in the ideaForm

saveButton.addEventListener("click", function() {
  var currentIdea = createIdeas();
  displayIdeas(displayedIdeas);
  clearFields();
});
//this event listener fires the displayIdeas & clearFields functions when a click happens on the saveButton
  //declaring the currentIdea variable here is an opportunity for refactor.
  //It does not serve a purpose since we changed a later function to display the entire ideas array instead of the currentIdea

saveButton.disabled = true;
//this defaults the saveButton to true

window.addEventListener('load', function() {
  if (localStorage.length === 0) {
    return
  }
  retrieveDisplayIdeasfromLocalStorage()
    displayIdeas(displayedIdeas)
})
//this event listener fires on the page load of the window
  //if local storage is empty the function does nothing
  //if anything is in local storage
    //retrieveDisplayIdeasfromLocalStorage & displayIdeas functions execute
      //retrieveDisplayIdeasfromLocalStorage will put anything in local storage into our displayed ideas array
      //displayIdeas will update the DOM & display the idea retrieved from local storage & display on the page

ideaCardsArea.addEventListener("click", function() {
  if (event.target.classList.contains('star')) {
    toggleStars(event.target.parentElement.parentElement.parentElement.dataset.id);
    saveDisplayedIdeasToLocalStorage()
    displayIdeas(displayedIdeas)
  }
  if (event.target.classList.contains('delete-icon')) {
    deleteFromDataModel(event.target.parentElement.parentElement.parentElement.dataset.id)
    displayIdeas(displayedIdeas)
  }
});
//this event listener fires based on the location of the click
  //if that element contains 'star'
    //the toggle star function will fire up on the targetted id of the event bubble
    //saveDisplayedIdeasToLocalStorage function will run (saving it to local storage based on the value of the star)
    //displayingIdeas will update the DOM & display the idea retrieved from local & show it on the page
  //if that element contains 'delete-icon'
    //deleteFromDataModel function run on the targetted id of the event bubble & remove the entire idea card from the data model
    //displayIdeas function will update the DOM & only show the ideas that are still saved

var displayedIdeas = [];
//this is our data model

function checkUserInput() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}
//this function checks user input boxes for characters
  //if the title text box is not empty AND the body text box is not empty
    //the save button will no longer be disabled
  //otherwise the save button will remain disabled

function createIdeas() {
  var ideaInstance = new Idea(titleInput.value, bodyInput.value, false);
  saveToDataModel(ideaInstance)
  saveDisplayedIdeasToLocalStorage()
  return ideaInstance
}
//this function declares an ideaInstance variable
//that instantiates a new instance of our idea class with title, body & star value of false
//it then saves that idea instance to our data saveToDataModel
//and saves it to local localStorage
//refactor opportunity: we do not need to return the ideaInstance

function displayIdeas(displayedIdeasArray) {
  ideaCardsArea.innerHTML = "";
  var imagePath = window.location.href;
  var starImage;
  for (var i = 0; i < displayedIdeasArray.length; i++) {
    if(displayedIdeasArray[i].star) {
      starImage =`${imagePath}icons/star-active.svg`
    } else {
    starImage = `${imagePath}icons/star.svg`
    }
    var section = document.createElement("section");
    section.classList.add("idea-cards");
    section.dataset.id = displayedIdeasArray[i].id
    section.innerHTML = `<div>
  <p class="idea-card-top">
    <img src="${starImage}" class="star " width="30" height="auto">
    <img src="icons/delete.svg" class="delete-icon" width="30" height="auto">
  </p>
  <section class="idea-card-body">
    <h1 class="idea-card-title">${displayedIdeasArray[i].title}</h1>
    <section class="idea-card-text">
      <p>${displayedIdeasArray[i].body}</p>
     </section>
      <p class="idea-card-comment"><img src="icons/comment.svg" width="30" height="auto">Comment</p>
    </section>
  </div>`
  ideaCardsArea.appendChild(section);
  }
}
//this function reassigns the ideaCardsArea inner html to an empty string
//declares a variable that makes the image source accessible based on the user's computer
//it loops through the data model which is the displayedIdeasArray
  //if an array index star property is equal to true
    //then change the star property to the active star image
  //otherwise change the star image to be inactive star imagePath

//add an html section with its content based on the properties of the index of our loop


function clearFields() {
  event.preventDefault();
  titleInput.value = "";
  bodyInput.value = "";
  saveButton.disabled = true;
}
//event.preventDefault prevents the page from reloading on itself
//we are clearing the title & body text boxes & disabling the saveButton again
//this function is called when the save button is clicked


function toggleStars(id) {
  var imagePath = window.location.href;
  for (var i = 0; i<displayedIdeas.length; i++) {
    if (displayedIdeas[i].id == Number(id) &&   displayedIdeas[i].star) {
      displayedIdeas[i].star = false
    } else if (displayedIdeas[i].id == Number(id) && !displayedIdeas[i].star) {
      displayedIdeas[i].star = true
    }
  }
}
//this function iterates through displayedIdeasArray
  //if the ID of that index is loosely equal to the ID parameter AND if it has a star value of true
    //then the star property value will be reassigned to false
  //if it doesn't have the star property value of true
    //then the star property value will be reassigned to true
//refactor opportunity: we do not need the imagePath variable

function updateDisplayIdeas(idea) {
  displayedIdeas.forEach(function(ideaInDisplayedIdeas,i) {
    if (ideaInDisplayedIdeas.id === idea.id) {
      displayedIdeas[i].title = idea.title;
      displayedIdeas[i].body = idea.body;
      displayedIdeas[i].star = idea.star;
    }
  })
}
//initially this was updating our data model with the title, body & star
//refactor opportunity: we may no longer need this function

function saveDisplayedIdeasToLocalStorage() {
  var displayedIdeasString = JSON.stringify(displayedIdeas)
  localStorage.setItem('displayedIdeas',displayedIdeasString)
}
//this function is turning the datamodel into a string
//to be stored in local storage

function retrieveDisplayIdeasfromLocalStorage() {
  var displayIdeasInLocalStorage = JSON.parse(localStorage.getItem('displayedIdeas'))
    if (displayedIdeas.length > 0) {
      displayedIdeas = displayedIdeas.concat(displayIdeasInLocalStorage)
    } else {
      displayedIdeas = displayIdeasInLocalStorage
    }
}
//this function is retrieving the data from local storage & converting it from a string back to an array
  //if displayed ideas array is not empty then concatenate the array from local storage to the data model Array
  //else reassign displayedIdeasArray to be equal to the displayIdeasInLocalStorage array

function deleteFromDataModel(id) {
  for (var i = 0; i<displayedIdeas.length; i++) {
    if (displayedIdeas[i].id == Number(id)) {
      displayedIdeas.splice(i, 1)
    }
  }
  saveDisplayedIdeasToLocalStorage()
}
//this function takes an id as a parameter
  //iterates through the datamodel which is the displayedIdeas array
    //if the id at that index loosely equal the id argument that's passed
      //splice that object from the displayed ideas array
    //save the updated data model displayedideas array to local storage


function saveToDataModel(idea) {
    displayedIdeas.push(idea)
  }
//this function takes an idea & puts it in our data model (displayed ideas array)


function getGreatGrandpaElement(event) {
  return event.parentElement.parentElement.parentElement
}
//refactor opportunity: we no longer need this function

function figureStarSource(idea) {
  var imagePath = window.location.href;
  if (idea.star) {
    return `${imagePath}icons/star-active.svg`
  }
  else {
    return `${imagePath}icons/star.svg`
  }
}
//refactor opportunity: we no longer need this function

function filterSearchBar() {
var searchInputValue = searchBar.value.toUpperCase()
var toDisplay = displayedIdeas.filter(function(object) {
  if (object.title.toUpperCase().includes(searchInputValue) || object.body.toUpperCase().includes(searchInputValue)) {
    return object;
  }
})
  displayIdeas(toDisplay)
}
//declare variable searchInputValue that is assigned to the uppercase of the value in the search bar
//filter displayedIdeas array based on whether or not title & property value contain the input value
  //if the uppercase value in the title or body field includes what was typed in the search bar
    //create a new array based on if the text in the text box includes the title or idea property
    //then we will return that idea card object
//we will display the filtered array (displayIdeas)

function filterStar() {
  var toDisplay = displayedIdeas.filter(function(object) {
    if (object.star) {
      return object;
    }
  })
  displayIdeas(toDisplay)
}
//this function assigns the variable toDisplay (a new array) to have the value of the filtered displayedIdeas array
//

function toggleHidden(event) {
  var imagePath = window.location.href;
  if (event.target.classList.contains('hamburger')) {
    turnBurgerToDelete(imagePath);
  } else {
    turnDeleteToBurger(imagePath);
  }
}

function turnBurgerToDelete(imagePath) {
  removeFromClassList(event.target, 'hamburger');
  event.target.classList.add('delete-button');
  event.target.src = `${imagePath}icons/menu-close.svg`
  removeFromClassList(event.target, 'hidden');
  hidden.forEach(function(element) {
    removeFromClassList(element, 'hidden');
  })
}

function removeFromClassList(element, item) {
  element.classList.remove(item);
}

function turnDeleteToBurger(imagePath) {
  removeFromClassList(event.target, 'delete-button');
  addToClassList(event.target, 'hamburger');
  event.target.src = `${imagePath}icons/menu.svg`
  removeFromClassList(event.target, 'hidden');
  hidden.forEach(function(element) {
    addToClassList(element, 'hidden');
  })
    addToClassList(overlay, 'hidden');
}

function addToClassList(element, item) {
  element.classList.add(item)
}
