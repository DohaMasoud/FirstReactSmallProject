import Users from "./Users";
import React from "react";
import { useEffect, useState } from "react";
export default function HomeUserInfo(){
  const [data,setdata]=useState('');
  const fetchUserData = () => {
    fetch(`https://dummyjson.com/users`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setdata(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
 return(
   <>
        {data?.users?.map((user) =>{
         if(user.id <= 5){    
          return (
            <Users
             key={user.id}
             img={user.image}
             first={user.firstName}
             last={user.lastName}
             email={user.email}
             phone={user.phone}
             birthdate={user.birthDate}

            />
        )}})
      }
    </>
);
}