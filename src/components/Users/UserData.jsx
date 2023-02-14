import { useContext  , useEffect}  from 'react'
import { ReposList } from '../Repos/ReposList';
import { Link } from 'react-router-dom';
import GitHubProvider  from "../../Context/GitHub/GitHubContext";
import { useParams } from 'react-router-dom';
export const UserData = () => {
    const param = useParams();
    const ctxData = useContext(GitHubProvider);
    useEffect(()=>{
        ctxData.userDataAPI(param.login);
    }, [])
  return (
    <div className='container my-3'>
        <div className="row">
            <div className="col-12 mb-4">
                <Link to='/' className='text-white text-uppercase' style={{textDecoration : 'none' }}>Back to search</Link>
            </div>
            <div className="col-12 d-flex mb-5">
                <div className="col-3 position-relative">
                    <div className="user_data_profile-img position-relative w-100">
                        <img alt='user-profile-img' style={{height : 'auto' , objectFit:'cover', borderRadius: '10px'}} src={ctxData.userData.avatar_url} className='w-100' />
                        <h4 className='text-white position-absolute' style={{bottom : '40px' , left : '20px' , zIndex : '999'}}>{ctxData.userData.name}</h4>
                        <p className='text-white position-absolute' style={{bottom : '20px' , left : '20px' , zIndex : '999'}}>{ctxData.userData.login}</p>
                    </div>
                   
                </div>
                <div className="col-9 mx-3">
                    <div className="user_info d-flex flex-column">
                        <div className="d-flex mb-2 align-items-center">
                            <h4 className='text-white me-3'>{ctxData.userData.name}</h4>
                            <p className='mb-0 text-capitalize py-1 px-2' style={{color : '#05da05' , backgroundColor: '#0000001f', borderRadius : '10px'}}>{ctxData.userData.type}</p>
                           { ctxData.userData.hireable && <p className='mb-0 text-capitalize py-1 px-2 mx-2' style={{color : '#00b8ff' , backgroundColor: '#0000001f', borderRadius : '10px'}}>hireable</p>} 
                        </div>
                        <div className="user_bio mb-5">
                            <p className='mb-4 text-white'>{ctxData.userData.bio}</p>
                            <a href={ctxData.userData.html_url} target="blank" style={{color: 'white', textDecoration: 'none', border: 'solid 1px white', padding: '7px 15px', borderRadius: '10px'}}>Visit GitHub Profile</a>
                        </div>
                        {
                            ctxData.userData.blog && 
                            <div className="user_personal_infos d-flex">
                                <div className="location col-4 data">
                                    <p className='mb-1' style={{color : '#d3c9c9'}}>Location</p>
                                    <h5 className='text-white'>{ctxData.userData.location}</h5>
                                </div>
                                <div className="website col-4 data">
                                    <p className='mb-1' style={{color : '#d3c9c9'}}>website</p>
                                    <h5 className='text-white'>{ctxData.userData.blog}</h5>
                                </div>
                                {ctxData.userData.twitter_username && 
                                    <div className="twitter col-4 data">
                                        <p className='mb-1' style={{color : '#d3c9c9'}}>twitter</p>
                                        <h5 className='text-white'>{ctxData.userData.twitter_username}</h5>
                                        
                                    </div>
                                }
                            </div>
                        }
                        
                    </div>
                   
                </div>
            </div>
            <div className="col-12 mb-5">
                    <div className="followers_data">
                        <div className="user_personal_infos d-flex">
                                    <div className="followers col-3 data d-flex align-items-center justify-content-between">
                                        <div className="d-flex flex-column">
                                            <p className='mb-1' style={{color : '#d3c9c9'}}>Followers</p>
                                            <h2 className='text-white'>{ctxData.userData.followers}</h2>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-users" aria-hidden="true"></i>
                                        </div>
                                        
                                    </div>
                                    <div className="Following col-3 data d-flex align-items-center justify-content-between">
                                        
                                        <div className="d-flex flex-column">
                                            <p className='mb-1' style={{color : '#d3c9c9'}}>Following</p>
                                            <h2 className='text-white'>{ctxData.userData.following}</h2>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                        </div>
                                        
                                    </div>
                                    <div className="public_repos col-3 data d-flex align-items-center justify-content-between">
                                        
                                        <div className="d-flex flex-column">
                                            <p className='mb-1' style={{color : '#d3c9c9'}}>Public Repos</p>
                                            <h2 className='text-white'>{ctxData.userData.public_repos}</h2>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-codepen" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="public_gists col-3 data d-flex align-items-center justify-content-between">
                                       
                                        <div className="d-flex flex-column">
                                            <p className='mb-1' style={{color : '#d3c9c9'}}>Public Gists</p>
                                            <h2 className='text-white'>{ctxData.userData.public_gists}</h2>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-bookmark" aria-hidden="true"></i>
                                        </div>
                                    </div>
                        </div>     
                    </div>
            </div>

            <div className="col-12">
                <ReposList/>
            </div>
        </div>
      
    </div>
  )
}
