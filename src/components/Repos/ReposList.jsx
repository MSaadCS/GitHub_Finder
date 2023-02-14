import { useContext  , useEffect}  from 'react'
import GitHubProvider  from "../../Context/GitHub/GitHubContext";
import { ReposItem } from './ReposItem';
import { useParams } from 'react-router-dom';
export const ReposList = () => {
    const param = useParams();
    const ctxData = useContext(GitHubProvider);

    useEffect(()=>{
        ctxData.userReposAPI(param.login);
    },[])
  return (
    <div className='reposList'>
        
        
        {
      
        ctxData.userRepos.length > 0 ?
            <>
                <h4 className='text-white'>Latest Repos</h4>
                <div className="d-flex flex-column">
                    {ctxData.userRepos.map((element)=>(
                        <ReposItem key={element.id} items={element}/>
                    ))}
                </div>
            </>
         :  ctxData.userRepos
            
        }   
       
       
    </div>
  )
}
