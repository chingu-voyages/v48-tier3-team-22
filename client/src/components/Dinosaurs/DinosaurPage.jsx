import { useState, useEffect } from "react";
import { getDinosaurs } from "../../api/dinosaur";
import DinosaurCard from "./DinosaurCard";

const DinosaurPage = () => {
  const [query, setQuery] = useState("");
  const [dinosaurs, setDinosaurs] = useState([]);
  const [filteredDinosaurs, setFilteredDinosaurs] = useState(dinosaurs);

  const [typeOptions, setTypeOptions] = useState([]);
  const [dietOptions, setDietOptions] = useState([]);
  const [selectedType, setSelectedType] = useState(undefined);
  const [selectedDiet, setSelectedDiet] = useState(undefined);

  const getUniqueOptions = (arr = []) => {
    const set = new Set(arr);
    const uniqueArr = Array.from(set).sort();
    return uniqueArr;
  };

  useEffect(() => {
    getDinosaurs()
      .then((res) => {
        setDinosaurs(res);
        setFilteredDinosaurs(res);
        const typeOpts = getUniqueOptions(res.map((r) => r.typeOfDinosaur));
        const dietOpts = getUniqueOptions(res.map((r) => r.diet));

        setTypeOptions(typeOpts);
        setDietOptions(dietOpts);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    searchDinosaurs();
  }, [selectedType, selectedDiet]);

  const searchDinosaurs = (e) => {
    e?.preventDefault();
    const filtered = dinosaurs.filter(
      (d) =>
        (query ? d.name.toLowerCase().includes(query.toLowerCase()) : true) &&
        (selectedType && selectedType !== "None"
          ? selectedType === d.typeOfDinosaur
          : true) &&
        (selectedDiet && selectedDiet !== "None"
          ? selectedDiet === d.diet
          : true),
    );
    setFilteredDinosaurs(filtered);
  };

  return (
    <div className="pt-[115px]">
      <div>
        <form action="" onSubmit={searchDinosaurs}>
          <input
            type="search"
            name=""
            id=""
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        <div>
          <label htmlFor="type">Type:</label>
          <select
            defaultValue={undefined}
            name=""
            id="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value={undefined}>None</option>
            {typeOptions.map((to) => (
              <option key={to} value={to}>
                {to}{" "}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="diet">Diet:</label>
          <select
            name=""
            defaultValue={undefined}
            id="diet"
            value={selectedDiet}
            onChange={(e) => setSelectedDiet(e.target.value)}
          >
            <option value={undefined}>None</option>

            {dietOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {filteredDinosaurs.map((dinosaur) => (
          <DinosaurCard dinosaur={dinosaur} key={dinosaur.id} />
        ))}
      </div>
    </div>
  );
};

export default DinosaurPage;
