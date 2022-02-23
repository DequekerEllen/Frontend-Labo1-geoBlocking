import { render } from './lib/country.controller'
import { getDOMElements } from './lib/ui'

// 1 DOM interactie
getDOMElements()
  .then(() => {
    console.log('lets go')
    render()
  })
  .catch((ex) => {
    console.error('💩 happend', ex)
  })

// 2 Lists bijhouden

// 3 Localstorage bijhouden

// 4 Search

// 5 Controller countries
