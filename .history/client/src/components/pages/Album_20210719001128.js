import React, { useEffect, useState } from 'react';

const Album = () => {
    const [album, setAlbum] = useState({});
    const [trackName, setTrackName] = useState([{}])

    useEffect(() => {
        async function fetchAlbum() {
            const response = await fetch('http://localhost:5000/api/album');
            const json = await response.json();
            setAlbum(json);
            setTrackName(json.tracks.items);
        }
        fetchAlbum();
    }, []);

    console.log('json after albumname', albumName)

    return (
        <div className="container">
            <div className="py-4">
                <h1 style={{background: "lightgrey"}} >{album.name}</h1>
                <table style= {{background: "lightgrey"}} className="table border shadow ">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Track Name</th>
                            <th scope="col">Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trackName.map((trackName, index) => {
                                return (
                                    <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{trackName.name}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
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