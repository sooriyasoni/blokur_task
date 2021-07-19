import React, { useEffect, useState } from 'react';

const Album = () => {
    const [album, setAlbum] = useState({});
    const [albumName,setAlbumName] = useState({})
     useEffect(() => {
          async function fetchAlbum() {
          const response = await fetch('http://localhost:5000/api/album');
           const json = await response.json();
           console.log('json', json.tracks.items)
           setAlbum(json);
           setAlbumName(json.tracks.items);
       }
       fetchAlbum();
     },[]);

    //  console.log('json after album',album.tracks.items)

    return (
        <div className="container py-4">
            <h1 style={{ background: "lightgrey" }} className="display-4">Album  </h1>
            <hr />
            <ul>
                <li>{album.album_type}</li>
                <li>{album.total_tracks}</li>
                <li>{album.name}</li>
                <li>{albumName.name.map(value=>value)}</li>
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