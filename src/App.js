import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import List from './components/List'
import Nav from './components/Navbar';
import React from 'react';


function App() {
  const [Movies,setMovies]=useState([{title:"Hitman & Bodyguard",
  desciption:"Action & Aventure, Mystère & Thriller, Comédie, Crime & Thriller, Made in Europ",
  posterUrl:"https://www.telerama.fr/sites/tr_master/files/sheet_media/movie/7_764246.jpg",
    rate:5,
}
,{title:"Harry Potter à l'école des sorciers",
  desciption:"Fantastique, Action & Aventure, Pour enfants",
  posterUrl:"https://imgsrc.cineserie.com/2001/12/1500437.jpg?ver=1",
  rate:1,
},{title:"The Conjuring 2",
  desciption:"Horreur, Mystère & Thriller, Drame",
  posterUrl:"https://fr.web.img5.acsta.net/pictures/16/05/24/14/59/347673.jpg",
  rate:5,
},{title:"Taken",
  desciption:"Mystère & Thriller, Action & Aventure, Crime & Thriller, Made in Europe",
  posterUrl:"https://fr.web.img6.acsta.net/medias/nmedia/18/65/13/27/18899329.jpg",
  rate:3,
}
])

const [search,setsearch]=useState('')
const [rating, setRating]=useState(0)
const handleAdd=(newMovie)=>{setMovies([...Movies,newMovie])}
  return (
    <div className="App">
      <Nav setsearch={setsearch} setRating={setRating}/>
      <AddMovie handleAdd={handleAdd}/>
 <List Movies={Movies} rating={rating} search={search} />
 
    </div>
  );
}

export default App;