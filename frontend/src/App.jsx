import React from "react";
import Video from "./assets/canyon.mp4";
// eslint-disable-next-line no-unused-vars
import LocationIcon from "./assets/LocationIcon.png";
import "./Scss/App.scss";

function App() {
  return (
    <div>
      <div className="main__div">
        <div className="search__bar">
          <input
            type="search"
            placeholder="entrer le nom de la ville..."
            name="searchBar"
          />
        </div>
        <div className="canyon">
          <video height="180" title="Canyon" autoPlay loop muted src={Video} />
        </div>
        <div className="celcius">
          {/* <div className="LocationIcon">
            <LocationIcon style={{ height: "2rem", width: "2rem" }} />
          </div> */}
          <div className="city__name">
            <h4>Nom de la ville</h4>
          </div>
          <div className="temp__celcius">
            <h2>
              <i>Température</i>
            </h2>
            <h1 className="celcius__code">&#8451;</h1>
          </div>
          <div className="humidity__windspeed" />
          <h4 className="humidity_text">Humidité</h4>
          <h5>Humidity Data</h5>
        </div>
        <div>
          <h4>Vitesse du vent</h4>
          <h5>Wind Speed Data</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
