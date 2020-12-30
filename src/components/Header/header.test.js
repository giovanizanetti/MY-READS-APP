import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

it('renders Navigation component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
})
