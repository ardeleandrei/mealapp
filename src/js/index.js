/**
 * @format
 * @author Andrei Ardelean
 * @file This file fetches data from API
 */

import { darkMode } from './darkmode.js'

var strYoutube = null
const defaultURL = 'https://www.themealdb.com/api/json/v1/1/random.php'
const searchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

function generate(url) {
  const mealTitle = document.getElementsByTagName('h1')[1]
  const category = document.getElementById('category')
  const tags = document.getElementById('tags')
  const instructions = document.getElementById('instructions')
  const ul = document.getElementById('list')
  const image = document.getElementById('foodImage')

  const request = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      var rndm = 0
      if (url.includes('search')) {
        rndm = Math.floor(Math.random() * Math.floor(data.meals.length))
      }
      strYoutube = data.meals[rndm].strYoutube
      mealTitle.innerHTML = `${data.meals[rndm].strMeal}`
      strYoutube = strYoutube.replace('watch?v=', 'embed/')
      document.getElementById('videoElement').src = strYoutube
      image.style.backgroundImage = `url('${data.meals[rndm].strMealThumb}')`
      category.innerHTML = `<span>Category</span>: ${data.meals[rndm].strCategory}`

      tags.innerHTML = data.meals[rndm].strTags ? `<span>Tags</span>: ${data.meals[rndm].strTags}` : ''
      instructions.innerHTML = `${data.meals[rndm].strInstructions}`
      ul.innerHTML = ''
      for (let i = 0; i < 21; i++) {
        const ingrLabel = `strIngredient${i}`
        const measureLabel = `strMeasure${i}`
        if (data.meals[rndm][ingrLabel]) {
          const li = document.createElement('li')
          li.style.color = document.getElementById('instructions').style.color
          li.appendChild(document.createTextNode(`${data.meals[rndm][ingrLabel]} - ${data.meals[rndm][measureLabel]}`))
          ul.appendChild(li)
        }
      }
    } catch (e) {
      console.error(e)
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
  console.log('test')
}

window.onload = generate(defaultURL)
document.getElementById('foodImage').addEventListener('click', toggleModal)
document.getElementById('modalVideo').addEventListener('click', toggleModal)

document.getElementById('getMealBtn').addEventListener('click', function() {
  generate(defaultURL)
}, false)
document.getElementById('modeToggle').addEventListener('click', darkMode)
document.getElementById('searchButton').addEventListener('click', initSearch)
document.getElementById('searchTerm').onkeydown = function(e) {
  if (e.keyCode == 13) {
    initSearch()
  }
}

function initSearch() {
  console.log(document.getElementById('searchTerm').value)
  const val = document.getElementById('searchTerm').value
  generate(`${searchURL}${val}`)
}
