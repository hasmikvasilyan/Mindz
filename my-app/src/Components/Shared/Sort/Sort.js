import { useState } from 'react';
import SortMenu from './SortMenu';
import './Sort.css';


function Sort(props){
    const [isShowMenu, setIsShownMenu]=useState(false);

    
    const handleSortMenuHoverClose=()=>{
        setIsShownMenu(false)
    }

    return(
        <button className='sortContainer'>
            <span className="sortIcon"></span>
            <h4>Sort</h4>
            <SortMenu data={props.data} sortItems={props.sortItems} onChange={props.onChange}/>
        </button>
    )
}
export default Sort