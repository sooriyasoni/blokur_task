import React, { useEffect, useState } from 'react';
import data from '../static/albumJson'

const Album = () => {
    
    let [album, setAlbum] = useState({});
    
    useEffect(()=>{
        loadAlbum();
    })


    const loadAlbum = async() => {
        try{
       let response = await fetch(`http://localhost:5000/api/album`)
            if (response.status !== 200) {
                return Promise.reject("response is not 200 OK",response.body)
            }
            let json = await response.json()    ;
            console.log('****json***', json.tracks)
            await setAlbum(json);
        }catch(err){
            console.log(err)
        }
    }
    console.log("album after setting", album.tracks["items"])
   
    
    const tracksName = album.tracks.map((key,data) => {
        return <div>
            <li key = {key}>{data}</li>
        </div>
    })
    console.log("tracks name *****", tracksName)

    return(
        <div className = "container py-4">
         <h1  style={{background: "lightgrey"}} className = "display-4">Album  </h1>
         <hr/>
         <ul>
             <li>{data.album_type}</li>
             <li>{data.total_tracks}</li>
             <li>{data.name}</li>
             <div>{data.tracks.items.map((value)=>{
                 return <li>{value.name}</li>
             })}</div>
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