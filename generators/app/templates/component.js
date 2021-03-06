import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './<%= name %>.sass'

class <%= name %> extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    const {
      children
    } = this.props

    return (
      <div className={css.root}>
        {children}
      </div>
    )
  }
}

const {
  node
} = PropTypes

<%= name %>.propTypes = {
  children: node
}

export { <%= name %> }

/* Default exports will be deprecated soon, use named exports instead */
export default <%= name %>
