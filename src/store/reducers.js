import { combineReducers } from 'redux'

import { colors } from './colors'
import { locations } from './locations'
import { pokemon } from './pokemon'
import { pokemonsList } from './pokemons'
import { species } from './species'
import { selectToCompareA } from './selectToCompareA'
import { selectToCompareB } from './selectToCompareB'
import { user } from './user'
// import { pokemonCompare } from './pokemonCompare'

export default combineReducers({
  colors,
  locations,
  pokemon,
  pokemons: pokemonsList,
  species,
  selectToCompareA,
  selectToCompareB,
  user,
  // pokemonCompare,
})
