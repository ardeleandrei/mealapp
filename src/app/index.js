import M from 'mustache'
import * as api from '../api'

// components

import Content from '../content'
import Header from '../header'

// css & html
import template from './index.html'
import './index.css'

class App {
  render ($container, meal) {
    const html = M.render(template, {}, {
      header: new Header().render(),
      content: new Content().render(meal)
    })
    $container.innerHTML = html
  }

  async run ($parent) {
    const meal = await api.getMeal()
    this.render($parent, meal)
  }
}

export default App
