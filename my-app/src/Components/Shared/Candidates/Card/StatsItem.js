import './StatsItem.css';

function StatsItem(props){
    return(
        <li className="statsItem">
            <h4 className="statsName">{props.name}</h4>
            <h5 className="statsQuantity">{props.quantity}</h5>
        </li>
    )   
}
export default StatsItem