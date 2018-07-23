
import React from 'react';


const EntityRow = (props) => {
    const {name, score, index} = props;
    return  (
        <div className='entities-table__row'>
            <div><h3>{name}</h3></div>
            <div><h3>{score}</h3></div>
            <div className='entities-table__row__button-set'> 
                <button  onClick={(e) => {props.onButtonClick(e,index)}}>-</button>
                <button  onClick={(e) => {props.onButtonClick(e,index)}}>+</button>
            </div>
        </div>
    );
}

export default EntityRow;