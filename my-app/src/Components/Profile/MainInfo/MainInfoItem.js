import GreyRoundedBg from "../../Shared/Candidates/GreyRoundedBg/GreyRoundedBg";
import  "./MainInfoItem.css";


function MainInfoItem(props){
    return(
        <li className="mainInfoItem">
            <GreyRoundedBg>
                <span className="iconWrapper">
                    <img src={props.imgURL}/>
                </span>
                <h3 className="mainInfoFigure">{props.infoFigure}</h3>
                <p className="mainInfoName">{props.infoName}</p>
            </GreyRoundedBg>  
        </li>
    )
}
export default MainInfoItem