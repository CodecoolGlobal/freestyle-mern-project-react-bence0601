import React from "react";
import Form from "./Form";
import { useState, useEffect } from "react";
import "../Styles/ticket.css";

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

function MyTicket() {
  const [myTickets, setMyTickets] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setMyTickets(data);
    });
  }, []);
  return (
<div>
{myTickets.map(tickets=>(
                   <ul>
                    <li>{tickets.Name}</li>
                     <li>{tickets.FilmName}</li>
                     <li>{tickets.sum}</li>
                     

            </ul>
                ))}

</div>

 )
  }
            
    

export default MyTicket;
