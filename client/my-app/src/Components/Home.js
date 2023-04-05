import React from "react";
import Navbar from "./Navbar";
import "../Styles/home.css";


function Home() {
  return (
    <div className="welcomes">
      <h1 className="word">Welcome To Hollywood Cinema!</h1>
      <h2 className="wel">Hollywood is a neighborhood located in Los Angeles, California, that’s also synonymous with the glamour, money and power of the entertainment industry. As the show-business capital of the world, Hollywood is home to many famous television and movie studios and record companies. Yet despite its glitzy status, Hollywood has humble roots: It began as a small agricultural community and evolved into a diverse, thriving metropolis where stars are born and dreams come true—for a lucky few.</h2>
    <img className="img" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/hollywood-cinema-kurt-hutton.jpg"></img>
    <img className="holy" src="https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/E3ANNW5C6AW3CNAGAP3MWZFUVU.jpg"></img>
    </div>
  );
}

export default Home;
