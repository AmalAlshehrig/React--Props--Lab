import React from 'react'
import Tayp from '../Services/Tayp'
import Info from '../programers/Info'
function Com(props) {
  return (
    <div>
        <h3 className='com'>
            {props.name}
            <br></br>
            {props.num}
            <br></br>
            {props.year}
        </h3>
        <Tayp price={props.price} serv={props.serv}/>
        <br></br>
        <div className='card'>
        <div className={props.name1 == 'Tuwaiq'? 'p' : 'v'}>
        <Info name={props.user1} pro="js" year="1" com={props.name1} />
        </div>
        <div className={props.name2 == 'Tuwaiq'? 'p' : 'v'}>
        <Info name={props.user2} pro="js" year="1" com={props.name2} />
        </div>
        <div className={props.name3 == 'Tuwaiq'? 'p' : 'v'}>
        <Info name={props.user3} pro="C#" year="4" com={props.name3} />
        </div>
        </div>
    </div>
  )
}

export default Com