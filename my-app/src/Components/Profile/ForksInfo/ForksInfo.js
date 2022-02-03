import GreyRoundedBg from '../../Shared/Candidates/GreyRoundedBg/GreyRoundedBg';
import PersonalInfoItem from '../PersonalInfo/PersonalInfoItem';
import './ForksInfo';

function ForksInfo(props){
    // console.log("ForksInfo",props.forkedUsers);
    const uniqueforks=props.forkedUsers.filter((forkedUser,index,arr)=>arr.findIndex(item=>item.id===forkedUser.id)===index);
    
    return(
        <GreyRoundedBg styleName="forksContainer">
            <h5 className="personalInfoTitle">Forks</h5>                   
            <ul>
                {
                    uniqueforks.slice(0,5).map(item=>{
                        return( 
                            <PersonalInfoItem 
                                key={item.id} 
                                infoName={item.login} 
                                imgURL={item.avatar_url}
                                link={item.login}
                                styleName="forkedItem"
                            />
                        )
                    })
                }                            
            </ul>
        </GreyRoundedBg>
    )
}
export default ForksInfo