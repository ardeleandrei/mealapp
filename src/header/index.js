import M from 'mustache'
import template from './index.html'
import './index.css'
import Button from './button'
import Search from './search'
import Toggle from './toggle'
import Title from './title'

class Header {
  render () {

    var html = M.render(template, {},
    {
     title: new Title().render(),
    button: new Button().render(),
    search: new Search().render(),
    toggle: new Toggle().render()
    })
    return html
  }
}

export default Header
