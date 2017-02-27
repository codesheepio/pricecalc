import React, { Component } from 'react'
import Price from './Price'
import Vat from './Vat'
import Wth from './Wth'
import Total from './Total'

export default class PriceCalc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 100,
    }
    this.changePrice = this.changePrice.bind(this)
  }
  changePrice(event) {
    this.setState({
      price: event.target.value
    })
  }
  render() {
    return (
      <div>
        <Price changePrice={this.changePrice} />
        <Vat vat={this.props.vat} price={this.state.price} />
        <Wth wth={this.props.wth} price={this.state.price} />
        <Total vat={this.props.vat} wth={this.props.wth} price={this.state.price} />
      </div>
    )
  }
}