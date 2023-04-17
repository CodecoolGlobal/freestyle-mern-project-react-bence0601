import React from 'react'
import "../Styles/form.css";
import Programs from './Programs';
import {useState} from 'react';


function Form({movies}) {
	const [dbvalue, setDbValue] = useState(0) 
    const [filmname, setFilmname] = useState(movies[0].Title);
    const [fullname, setFullname] = useState(null);
    const sumNumber=dbvalue*10;

console.log(movies);
	async function postData(url = "http://localhost:5000/api/ticket", data = {
        "FilmName": filmname,
        "Name": fullname,
        "db": dbvalue,
        "sum": sumNumber
    }) {

        console.log("clicked");

        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",

            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),

        });

        return response.json();
    }


  return (
    
    <div class="box">
	<form>
		<span class="text-center">Reservation</span>
	<div class="input-container">
		<input type="text" required="" placeholder='Full Name' onChange={(e) => setFullname(e.target.value)}/>
		<label>Full Name</label>		
	</div>
	<div class="input-container">		
		<select type="select" required="" placeholder='Movie' onChange={(e) => setFilmname(e.target.value)}> 
        {movies.map((movie)=>(
        <option > 
            {movie.Title}
        </option>
		))}
</select>
	</div>
		<div class="input-container">		
		<input type="mail" required="" placeholder='Amount' onChange={(e) => setDbValue(e.target.value)}/>
		<label>Amount</label>
	</div>
   < div class="input-container">
		<input type="text" required="" placeholder='Price' value={sumNumber+ "$"} readOnly={true} db/>
		
	</div>
		<button type="button" class="btn" onClick={() => postData()}>submit</button>
</form>	

</div>
  )
}

export default Form;