import { useState } from 'react';
import './ReadMore.css';

function ReadMore(props){
    const text=props.repoDescription;
    const [isReadMore, setIsReadMore]=useState(true);
    const [isLongEnough, setIsLongEnough]=useState(text.length>150);
    const handleClick=()=>{
        setIsReadMore(!isReadMore)
    }
    return(        
        <p className="repoDescription">
            {isReadMore&&isLongEnough?text.slice(0,150):text}
            {isLongEnough && 
                <span onClick={handleClick} className="readOrHide">
                {isReadMore ? " ...read more" : " show less"}            
            </span>
            }
        </p> 
    )
}
export default ReadMore