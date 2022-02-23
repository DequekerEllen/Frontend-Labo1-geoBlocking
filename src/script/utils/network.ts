import countries from '../../assets/countries.json'
import { Country } from '../interfaces/Country'

export const getCountries = (): Country[] => countries

export const getCountryByAlpha2Code = (alpha2Code: string): Country => {
  //  TODO: get a single country
  return undefined
}
