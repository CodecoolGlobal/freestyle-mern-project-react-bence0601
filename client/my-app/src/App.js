import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Home  from './Components/Home';
import './App.css';
import {useEffect,useState} from 'react';
const apiKey="2b073566";

function App() {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
  async function fetchData(){
    const response=await fetch(`https://www.omdbapi.com/?apikey=2b073566&s=all&type=movie&page=1`)
    const movieDatas=await response.json();
    setMovieData(movieDatas)
  }
  fetchData();
}, [])
console.log(movieData);
if(!movieData){
    return(<h1 className='load'>The page is loading...</h1>)
  }
  return (
    <div className="App">
      <Welcome/>
      <Home/>
    </div>
  );
  
}

export default App;
