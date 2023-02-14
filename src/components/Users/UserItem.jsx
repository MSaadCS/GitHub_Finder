import React from 'react'
import { Link } from 'react-router-dom'
export const UserItem = ({userData}) => {
  return (
    <div className='col-12 col-md-3 mb-3 user_card'>
        <Link to={`/user/${userData.login}`} style={{textDecoration : 'none'}}>
            <div className='card d-flex p-2 flex-row' style={{backgroundColor : '#545b6b' , border : 'solid 1px #4e5565'}}>
                <img alt='profile-img' src={userData.avatar_url} className='me-3' style={{width : '60px', borderRadius : '50%'}}/>
                <div className='user_links d-flex flex-column justify-content-center'>
                    <h6 className='text-white mb-1'>{userData.login}</h6>
                    <p className='m-0' style={{color : '#aca9a9'}}>Visit Profile</p>
                </div>
            </div>
        </Link>
    </div>
  )
}
