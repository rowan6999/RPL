import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hallo gaes</p>
          <h6>
          <p>Saya Robby Kurniawan</p>
          <p>Alias ROWAN</p>
          <p>Teknik Bersatu tak bisa dikalahkan</p></h6>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpeg`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
