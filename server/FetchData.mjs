import fetch from "node-fetch";
let moviesArray=[];
import * as fs from 'fs';


async function getAllData(){
    for(let i=1;i<101;i++){
      await fetchOnes(i);
    }
}
async function fetchOnes(index){
     const movie=await fetch(`https://www.omdbapi.com/?apikey=2b073566&s=all&type=movie&page=${index}`)
     const data= await movie.json();
        moviesArray=[...moviesArray, ...data.Search];
    // console.log(data.Search);
}  
await getAllData();
//setTimeout(()=>console.log(moviesArray),3000);

 function example() {
    try {
      const content = JSON.stringify(moviesArray)
     fs.writeFileSync('movies.json', content);
    } catch (err) {
      console.log(err);
    }
  }
  example();
