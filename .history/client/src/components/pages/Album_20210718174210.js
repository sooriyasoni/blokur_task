import React, {useState, useEffect } from 'react';

const Album = () => {
    
    const [album, setAlbum] = useState([{
        "album_type": "",
        "name" : "",
        "total_tracks":0,
        "tracks":"",
    }])

    useEffect(()=>
    {
     loadAlbum();
    },[]);

    //get an agent
    const loadAlbum = async() => {
        try{
       let response = await fetch(`http://localhost:5000/api/album`)
       
            if (response.status !== 200) {
                return Promise.reject("response is not 200 OK",response.body)
            }
            let json = await response.json();
            console.log('****json***', json.album_type)
            setAlbum(...json);
            console.log("£££££££££££££", album)
        }catch(err){
            console.log(err)
        }
       
    }
    

    return(
        <div className = "container py-4">
         <h1  style={{background: "lightgrey"}} className = "display-4">Album  </h1>
         <hr/>
             {album}
        
        </div>
    )
}

export default Album;