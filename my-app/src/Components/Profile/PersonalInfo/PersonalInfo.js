import PersonalInfoItem from './PersonalInfoItem';
import './PersonalInfo';
import location from '../../../Assets/location.svg';
import experience from '../../../Assets/experience.svg';
import email from '../../../Assets/email.svg';
import education from '../../../Assets/education.svg';
import redirect from '../../../Assets/redirect.svg';
import Title from '../../Shared/Title/Title';

function PersonalInfo(props){
    const personalInfo=[
        {
            id:1,
            infoName:props.infoName,
            imgURL:location,
        },
        {
            id:2,
            infoName:props.infoName,
            imgURL:experience,
        },
        {
            id:3,
            infoName:props.infoName,
            imgURL:email,
        },
        {
            id:4,
            infoName:props.infoName,
            imgURL:education,
        },
        {
            id:5,
            infoName:props.infoName,
            imgURL:redirect,
        },
    ]
    return(
        <div className='personalInfoContainer'>
            <Title />
            <ul>
                {
                    personalInfo.map(item=>{
                        return <PersonalInfoItem 
                            key={item.id} 
                            infoName={item.infoName} 
                            imgURL={item.imgURL}
                        />
                    })
                }
                <PersonalInfo img/>
                
            </ul>
        </div>
    )
}
export default PersonalInfo