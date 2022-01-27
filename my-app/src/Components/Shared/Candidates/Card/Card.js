import { Link,useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import UserContext from '../../../Context/UserContext';
import StatsItem from './StatsItem';
import options from '../../../../Assets/options.svg';
import './Card.css';

function Card(props){
    const navigate=useNavigate();
    const userCtx=useContext(UserContext);
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
    const handleClick=()=>{  
        navigate(`/profiles/${props.username}`, {state:`${props.username}`});
        userCtx.addUser({
            // id: props.id,
            username:props.username,
            // img: props.img,
            // followersCount: props.followersCount,
            // price: props.price,
            // reposURL:props.reposURL
        });
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
                <button className="btn" onClick={handleClick}>View Profile</button>
            </div>
        </li>
    )
   
}
export default Card