
import {useParams} from "react-router-dom"

import { useState, useEffect } from "react"

let users_data = [
    {id: 1, name: "John", age: 20},
    {id: 2, name: "Smith", age: 30},
    {id: 3, name: "Brad", age: 40},
    {id: 4, name: "Peter", age: 50},
    {id: 5, name: "Sam", age: 60},
    {id: 6, name: "Mark", age: 70},
]



const UserInfo = () =>{

    let [user, setUser] = useState("")
     
    // console.log(useParams()) // {x: "1"}
    let {x} = useParams()
    
  
    useEffect(() => {
    let arr = users_data.filter(value => value.id == x)
    setUser(arr[0])
    }, [])


    return(
        <div>
            <h1>User {x}</h1>
            {
                user &&
                <div>
                    <h3>{user.name}</h3>
                    <h3>{user.age}</h3>
               </div>
            }
        </div>
    )
}

export default UserInfo