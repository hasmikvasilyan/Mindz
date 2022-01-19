import Button from '../../Button/Button';
import StatsItem from './StatsItem';
// import pin from '../../../../Assets/pin.js';
import options from '../../../../Assets/options.svg';
// import gitUser from '../../../../Assets/gitUser.png';
import './Card.css';

function Card(props){
    const stats=[
        {
            title: "Stars",
            quantity: 100,
        },
        {
            title: "Followers",
            quantity: props.followersCount,
        },
        {
            title: "Repos",
            quantity: props.reposCount,
        }
    ];
    const handleProfileView=()=>{

    }
    return(
        <li className="cardContainer">
            <div className="card">
                <div className="cardOptions">
                    <span className="pinContainer"></span>
                    <img src={options}/>
                </div>
                <img className="candidateImg" src={props.img}/>
                <h3 className="candidateName">{props.username}</h3>
                <h4 className="candidatePos">position</h4>
                <ul className="shortStats">
                    {stats.map(stat=>{
                        return(<StatsItem
                            key={stat.title} 
                            name={stat.title} 
                            quantity={stat.quantity}
                        />)
                        }
                    )}
                </ul>
                <Button name="View Profile" reposURL={props.reposURL}/>
            </div>
        </li>
    )
   
}
export default Card