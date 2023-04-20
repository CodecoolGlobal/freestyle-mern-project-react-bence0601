import React from "react";
import Form from "./Form";
import { useState, useEffect } from "react";
import "../Styles/ticket.css";
import { useNavigate } from "react-router-dom";

async function getData(url = "http://localhost:5000/api/ticket") {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  return response.json();
}

const handelDelete = (id) => {
  return fetch(`http://localhost:5000/api/ticket/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
};

function MyTicket() {
  const [myTickets, setMyTickets] = useState([]);
  const [myTicket, setMyTicket] = useState({});
  const [clicked, setClicked] = useState(false);
  const [yes, setYes] = useState(false);
  const [none, setNone] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getData().then((data) => {
      console.log(data);
      setMyTickets(data);
    });
  }, []);

  const deleteTicket = (id) => {
    handelDelete(id);
    navigate("/programs");
  };

  const updateTicket = (i) => {
    setClicked(true);
    setMyTicket(myTickets[i]);
  };

  return (
    <div>
      {myTickets.length !== 0 ? (
        <>
          {myTickets.map((tickets, i) => (
            <ul key={tickets._id}>
              <li>{tickets.Name}</li>
              <li>{tickets.Title}</li>
              <li>{tickets.sum}</li>
              <button className="btn" onClick={() => deleteTicket(tickets._id)}>
                Delete
              </button>
              <button
                className="btn"
                onClick={() => {
                  updateTicket(i);
                }}
              >
                Update
              </button>
            </ul>
          ))}
          {clicked ? <Form ticket={myTicket} /> : null}
        </>
      ) : (
        <div className="Load">
          <h1>You haven't any ticket!!</h1>
        </div>
      )}
    </div>
  );
}

export default MyTicket;
