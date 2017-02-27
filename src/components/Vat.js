import React from 'react'

const Vat = ({vat, price}) => {
  return (
    <div className="row">
      <div className="label">Vat({`${vat}%`})</div>
      <div className="value">{(price * vat) / 100}</div>
    </div>
  )
}
export default Vat