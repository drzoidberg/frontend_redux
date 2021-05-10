import React from 'react'
import PropTypes from 'prop-types'

/*
  Instructions:
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`. Or, if provided an isLoading prop,
    render the ui when the async data is loaded
*/

/* TODO: put in App.js to run:
  <Wait
    delay={3000}
    placeholder={<p>Waiting...</p>}
    ui={<p>This text should appear after 3 seconds.</p>}
  />
*/

function Wait({ delay = 1500, placeholder, ui }) {
  const [textContent, setTextContent] = React.useState('')

  React.useEffect(() => {
    setTextContent(placeholder)
    const id = window.setTimeout(() => {
      setTextContent(ui)
    }, delay)

    /* NOTICE
      notice that, when using setTimeouts, I have to clear the timeouts.
      Look how I specify that they come from the window object.
      Look how I assign it to a const, just because doing so I can later
      point at that specific timeout and apply the clearTimeout()
    */
    return () => window.clearTimeout(id)
  }, [placeholder, delay, ui])

  return textContent
}

Wait.propTypes = {
  delay: PropTypes.number,
  placeholder: PropTypes.element,
  ui: PropTypes.node,
}

export default Wait
