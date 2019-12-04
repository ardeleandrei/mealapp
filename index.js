/**
 * @format
 * @author Andrei Ardelean
 * @file This file fetches data from API
 */

import { darkMode } from "./darkmode.js"

var strYoutube = null
const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

function generate() {
  const mealTitle = document.getElementsByTagName('h1')[1]
  const category = document.getElementById('category')
  const tags = document.getElementById('tags')
  const instructions = document.getElementById('instructions')
  const ul = document.getElementById('list')
  const image = document.getElementById('foodImage')

  const request = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.meals[0].strYoutube)
    strYoutube = data.meals[0].strYoutube
    mealTitle.innerHTML = `${data.meals[0].strMeal}`
    strYoutube = strYoutube.replace('watch?v=', 'embed/')
    document.getElementById('videoElement').src = strYoutube
    image.style.backgroundImage = `url('${data.meals[0].strMealThumb}')`
    category.innerHTML = `<span>Category</span>: ${data.meals[0].strCategory}`
    tags.innerHTML = `<span>Tags</span>: ${data.meals[0].strTags}`
    instructions.innerHTML = `${data.meals[0].strInstructions}`

    ul.innerHTML = ''
    for (let i = 0; i < 21; i++) {
      const aux = `strIngredient${i}`
      if (data.meals[0][aux]) {
        const li = document.createElement('li')
        li.style.color = document.getElementById('instructions').style.color
        li.appendChild(document.createTextNode(data.meals[0][aux]))
        ul.appendChild(li)
      }
    }
  }
  request()
  
}

function toggleModal() {
  const modal = document.getElementById('modalVideo')
  const iframe = document.getElementById('videoElement')
  if (modal.style.visibility == 'hidden') {
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
  } else {
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'
    iframe.src = strYoutube
  }
}

function clickOutside() {
  document.addEventListener('click', function (event) {
    var clickedElem = event.target
    if (clickedElem.id == 'modalVideo') {
      toggleModal();
    }
  }, false)
}

clickOutside()
window.onload = generate();
document.getElementById("foodImage").addEventListener("click", toggleModal);
document.getElementById("closeBtn").addEventListener("click", toggleModal);
document.getElementById("getMealBtn").addEventListener("click", generate);
document.getElementById("getMealBtn").addEventListener("click", generate);
document.getElementById("modeToggle").addEventListener("click", darkMode);