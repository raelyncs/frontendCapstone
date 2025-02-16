import React from 'react';

function Styles (props) {

  return (
    <li className={props.activeStyle === props.index ? 'active_style' : null}>
      <img className='styles' onClick={() => props.onClick(props.index)} src={props.style.photos[0].thumbnail_url} />
    </li>
  )
}

export default Styles;