import { useEffect, useState } from "react";
import "../Styles/programs.css";
import Form from "./Form";

function Programs() {
  const [choosedMovies, setChoosedMovies] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => setChoosedMovies(data.slice(0, 5)));
  }, []);

  const handleclick = () => {
    setClicked(true);
  };

  return (
    <div className="container">
      {!clicked ? (
        choosedMovies.map((movie, id) => (
          <div className="main" key={id}>
            <ul className="cards">
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img src={movie.Poster} />
                    <span className="card_price">
                      <span>$</span>10
                    </span>
                  </div>
                  <div className="card_content">
                    <h2 className="card_title"> Title: {movie.Title}</h2>
                    <div className="card_text">
                      <h2> Year: {movie.Year}</h2>
                      <h3></h3>
                    </div>
                    <div className="imd">
                      <a href={`https://www.imdb.com/title/${movie.imdbID}`}>
                        Look at the trailer
                      </a>
                    </div>

                    <button className="my-btn" onClick={handleclick}>
                      Buy a ticket
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <Form />
      )}
    </div>
  );
}

export default Programs;
