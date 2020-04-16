const button = document.getElementById('categories')
const listElements = document.querySelector('.drop-content')

function handlerClick() {
  if (listElements.className.includes('show')) {
    listElements.classList.remove('show')
  } else {
    listElements.classList.add('show')
  }
}

button.addEventListener('click', handlerClick)
