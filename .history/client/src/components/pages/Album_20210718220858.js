import React, { useEffect, useState } from 'react';

const Album = () => {

    let [album, setAlbum] = useState({});

    useEffect(() => {
        loadAlbum();
    })

    const loadAlbum = async () => {
        try {
            var axios = require('axios');

            var config = {
                method: 'get',
                url: 'http://localhost:5000/api/album',
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                     setAlbum(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }  
    }  
    console.log("album after setting", album.tracks)


        return (
            <div className="container py-4">
                <h1 style={{ background: "lightgrey" }} className="display-4">Album  </h1>
                <hr />
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