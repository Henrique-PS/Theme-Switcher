const toggle = document.getElementById('switch')
const body = document.querySelector('body')

toggle.onchange = () => {
  toggle.removeAttribute('checked')
  body.classList.toggle('darkMode')
  body.classList.toggle('lightMode')
}
