import './RepoItem.css';
import folder from '../../../Assets/folder.js';

function RepoItem(){
    return(
        <li>
            <img src={folder}/>
            <h4 className='repoTitle'>{}</h4>
            <p className='repoDescription'>{}</p>
        </li>
    )
}
export default RepoItem