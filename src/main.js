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

showStarButton.addEventListener('click',function() {
  if (showStarButton.innerText === 'Show Starred Ideas') {
    filterStar()
    showStarButton.innerText = 'Show All Ideas'
  } else {
    displayIdeas(displayedIdeas)
    showStarButton.innerText = 'Show Starred Ideas'
  }
})

menu.addEventListener("click", function() {
  if (event.target.classList.contains('hamburger') || event.target.classList.contains('delete-button')) {
    toggleHidden(event)
  }
})

searchBar.addEventListener("keyup", filterSearchBar);

ideaForm.addEventListener("keyup", checkUserInput);

saveButton.addEventListener("click", function() {
  var currentIdea = createIdeas();
  displayIdeas(displayedIdeas);
  clearFields();
});

saveButton.disabled = true;

window.addEventListener('load', function() {
  if (localStorage.length === 0) {
    return
  }
  retrieveDisplayIdeasfromLocalStorage()
    displayIdeas(displayedIdeas)
})

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

var displayedIdeas = [];

function checkUserInput() {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}

function createIdeas() {
  var ideaInstance = new Idea(titleInput.value, bodyInput.value, false);
  saveToDataModel(ideaInstance)
  saveDisplayedIdeasToLocalStorage()
  return ideaInstance
}

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

function clearFields() {
  event.preventDefault();
  titleInput.value = "";
  bodyInput.value = "";
  saveButton.disabled = true;
}

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

function updateDisplayIdeas(idea) {
  displayedIdeas.forEach(function(ideaInDisplayedIdeas,i) {
    if (ideaInDisplayedIdeas.id === idea.id) {
      displayedIdeas[i].title = idea.title;
      displayedIdeas[i].body = idea.body;
      displayedIdeas[i].star = idea.star;
    }
  })
}

function saveDisplayedIdeasToLocalStorage() {
  var displayedIdeasString = JSON.stringify(displayedIdeas)
  localStorage.setItem('displayedIdeas',displayedIdeasString)
}

function retrieveDisplayIdeasfromLocalStorage() {
  var displayIdeasInLocalStorage = JSON.parse(localStorage.getItem('displayedIdeas'))
    if (displayedIdeas.length > 0) {
      displayedIdeas = displayedIdeas.concat(displayIdeasInLocalStorage)
    } else {
      displayedIdeas = displayIdeasInLocalStorage
      console.log('when changed',displayedIdeas)
    }
}

function deleteFromDataModel(id) {
  for (var i = 0; i<displayedIdeas.length; i++) {
    if (displayedIdeas[i].id == Number(id)) {
      displayedIdeas.splice(i, 1)
    }
  }
  console.log(displayedIdeas)
  saveDisplayedIdeasToLocalStorage()
}
  function saveToDataModel(idea) {
    displayedIdeas.push(idea)
}

function getGreatGrandpaElement(event) {
  return event.parentElement.parentElement.parentElement
}

function figureStarSource(idea) {
  var imagePath = window.location.href;
  if (idea.star) {
    return `${imagePath}icons/star-active.svg`
  }
  else {
    return `${imagePath}icons/star.svg`
  }
}

  function filterSearchBar() {
    var searchInputValue = searchBar.value.toUpperCase()
    var toDisplay = displayedIdeas.filter(function(object) {
      if (object.title.toUpperCase().includes(searchInputValue) || object.body.toUpperCase().includes(searchInputValue)) {
        return object;
      }
    })
    displayIdeas(toDisplay)
    }

    function filterStar() {
      var toDisplay = displayedIdeas.filter(function(object) {
        if (object.star) {
          return object;
        }
      })
      displayIdeas(toDisplay)
    }

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
