import React, {useState, useEffect} from 'react'
import superagent from 'superagent';
import './AddSong.css';
import Navbar from './Navbar';

export default function AddSong() {

const [artistId, setArtistId] = useState([])
const [songName, setSongName] = useState([])
const [releaseDate, setReleaseDate] = useState([])
const [songRating, setSongRating] = useState([])
const [data, setData] = useState([])
const [index, setIndex] = useState()

const getArtistData = () =>{
    superagent
    .get('http://localhost:8080/getArtist')
    .then((response)=>{
        setData(response.body)
    })
    
}

useEffect(()=>{
    getArtistData()
},[])

const handleRegister = (e) => {
    e.preventDefault()

    const obj = {
        "songName" : songName,
        "releaseDate" : releaseDate,
        "songRating" : songRating,
        "artist" : data[index],
    } 
    superagent
    .post("http://localhost:8080/addSong",obj)
    .then((response) => {
            alert("Added successfully")
            window.location.href = "/songs"
        }
    )}

    const getArtistDatas = (e) =>{
        console.log(e.target.value);
        setIndex(e.target.value)
    }

  return (
    <div className='addSong'>
          <Navbar />
          <h1 className='heading'>Add Song</h1>
          <input required="required" type='text' value={songName} placeholder="Enter Song Name" onChange={(e)=>setSongName(e.target.value)} />
          <input required="required" type='date' value={releaseDate} placeholder="Enter Release Date " onChange={(e)=>setReleaseDate(e.target.value)} />
          <input required="required" type='number' min="1" max="5" value={songRating} placeholder="Enter Song Rating" onChange={(e)=>setSongRating(e.target.value)} /> 
          <div className='drop'>
              <select onChange={getArtistDatas}>
                  <option disabled selected>--Select Artist--</option>
                  {data.map((item,i)=>(
                      <option value={i}>{item.artistName}</option>
                      )
                  )}
              </select>
          </div>    

          <button type='button' onClick={handleRegister}>Submit</button>
      </div>  
  )
}
