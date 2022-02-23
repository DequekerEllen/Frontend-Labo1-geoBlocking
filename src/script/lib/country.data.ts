import { getCountries } from '../utils/network'

export const list = {
  available: getCountries(),
  blocked: [],
}

// TODO: sort list alpabeticaly (by name)
export const alphaList = {
  available: getCountries().sort(a, b),
  blocked: [],
}
