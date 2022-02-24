import React from "react";
import axios from 'axios';
import { useState, UseEffect } from "react";



const UserList = () => {
    const [users, setUsers] = useState([]);


    const fetchUser= async()=>{
     const response =   await axios.get("https://randomuser.me/api/?results=5")
    }

    setUsers(response.data)

    return <div></div>
}


export default UserList