import './GreyRoundedBg.css';

function GreyRoundedBg(props){
    return(
        <div className={`greyRoundedContainer ${props.styleName||""}`}>{props.children}</div>
    )
}
export default GreyRoundedBg