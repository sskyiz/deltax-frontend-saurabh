import React, { useEffect, useState } from 'react'
import superagent from 'superagent';
import './Artist.css'
import Navbar from './Navbar';

export default function Artist() {

    const [data, setData] = useState([])

    useEffect(()=>{
        getArtistData()
    },[])

    const getArtistData = () =>{
        superagent
        .get('http://localhost:8080/getArtist')
        .then((response)=>{
            console.log(response.body);
            setData(response.body)
        })
    }

    const handleAddArtist = () =>{
        window.location.href = "/addArtist"
    }

  return (
    <div>
        <Navbar />
        <h1>Artists</h1>
        <table >
            <th>Artist Name</th>
            <th>Date of Birth</th>
            <th>Songs</th>
            {data.map((item,i)=>(
                <tr key={i}>
                    <td>{item.artistName}</td>
                    <td>{item.artistDob}</td>
                    <td>{item.artistSong}</td>
                </tr>
            ))}
        </table>

        <div>
            <button onClick={handleAddArtist}>Add Artist</button>
        </div>
    </div>
  )
}