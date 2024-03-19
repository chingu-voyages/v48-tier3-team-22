import { useState, useEffect } from "react";
import { getDinosaurs } from "../../api/dinosaur";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Chart() {
  const [dinoData, setDinoData] = useState([]);
  const [dinoDiet, setDinoDiet] = useState({});

  useEffect(() => {
    getDinosaurs()
      .then((res) => {
        setDinoData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const calcuclatedDiet = () => {
      const counts = dinoData.reduce((acc, dino) => {
        acc[dino.diet] = (acc[dino.diet] || 0) + 1;
        return acc;
      }, {});
      setDinoDiet(counts);
    };
    calcuclatedDiet();
  }, [dinoData]);

  let herbivorous = dinoDiet["herbivorous"];
  let carnivorous = dinoDiet["carnivorous"];
  let omnivorous = dinoDiet["omnivorous"];

  return (
    <div className="chartContainer">
      <Bar
        data={{
          labels: ["Herbivorous", "Carnivorous", "Omnivorous"],
          datasets: [
            {
              label: "DINOSAUR DIET VARIABILITY",
              data: [herbivorous, carnivorous, omnivorous],
              backgroundColor: [
                "rgba(43,63,229,0.8",
                "rgba(250,192,19,0.8",
                "rgba(253,135,0.8)",
              ],
              borderColor: ["rgba(0, 0, 0, 0.5);"],
            },
          ],
        }}
      />
    </div>
  );
}

export default Chart;
