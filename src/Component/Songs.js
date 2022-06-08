import React, { useEffect, useState } from 'react'
import superagent from 'superagent'
import Navbar from './Navbar'

export default function Songs() {

    const [data, setData] = useState([])

    useEffect(()=>{
        getSongData()
    },[])

    const getSongData = () =>{
        superagent
        .get('http://localhost:8080/getSongs')
        .then((response)=>{
            console.log(response.body)
            setData(response.body)
        })
    }

    const handleAddSongs = () =>{
        window.location.href = "/addSong"
    }

  return (
    <div>
        <Navbar/>
        <h1>Songs</h1>
        <table>
            <th>Song Name</th>
            <th>Release Date</th>
            <th>Artist Name</th>
            <th>Song Rating</th>
            
            {data.map((item,i)=>(
                <tr key={i}>
                    <td>{item.songName}</td>
                    <td>{item.releaseDate}</td>
                    <td>{item.artist.artistName}</td>
                    <td>{item.songRating}</td>
                    
                </tr>
            ))}
        </table>

        <div>
            <button onClick={handleAddSongs}>Add Song</button>
        </div>
    </div>
  )
}