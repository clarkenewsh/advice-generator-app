import React from 'react'

const Advice = ({ advice }) => {
  return (
    <figure>
      <p>Advice #{advice.id}</p>
      <p>{advice.advice}</p>
      {/* <img></img> */}
      <button>Image dice here</button>
    </figure>
  )
}

export default Advice