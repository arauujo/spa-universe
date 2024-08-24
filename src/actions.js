import * as el from './elements.js'

export function changeBg() {
  const pathname = window.location.pathname

  removeAllClass()

  if (pathname === '/') {
    el.home.classList.add('active')
    el.app.classList.add('items-center')
    el.app.classList.remove('p-102')
  }

  if (pathname === '/universe') {
    el.body.classList.add('universe');
    el.app.classList.add('p-102');
    el.universe.classList.add('active');
  } 

  if (pathname === '/explore') {
    el.body.classList.add('explore');
    el.app.classList.add('p-102');
    el.explore.classList.add('active');
  }
}

function removeAllClass() {
  el.body.removeAttribute('class')
  el.app.removeAttribute('class')
  el.home.removeAttribute('class')
  el.universe.removeAttribute('class')
  el.explore.removeAttribute('class')
}