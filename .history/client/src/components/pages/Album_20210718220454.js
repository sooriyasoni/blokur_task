import React, { useEffect, useState } from 'react';

const Album = () => {
    
    let [album, setAlbum] = useState({});
    
    useEffect(()=>{
        loadAlbum();
    })

    const loadAlbum = async() => {
        try{
       let response = await (await fetch(`http://localhost:5000/api/album`)).json()
            if (response.status !== 200) {
                return Promise.reject("response is not 200 OK",response)
            }
            console.log('****json***',body() );
            // await setAlbum(stringData);
        }catch(err){
            console.log(err)
        }
    }
    console.log("album after setting", album.tracks)


    return(
        <div className = "container py-4">
         <h1  style={{background: "lightgrey"}} className = "display-4">Album  </h1>
         <hr/>
         <ul>
             <li>{album.album_type}</li>
             <li>{album.total_tracks}</li>
             <li>{album.name}</li>
             {/* <div>{album.tracks.items.map((value)=>{
                 return <li>{value.name}</li>
             })}</div> */}
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