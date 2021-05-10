/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from 'nes-react'

import WaitDelay from '../../WaitDelay/WaitDelay'
import Loading from '../../Loading/Loading'
import { fetchPokemon } from '../../../store/actions'
import classes from './Pokemon.module.scss'
import { pokemon } from '../../../store/pokemon'

export default function Pokemon({ pokemonId }) {
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon.pokemonData)
  const store = useSelector(state => state)

  React.useEffect(() => {
    dispatch(fetchPokemon(pokemonId))
  }, [dispatch])

  console.log(store)
  return (
    <>
      <WaitDelay
        placeholder={<Loading />}
        ui={
          <Avatar
            src={pokemonData.sprites.back_default}
            large
            className={classes.Avatar}
          />
        }
      />
    </>
  )
}

Pokemon.propTypes = {
  pokemonId: PropTypes.object.isRequired,
}
