import React, {useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom'

const Album = () => {
    
    const [album, setAlbum] = useState()


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
             <li className = "list-group-item">album :{album.map(a=>a)}</li>
         </ul>
        </div>
    )
}

export default Album;