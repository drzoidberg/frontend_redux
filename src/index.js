/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './sass/main.scss'
import reducers from './store/reducers.js'
import Login from './components/Login/Login'
import App from './components/App/App'
import WaitDelay from './components/WaitDelay/WaitDelay'
import Loading from './components/Loading/Loading'

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(reducers, composedEnhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/'>
        <WaitDelay
          delay={1500}
          placeholder={<Loading className='u-margin-top-huge' />}
          ui={<Login />} // TODO: APPLY WELCOME ANIMATION
        />
      </Route>
      <Route exact path='/home'>
        <WaitDelay
          delay={1500}
          placeholder={<Loading className='u-margin-top-huge' />}
          ui={<App />}
        />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
