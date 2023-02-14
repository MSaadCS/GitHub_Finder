import { useContext}  from 'react'
import GitHubProvider  from "../../Context/GitHub/GitHubContext";
import { Tooltip as ReactTooltip } from 'react-tooltip'
export const ReposItem = ({items}) => {
    const ctxData = useContext(GitHubProvider);
  return (
    <div className='repo_info mb-3'>
        <i className="fa fa-external-link-square mx-2 text-white" aria-hidden="true"></i><a target="blank" href={items.url} className='text-white repo_link d-inline-flex'> {items.name}</a>
     
        <div className="d-flex mt-3">
            <div className="views d-flex align-items-center me-3" id={`views${items.id}`} data-tooltip-content="views">
                <i className="fa fa-eye me-2" aria-hidden="true"></i>{items.watchers_count}
            </div>
            <ReactTooltip anchorId={`views${items.id}`}/>


            <div className="stars d-flex align-items-center me-3" id={`stars${items.id}`} data-tooltip-content="stars">
                <i className="fa fa-star me-2" aria-hidden="true"></i>{items.stargazers_count}
            </div>
            <ReactTooltip anchorId={`stars${items.id}`} />


            <div className="open_issues d-flex align-items-center me-3" id={`open_issue${items.id}`} data-tooltip-content="open issues">
                 <i className="fa fa-thumb-tack me-2" aria-hidden="true"></i>{items.open_issues_count}
            </div>
            <ReactTooltip anchorId={`open_issue${items.id}`} />


            <div className="forks d-flex align-items-center" id={`forks${items.id}`} data-tooltip-content="forks">
                <i className="fa fa-code-fork me-2" aria-hidden="true"></i>{items.forks}
            </div>
            <ReactTooltip anchorId={`forks${items.id}`}/>
        </div>
       

    </div>
  )
}
