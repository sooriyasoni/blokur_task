import React, {useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom'

const Album = () => {
    
    const [album, setAlbum] = useState([{
       artists,
       genres,
       images,
       release_date,
       tracks,  
    }])


    useEffect(()=>
    {
        loadAlbum();
    },[]);

    //get an agent
    const loadAlbum = () => {
        fetch(`http://localhost:8080/api/album`)
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject("response is not 200 OK",response.body)
            }
            console.log(response)
            return response.json();
        })
        .then(json => setAlbum(json))
        .catch(console.log)
    }

    return(
        <div className = "container py-4">
         <Link className = "btn btn-primary" to = '/'>
             Back
         </Link>
         <h1  style={{background: "lightgrey"}} className = "display-4">Album  </h1>
         <hr/>
         <ul  className = "list-group w-50">
             <li className = "list-group-item">first name : {album}</li>
             <li  className = "list-group-item">last name : {agent.lastName}</li>
             <li className = "list-group-item">middle name : {agent.middleName}</li>
             <li className = "list-group-item">dob name : {agent.dob}</li>
             <li className = "list-group-item">height in inches name : {agent.heightInInches}</li>
         </ul>
        </div>
    )
}

export default Album;