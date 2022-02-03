import './PersonalInfoItem.css';
import Link from './Link';

function PersonalInfoItem(props){
    const content=(
        <li className={`personalInfoItem ${props.styleName||""} `}>           
            <img src={props.imgURL}/>
            <div>
                {props.infoTitle&&<h5 className="personalListTitle">{props.infoTitle}</h5>}
                <p className="personalListName">{props.infoName}</p>
            </div>
        </li>
    )
    return(
        <>
            {props.link?<Link to={props.link}>{content}</Link>:content}    
        </>    
    )
}
export default PersonalInfoItem