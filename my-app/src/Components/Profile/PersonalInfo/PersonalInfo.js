import PersonalInfoItem from './PersonalInfoItem';
import GreyRoundedBg from'../../Shared/Candidates/GreyRoundedBg/GreyRoundedBg';
import './PersonalInfo.css';
import location from '../../../Assets/location.svg';
import experience from '../../../Assets/experience.svg';
import email from '../../../Assets/email.svg';
import education from '../../../Assets/education.svg';
import redirect from '../../../Assets/redirect.svg';

function PersonalInfo(props){    
    console.log("PersonalInfo",props);
    const formatDate=(date)=>{
        const formattedDate = new Date(date);
        const [day,month,year]= [formattedDate.getDate(),formattedDate.toLocaleString('en-us', { month: 'short' }), formattedDate.getFullYear()];
        return `${day} ${month} ${year}`
    }
    const personalInfo=[
        {
            id:1,
            infoName:props.profile.location,
            imgURL:location,
        },
        {
            id:2,
            infoName:formatDate(props.profile.joined),
            imgURL:experience,
        },
        {
            id:3,
            infoName:props.profile.email,
            imgURL:email,
        },
        {
            id:4,
            infoName:props.profile.company,
            imgURL:education,
        },
        {
            id:5,
            infoName:"View profile on GitHub",
            imgURL:redirect,
            href:props.profile.link,
        },
    ];
    return(
        <GreyRoundedBg>
            <h5 className="personalInfoTitle">Perasonal Info</h5>                   
            <ul>
                {
                    personalInfo.map(item=>{
                        return <PersonalInfoItem 
                            key={item.id} 
                            infoName={item.infoName} 
                            imgURL={item.imgURL}
                            link={item.href}
                        />
                    })
                }                            
            </ul>
        </GreyRoundedBg>
    )
}
export default PersonalInfo