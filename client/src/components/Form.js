import React from "react"

/**
 * Reusable form
 * an elements prop can be passed to render child components
 */
export default (props) => {
  function submit(e) {
    e.preventDefault()
    props.submit()
  }

  return <form onSubmit={submit}>{props.elements()}</form>
}
