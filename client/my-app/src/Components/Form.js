import React from "react";
import "../Styles/form.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Form({ ticket = null }) {
  const [title, setTitle] = useState();
  const [fullname, setFullname] = useState();
  const [dbvalue, setDbValue] = useState(0);
  const [sumNumber, setSumnumber] = useState(0);
  const [chosedMovies, setChoosedMovies] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => setChoosedMovies(data.slice(0, 5)));

    if (ticket) {
      setFullname(ticket.Name);
      setDbValue(ticket.db);
      setSumnumber(ticket.db * 10);
    }
  }, []);

  async function submit() {
    if (ticket) {
      handleUpdate();
    } else {
      postData();
    }
  }

  const handleUpdate = () => { // TODO
    return fetch(`http://localhost:5000/api/ticket/${ticket.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setDbValue(amount);
    setSumnumber(amount * 10);
  }

  async function postData(
    url = "http://localhost:5000/api/ticket",
    data = {
      Title: title,
      Name: fullname,
      db: dbvalue,
      sum: sumNumber,
    }
  ) {
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
    nav("/myticket");
    return response.json();
  }

  return (
    <div className="box">
      <form>
        <span className="text-center">Reservation</span>
        <div className="input-container">
          <input
            type="text"
            required=""
            placeholder={ticket ? fullname : "Full Name"}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label>Full Name</label>
        </div>
        <div className="input-container">
          <select
            type="select"
            required=""
            placeholder="Movie"
            onChange={(e) => setTitle(e.target.value)}
          >
            {chosedMovies.map((movie, id) => (
              <option key={id}>{movie.Title}</option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <input
            type="mail"
            required=""
            placeholder={ticket ? dbvalue : "Amount"}
            onChange={(e) => handleAmountChange(e)}
          />
          <label>Amount</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            required=""
            placeholder="Price"
            value={sumNumber + "$"}
            readOnly={true}
          />
        </div>
        <button type="button" className="btn" onClick={() => submit()}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
