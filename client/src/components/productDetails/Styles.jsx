import React from 'react';

function Styles (props) {

  return (
    <li>
      <img className='styles' onClick={() => props.onClick(props.index)} src={props.style.photos[0].thumbnail_url} />
      {props.style.name}
    </li>
  )
}

export default Styles;