import React from 'react'

const calcvat = (vat, price) => (price * vat) / 100
const calcwth = (wth, price) => (price * wth) / 100

const Total = ({vat, wth, price}) => {
  return (
    <div className="row">
      <div className="label">Total</div>
      <div className="value">{(price*1) + calcvat(vat, price) - calcwth(wth, price)}</div>
    </div>
  )
}
export default Total