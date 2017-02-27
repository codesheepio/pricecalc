import React from 'react'

const Wth = ({wth, price}) => {
  return (
    <div className="row">
      <div className="label">Wth</div>
      <div className="value">{(price * wth) / 100}</div>
    </div>
  )
}
export default Wth