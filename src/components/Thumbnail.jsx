// import React from 'react'
import PropTypes from 'prop-types';
Thumbnail.propTypes = {
  name:PropTypes.string,
  key:PropTypes.string,
  image:PropTypes.string,
  ikey:PropTypes.string,
  type:PropTypes.string,
  height:PropTypes.string,
  weight:PropTypes.string,
  exp:PropTypes.string,
  hp:PropTypes.string,
  powers:PropTypes.string,
  list:PropTypes.string,
  poke:PropTypes.string,
  click:PropTypes.string


}
function Thumbnail(props) {
  return (
    <div>
      <div className="card" key={props.key}>
            <div className="title">
           {props.name}
           
            </div>

            <div className="pic">
            <figure>
            <img key={props.ikey} src={props.image} alt={props.name}/>
            </figure> </div>
            <div className="details">
              <ul>
                <li>
                <b>Type:</b> {props.type} 
                </li>
                
                <li>
                <b>Height:</b> {props.height}
                </li>
                <li>
                 <b>Weight:</b> {props.weight} 
                </li>
                <li>
                <b>Base Exp:</b> {props.exp}
                </li>
                <li>
                  <b>HP:</b> {props.hp}
                </li>
                {/* {item.abilities.length >1 ?
                (<li>
                  Ability: {item.abilities[0].ability.name} and {item.abilities[1].ability.name}
                </li>):(<li>
                  Ability: {item.abilities[0].ability.name}
                </li>)} */}
              </ul>
              <br/>
            </div>
            <div className='skills'>
  <ul>
  <h4>{props.powers}</h4>
  {/* {item.abilities.map((list, i)=><li key={i}>{list.ability.name}</li> ) }         */}

{props.list}


  </ul>




</div>
<div><button onClick={props.poke}>{props.click}</button></div>
    </div>
    </div>
  )
}

export default Thumbnail
