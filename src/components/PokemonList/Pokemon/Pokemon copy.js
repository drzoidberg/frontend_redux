/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

// import classes from './Pokemon.module.scss'
// import {
//   fetchColors,
//   fetchLocations,
//   fetchPokemon,
//   fetchPokemons,
//   fetchSpecies,
//   setToCompareA,
//   setToCompareB,
// } from '../../store/actions'

export default function Pokemon({ pokemonId }) {
  const dispatch = useDispatch()
  // const pokemonData = useSelector(state => state)
  // const pokemonData = useSelector(state => state.pokemon.pokemonData)
  // const pokemonStatus = useSelector(state => state.pokemon.status)
  // const pokemonError = useSelector(state => state.pokemon.error)

  React.useEffect(() => {}, [dispatch])

  return null
}

Pokemon.propTypes = PropTypes.object.isRequired
