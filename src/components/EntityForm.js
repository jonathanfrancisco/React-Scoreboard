import React from 'react';



const EntityForm = (props) => { 
    const {entityText, onEntityFormSubmit, onEntityTextChange} = props;
    return (
            <form className='entity-form' onSubmit={onEntityFormSubmit}>
                <input placeholder='Add new entity, player or a team.' onChange={onEntityTextChange} value={entityText} type='text' name='entity'/>
                <button>Add</button>
            </form>
        );
}
export default EntityForm;
