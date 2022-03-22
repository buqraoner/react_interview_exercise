import React from 'react'

const  SingleUser = ({user}) => {
  return (
    <div className='single-user'>
        <img src={user.picture.medium} alt="" srcset="" />
        <div className='user-info'>
            <h3>
                {user.name.first} {user.name.last}
            </h3>
            <p className='user-mail'>E Mail: {user.email}</p>
            <p className='user-location'>{user.location.country} | {user.location.city} </p>
        </div>
    </div>
  )
}   

export default SingleUser;
