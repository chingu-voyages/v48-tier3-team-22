import { useState, useEffect } from "react";
import { getDinosaurs } from "../../api/dinosaur";

function Chart() {
  const [dinoData, setDinoData] = useState([]);

  useEffect(() => {
    getDinosaurs()
      .then((res) => {
        setDinoData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>Some random chart</div>;
}

export default Chart;
