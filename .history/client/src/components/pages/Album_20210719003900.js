import React, { useEffect, useState } from 'react';

const Album = () => {
    const [album, setAlbum] = useState({});
    const [trackName, setTrackName] = useState([{}])
    const [artist, setArtist] = useState([{}])

    useEffect(() => {
        async function fetchAlbum() {
            const response = await fetch('http://localhost:5000/api/album');
            const json = await response.json();
            setAlbum(json);
            setTrackName(json.tracks.items);
            setArtist(json.tracks.items[0].artists)
        }
        fetchAlbum();
    }, []);

  function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


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
                            <th scope="col">Duration In Minutes</th>
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
                                    <td>{millisToMinutesAndSeconds(trackName.duration_ms)}</td>
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