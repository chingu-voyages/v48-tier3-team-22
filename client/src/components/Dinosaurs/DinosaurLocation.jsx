import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Loading from "../Loading";
import { getDinosaurs } from "../../api/dinosaur";

function DinosaurLocation() {
  const [dinoData, setDinoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mapImage, setMapImage] = useState("");
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);

  useEffect(() => {
    getMapImg(lat, lng);
  }, []);

  useEffect(() => {
    getDinosaurs()
      .then((res) => {
        setDinoData(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  async function getCountryCoordinates(countryName) {
    const accessToken =
      "pk.eyJ1IjoidnVrYXM4NiIsImEiOiJjbGw5Y3lxOHIwdDQzM2xvNjZpNWh2N3JlIn0.XEHVh0Kjl8gkQ0QZcrvpYQ";
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      countryName
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

  if (dinoData && dinoData.length > 0) {
    getCountryCoordinates(dinoData[11].foundIn)
      .then((coordinates) => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }

  async function getMapImg(lat, lng) {
    const accessToken =
      "pk.eyJ1IjoidnVrYXM4NiIsImEiOiJjbGw5Y3lxOHIwdDQzM2xvNjZpNWh2N3JlIn0.XEHVh0Kjl8gkQ0QZcrvpYQ";
    const size = "800x600";
    const zoom = 5;
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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={dinoData[1].imageSrc} />
        <Card.Body>
          <Card.Title>{dinoData[0].name}</Card.Title>
          <Card.Text>{dinoData[0].description}</Card.Text>
        </Card.Body>
      </Card>
      <div>
        <img src={mapImage} alt="Map" />
      </div>
    </>
  );
}

export default DinosaurLocation;
