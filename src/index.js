import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import PriceCalc from './components/PriceCalc'

ReactDOM.render(
  <PriceCalc vat={7} wth={3} />,
  document.getElementById('react-root') 
)