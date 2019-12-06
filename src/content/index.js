import M from 'mustache'
import template from './index.html'
import './index.css'

class Content {
  render (meal) {
    if (!meal) {
      return ''
    }

    var html = M.render(template, {
      title: meal.strMeal,
      mealCategory: meal.strCategory,
      mealDescription: meal.strInstructions
    })
    return html
  }
}

export default Content
