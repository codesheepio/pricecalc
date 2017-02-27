import React from 'react'

const Price = ({changePrice}) => {
  return (
    <div className="row">
      <div className="label">Price</div>
      <div className="value">
        <input type="text" onChange={changePrice}/>
      </div>
    </div>
  )
}
export default Price