import React from 'react'

const Card = ({title, rating, isCool}) => {
  return (
    <div>
    {title} {rating} {isCool}
    </div>
  )
}

export default Card
