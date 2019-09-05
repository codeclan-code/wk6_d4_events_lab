document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  //title input
  const handleInput = function(event){
    const inputtedText = event.target.value
    // console.log(inputtedText);
    const resultParagraph = document.querySelector('#reading-list');
    // resultParagraph.textContent = inputtedText;
  }
  const titleTextInput = document.querySelector('#title')
  // titleTextInput.addEventListener('input', handleInput)

  const authorTextInput = document.querySelector('#author')
  // authorTextInput.addEventListener('input', handleInput)

  //Select list

  const changeSelectValue = function(event){
    const selectedValue = event.target.value
    // console.log(selectedValue);
    const resultParagraph = document.querySelector('#reading-list');
    // resultParagraph.textContent = selectedValue;
  }
  const selectInput = document.querySelector('#category')
  // selectInput.addEventListener('change',changeSelectValue)

  //Submit button

  const handleFormSubmit = function(event){
    event.preventDefault();

    const newReadingListItem = document.createElement('p')
    const body = document.querySelector('body')
    body.appendChild(newReadingListItem)
    newReadingListItem.classList.add('red')
    newReadingListItem.textContent = `
    ${event.target.title.value}
    ${event.target.author.value}
    ${event.target.category.value}`
  }

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)


})
