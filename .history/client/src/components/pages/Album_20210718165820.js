import React, {useState, useEffect } from 'react';

const Album = () => {
    
    const [album, setAlbum] = useState()

    useEffect(()=>
    {
        loadAlbum();
    },[]);

    //get an agent
    const loadAlbum = () => {
        fetch(`http://localhost:5000/api/album`)
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject("response is not 200 OK",response.body)
            }
            let responseText = response.text()
            // let objectRes = JSON.parse(responseText);
            console.log('respo',response.json())
            return responseText;
        })
        .then(json => setAlbum(json))
        .catch(console.log)
    }
    

    return(
        <div className = "container py-4">
         <h1  style={{background: "lightgrey"}} className = "display-4">Album  </h1>
         <hr/>
         <ul  className = "list-group w-50">
             {album}
         </ul>
        </div>
    )
}

export default Album;