import {useNavigate } from 'react-router-dom';
import './Link.css';

function Link(props){
    const navigate=useNavigate();

    const handleClick=()=>{         
        navigate(`/profiles/${props.to}`, {state:`${props.to}`});
    }
    return(
        <a href={props.to} className="personalLink" target="_blank" onClick={handleClick}>{props.children}</a>
    )
}
export default Link