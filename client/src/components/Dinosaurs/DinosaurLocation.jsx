import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Loading from "../Loading";
import { getDinosaurs } from "../../api/dinosaur";

function DinosaurLocation({ foundIn }) {
  // const [dinoData, setDinoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mapImage, setMapImage] = useState("");
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);

  console.log(foundIn);
  useEffect(() => {
    getMapImg(lat, lng);
  }, []);

  async function getCountryCoordinates(foundIn) {
    const accessToken =
      "pk.eyJ1IjoidnVrYXM4NiIsImEiOiJjbGw5Y3lxOHIwdDQzM2xvNjZpNWh2N3JlIn0.XEHVh0Kjl8gkQ0QZcrvpYQ";
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      foundIn
    )}.json?access_token=${accessToken}&types=country&limit=1`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch coordinates");
      }
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const [longitude, latitude] = data.features[0].center;
        setLat(latitude);
        setLng(longitude);
        return { latitude, longitude };
      } else {
        throw new Error("No coordinates found for the country");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  }

  getCountryCoordinates(foundIn)
    .then((coordinates) => {
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error:", error);
      setLoading(false);
    });

  console.log(lat, lng);
  useEffect(() => {
    getMapImg(lat, lng);
  }, [lat, lng]);

  async function getMapImg(lat, lng) {
    const accessToken =
      "pk.eyJ1IjoidnVrYXM4NiIsImEiOiJjbGw5Y3lxOHIwdDQzM2xvNjZpNWh2N3JlIn0.XEHVh0Kjl8gkQ0QZcrvpYQ";
    const size = "400x200";
    const zoom = 3;
    const markerSize = "small";

    const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-l+000(${lng},${lat})/${lng},${lat},${zoom}/${size}?access_token=${accessToken}&marker-color=red&marker-size=${markerSize}&marker-symbol=marker`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch the map image");
      }

      const imageBlob = await response.blob();

      const imgUrl = URL.createObjectURL(imageBlob);
      setMapImage(imgUrl);
    } catch (error) {
      console.error("Error fetching map image", error);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <img src={mapImage} alt="Map" />
      </div>
    </>
  );
}

export default DinosaurLocation;
