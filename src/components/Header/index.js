import { arrayOf } from 'prop-types'
import React, { Component } from 'react'
import Title from './Title'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // some things in state
    }
  }

  render() {
    return (
      <>
        <Title />
        <IconButton role={CART} onClick={() => {}} />
      </>
    )
  }
}
