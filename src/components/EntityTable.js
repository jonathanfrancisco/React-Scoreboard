import React from 'react';
import EntityRow from './EntityRow';


const EntityTable = (props) => {
    const {entities, onButtonClick} = props;
    
    return (
        <div className='entities-table'>
             {entities.map((entity, index) => {
                    return <EntityRow onButtonClick={onButtonClick} key={index.toString()} index={index} name={entity.name} score={entity.score} />
                })}
        </div>
    );
}


export default EntityTable;