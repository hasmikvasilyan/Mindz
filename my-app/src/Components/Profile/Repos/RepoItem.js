import './RepoItem.css';
import ReadMore from './ReadMore';

function RepoItem(props){
    // console.log(props.repoDescription);
    return(
        <li className='repoItem'>
            <h4 className='repoTitle'>{props.repoName}</h4>
            <ReadMore repoDescription={props.repoDescription?props.repoDescription:""}/>
            {/* <ReadMore className='repoDescription'>{props.repoDescription}</ReadMore> */}
        </li>
    )
}
export default RepoItem