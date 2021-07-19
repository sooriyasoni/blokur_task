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
                <h1 style={{background: "lightgrey"}} >Album</h1>
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
                           album.name
                            trackName.map((trackName, index) => {
                                return (
                                    <th scope="row">{index + 1}</th>
                                    <tr>
                                    <td>{album.name}</td>
                                    <td>{agent.firstName}</td>
                                    <td>{agent.middleName}</td>
                                    <td>{agent.lastName}</td>
                                    <td>{agent.dob}</td>
                                    <td>{agent.heightInInches}</td>
                                    <td>
                                        <Link className="btn btn-primary" style = {{background : "black"}} to = {`/agent/${agent.agentId}`}>View</Link>
                                        <Link className="btn btn-outline-primary" style = {{background : "black"}} to = {`/editAgent/${agent.agentId}`}>Edit</Link>
                                        <Link className="btn btn-danger" style = {{background : "black"}} onClick={() => deleteAgent(agent.agentId)} to = {"/"}>Delete</Link>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="container py-4">
            <h1 style={{ background: "lightgrey" }} className="display-4">Album  </h1>
            <hr />
            <ul>
                <li>{album.total_tracks}</li>
                <li>{album.name}</li>
                <li>{albumName.map((value) => {
                    return <ul>
                        <li>{value.name}</li>
                    </ul>
                })}</li>

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