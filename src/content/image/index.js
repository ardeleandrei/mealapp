import M from 'mustache'
import './index.html'
import template from './index.html'
import './index.css'

class Image {
    render(meal) {
        if (!meal) {
            return ''
          }
        image = document.getElementById("foodImage");
        image.style.backgroundImage = `url('${meal.strMealThumb}')`
        var html = template
        return html
    }
}

export default Image