import './RepoItem.css';
import ReadMore from './ReadMore';

function RepoItem(props){
    return(
        <li className='repoItem'>
            <h4 className='repoTitle'>{props.repoName}</h4>
            <ReadMore repoDescription={props.repoDescription||""}/>
        </li>
    )
}
export default RepoItem