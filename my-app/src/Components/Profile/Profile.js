import { useLocation,useParams } from 'react-router-dom';
import './Profile.css';
import Repos from './Repos/Repos';

function Profile(){
    let profileId = useParams();
    const location=useLocation(); 
    console.log(location.state);
    return(
        <Repos/>
    )
}
export default Profile