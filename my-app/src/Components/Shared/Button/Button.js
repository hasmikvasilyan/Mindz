import './Button.css';

function Button(props){
    return(
        <button className={`btn ${props.class}`}>{props.name}</button>
    )
}
export default Button