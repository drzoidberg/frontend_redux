/* eslint-disable no-unused-vars */
import * as React from 'react'
import PropTypes from 'prop-types'

import { Container } from 'nes-react'
import classes from './Loading.module.scss'

// TODO: print when user & passwd aren' t correct:
// suggest { user: 'root', password: 'root' }
export default function Loading({ text, speed, className }) {
  const [content, setContent] = React.useState(text)

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      content === text + '...'
        ? setContent(text)
        : setContent(content => content + '.')
    }, speed)

    return () => {
      window.clearInterval(interval)
    }
  })

  return (
    <div className={`${className} ${classes['wrapper']}`}>
      <div className={classes['container']}>
        <p>{content}</p>
      </div>
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
  className: PropTypes.string,
}
Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
  className: '',
}
