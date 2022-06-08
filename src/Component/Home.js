import React from 'react'
import './Home.css'

export default function Home() {

    const handleSongs = () =>{
        window.location.href = "/songs"
    }

    const handleArtist = () =>{
        window.location.href = "/artist"
    }

  return (
        <div className='homePage'>
            <h1>Delta<span>X</span></h1>
            <button onClick={handleSongs}>Songs Dashboard</button>
            <button onClick={handleArtist}>Artists Dashboard</button>
        </div>
    )
}
