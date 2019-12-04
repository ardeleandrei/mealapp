/** @format */

function darkMode() {
  const { body } = document
  if (body.classList.contains('darkMode')) {
    body.classList.remove('darkMode')
  } else {
    body.classList.add('darkMode')
  }
}

export { darkMode };