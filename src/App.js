import React from "react";
import L from "leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import { Map, ImageOverlay } from "react-leaflet";
import "./App.css";
import { dataPoints } from "./Data.js";
import "leaflet/dist/leaflet.css";
import Navbar from "./Components/Common/Navbar";

var bounds = [
  [100, 0],
  [0, 100],
];



const App = () => {
  return (
    <div>
      <Navbar />
      <Map
        className=""
        crs={L.CRS.Simple}
        bounds={bounds}
        maxZoom={4.9}
        // scrollWheelZoom={false}
        onzoomstart={(e) => console.log(e)}
        attributionControl={false}
      >
        <HeatmapLayer
          points={dataPoints}
          longitudeExtractor={(m) => m.coordinates[0]}
          latitudeExtractor={(m) => m.coordinates[1]}
          intensityExtractor={(m) => 100}
        />
        <ImageOverlay
          url={require("./Assets/Images/gtaMap.png")}
          bounds={[
            [100, 0],
            [0, 125],
          ]}
        />
      </Map>
    </div>
  );
};
export default App;
