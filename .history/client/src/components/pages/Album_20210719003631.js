import React, { useEffect, useState } from 'react';

const Album = () => {
    const [album, setAlbum] = useState({});
    const [trackName, setTrackName] = useState([{}])
    const [artist, setArtist] = useState([{}])

    useEffect(() => {
        async function fetchAlbum() {
            const response = await fetch('http://localhost:5000/api/album');
            const json = await response.json();
            console.log(json.tracks.items[0].artists[0].name)
            setAlbum(json);
            setTrackName(json.tracks.items);
            setArtist(json.tracks.items[0].artists)
        }
        fetchAlbum();
    }, []);

    console.log('json after albumname', artist)

    return (
        <div className="container">
            <div className="py-4">
                <h1 style={{background: "lightgrey"}} >Album: {album.name}</h1>
                <p style={{background: "lightgrey"}}>Released: {album.release_date} Tracks: {album.total_tracks}</p>
                <table style= {{background: "lightgrey"}} className="table border shadow ">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Track Name</th>
                            <th scope = "col">Artist Name</th>
                            <th scope="col">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trackName.map((trackName) => {
                                return (
                                    <tr>
                                    <th scope="row">{trackName.track_number}</th>
                                    <td>{trackName.name}</td>
                                    <td>
                                        {artist.map(value=>value.name)} 
                                    </td>
                                    <td>{trackName.duration_ms}</td>
                                    <td>{}</td>
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