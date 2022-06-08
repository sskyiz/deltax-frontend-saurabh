import React, {useState} from 'react'
import superagent from 'superagent'
import './AddArtist.css'
import Navbar from './Navbar'

export default function AddArtist() {

const [artistName, setArtistName] = useState([])
const [artistSongs, setartistSongs] = useState([])
const [artistDoB, setartistDoB] = useState([])

const handleRegister = (e) => {
    e.preventDefault()

    const obj = {
        "artistName" : artistName,
        "artistSong" : artistSongs,
        "artistDob" : artistDoB
    } 
    superagent
    .post("http://localhost:8080/addArtist",obj)
    .then((response) => {
            alert("Added successfully")
            window.location.href = "/artist"
        }
    )}

  return (
    <div className='addArtist'>
          <Navbar />
          <h1 className='heading'>Add Artist</h1>
          <input required="required" type='text' value={artistName} placeholder="Enter Artist Name" onChange={(e)=>setArtistName(e.target.value)} />
          <input required="required" type='text' value={artistSongs} placeholder="Enter Artist Songs" onChange={(e)=>setartistSongs(e.target.value)} />
          <input required="required" type='date'  value={artistDoB} placeholder="Enter Artist DoB" onChange={(e)=>setartistDoB(e.target.value)} /> 
          <button type='button' onClick={handleRegister}>Submit</button>
      </div>  
  )
}
