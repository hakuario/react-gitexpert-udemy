import React from 'react'

export default function GifItem({title, url}) {
    /* console.log(title);
    console.log(url); */
    
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
