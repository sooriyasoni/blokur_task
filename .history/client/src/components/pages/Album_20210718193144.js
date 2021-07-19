import React, {useState, useEffect } from 'react';

const Album = () => {
    
    const [album, setAlbum] = useState(
        [{
        "album_type": "",
        "name" : "",
        "total_tracks":0,
        "tracks":{
            "href":"",
            "items":[],
            "limit":"",
            "next":"",
            "previous":"",
            "total":""
            }
    }]
    )

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
            let albums = await response.json();
            console.log('****json***', albums.tracks.href)
            setAlbum(albums);
            console.log("£££££££££££££", album)
        }catch(err){
            console.log(err)
        }
       
    }
    

    return(
        <div className = "container py-4">
         <h1  style={{background: "lightgrey"}} className = "display-4">Album  </h1>
         <hr/>
         <ul>
             
             <li>{album.album_type}</li>
             <li>{album.total_tracks}</li>
             <li>{album.name}</li>
             <li>{album.tracks.href}</li>
             </ul>
        </div>
    )
}

export default Album;



// ...albums,{
//                 album_type: albums.album_type,
//                 name: albums.name,
//                 total_tracks: albums.total_tracks
//             }

//  {album.map((data,key)=>{
//                  <div key = {key}>
//                      <h3>{data.album_type}</h3>
//                      </div>
//              })}