/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import classes from './PokemonList.module.scss'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPokemons } from '../../store/actions/index'

export default function PokemonList() {
  const dispatch = useDispatch()
  const pokemonsList = useSelector(state => state.fetchedPokemons.pokemonsList)
  const pokemonsListStatus = useSelector(state => state.fetchedPokemons.status)

  React.useEffect(() => {
    dispatch(fetchPokemons())
  }, [dispatch])
}

function getPokemonId(pokemon) {
  const pokemonId = pokemon.url.split('/')
  return pokemonId[6]
}

function Pokemons({ pokemons }) {
  return (
    <>
      <ul>
        {pokemons.map(pokemon => {
          const pokemonId = getPokemonId(pokemon)
          return <li key={pokemonId}>{pokemon.name}</li>
        })}
      </ul>
    </>
  )
}

Pokemons.propTypes = {
  pokemons: PropTypes.array.isRequired,
}
