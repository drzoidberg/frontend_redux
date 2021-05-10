/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { Container, Button, TextInput, Sprite } from 'nes-react'
import { useDispatch, useSelector } from 'react-redux'

import classes from './Login.module.scss'
import pokemonLogo from '../../assets/pokemon-logo.svg'

import { userLogin } from '../../store/actions'

// The nescss Sprite component has this items and some more hardcoded,
// so that it displays a pic that matches the string
const randomSrc = _.sample([
  'ash',
  'pokeball',
  'bulbasaur',
  'charmander',
  'squirtle',
])

function Form() {
  const [userTextInput, setUserTextInput] = React.useState('')
  const [passwordInput, setPasswordInput] = React.useState('')
  const dispatch = useDispatch()

  function handleUserTextInput(e) {
    return setUserTextInput(e.target.value)
  }

  function handlePasswordInput(e) {
    return setPasswordInput(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(userLogin({ name: userTextInput, password: passwordInput }))
  }

  return (
    <Container rounded className={classes['form']}>
      <form action=''>
        <div className={classes['form-content']}>
          <TextInput
            className={classes['text-input']}
            label='User'
            placeholder='Ash Ketchum'
            value={userTextInput}
            onChange={handleUserTextInput}
          />
          <TextInput
            className={classes['text-input']}
            type='password'
            label='Password'
            placeholder='Your password'
            value={passwordInput}
            onChange={handlePasswordInput}
          />
          <Button primary className={classes['button']} onClick={handleSubmit}>
            Sign in
          </Button>
        </div>
      </form>
    </Container>
  )
}

// function FormValidate({ userData }) {
//   switch (userData) {
//     case 'logged in':
//       return (
//         <WaitDelay
//           delay={2500}
//           placeholder={<Loading className='u-margin-top-huge' />}
//           ui={<p>This text should appear after 2.5 seconds.</p>}
//         />
//       )
//     case 'logged out':
//       return <Form />
//     default:
//       return <Form />
//   }
// }
function FormValidate({ userData }) {
  switch (userData) {
    case 'logged in':
      return <Redirect to='/home' />
    case 'logged out':
      return <Form />
    default:
      return <Form />
  }
}
FormValidate.propTypes = PropTypes.string.isRequired

export default function Login() {
  const userData = useSelector(state => state.user)

  return (
    <>
      <div className={classes['container']}>
        <img src={pokemonLogo} className={classes['Logo']} />
        <Sprite sprite={randomSrc} className={classes.sprite} />
        <p className='u-no-margins u-center-text'>
          Welcome to <br /> your new Pokedex! (v0.1)
        </p>
        <FormValidate userData={userData} />
      </div>
    </>
  )
}
