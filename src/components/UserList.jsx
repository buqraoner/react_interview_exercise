import { React, useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
//Components
import SingleUser from "./SingleUser";




const UserList = () => {
    const [users, setUsers] = useState([]);
    const fetchUser = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=5")
        setUsers(response.data.results)
    }

   

    useEffect(()=>
    {
        fetchUser()
    },[])

    return (
    <div className="user-list">
        <ul>
            {users.map((user,idx)=>(            
                <li>
                    <SingleUser user={user} key={idx}/>
                    
                </li>
            ))}
        </ul>
    </div>
    )
}


export default UserList