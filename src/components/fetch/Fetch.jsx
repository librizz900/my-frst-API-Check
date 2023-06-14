import React from 'react'
import { useEffect, useState } from 'react'

const Fetch = () => {
    const [photo, setPhoto] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response=>response.json())
        .then(response=>setPhoto(response))
        .catch(error=>console.log(error))
    },[])
  return (
    <div className="d-flex flex-wrap gap-3">
        {
        photo.map((photo,index)=> (
            <div class="card" style={{width: "18rem"}} key={index}>
                 <p class="card-text">{photo.id}</p>
                <img src={photo.url} class="card-img-top" alt="..."/>
            <div class="card-body">
                 <h5 class="card-title">{photo.title}</h5>
                 <a href="#" class="btn-primary">{photo.thumbnailUrl}</a>
            </div>
        </div>
        ))
       }
    </div>
  )
}

export default Fetch