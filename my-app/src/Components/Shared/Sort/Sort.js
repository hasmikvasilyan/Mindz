import { useState } from 'react';
import SortMenu from './SortMenu';
import './Sort.css';


function Sort(props){ 
    return(
        <div className='sortContainer'>
            <span className="sortIcon"></span>
            <h4>Sort</h4>
            <SortMenu data={props.data} sortItems={props.sortItems} onChange={props.onChange}/>
        </div>
    )
}
export default Sort