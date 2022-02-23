import { Country } from '../interfaces/Country'
import { list as dataList } from './country.data'

export const list = {
  blocked: undefined,
  available: undefined,
}

const search = {
  blocked: undefined,
  available: undefined,
}

const moveTo = {
  blocked: undefined,
  available: undefined,
}

const actions = {
  cancel: undefined,
  save: undefined,
}

export const getDOMElements = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    list.available = document.querySelector('.js-list-available')
    list.blocked = document.querySelector('.js-list-blocked')

    search.available = document.querySelector('.js-search-available')
    search.blocked = document.querySelector('.js-search-blocked')

    moveTo.available = document.querySelector('.js-move-to-available')
    moveTo.blocked = document.querySelector('.js-move-to-blocked')

    actions.cancel = document.querySelector('.js-cancel')
    actions.save = document.querySelector('.js-cancel')

    if (
      list.available &&
      list.blocked &&
      search.available &&
      search.blocked &&
      moveTo.available &&
      moveTo.blocked &&
      actions.cancel &&
      actions.save
    ) {
      resolve()
    } else {
      reject('Some DOM elements are missing')
    }
  })
}

export const renderCountries = (subList?: string | undefined) => {
  let repeat = undefined
  if (!subList) {
    subList = 'available'
    repeat = 'blocked'
  }
  list[subList].innerHTML = ''

  dataList[subList].forEach((c: Country) => {
    const li = document.createElement('li')
    li.classList.add('c-country')

    const button = document.createElement('button')
    button.classList.add('c-country__button')
    button.addEventListener('click', function () {
      console.log('clicked', c.name)
    })

    button.innerHTML = `
          <div class="c-country__flag-holder">
            <img
              class="c-country__flag"
              src="https://flagcdn.com/h40/${c.alpha2Code.toLowerCase()}.png"
              alt="Flag of ${c.name}"
            />
          </div>
          <p class="c-country__name">${c.name}</p>
          <svg
            class="c-country__arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `
    // Add the button to the li
    li.append(button)
    // Add the li to the parrent list
    list[subList].append(li)
  })

  if (repeat) renderCountries(repeat)
}
