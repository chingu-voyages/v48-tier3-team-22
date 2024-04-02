import { useState, useEffect } from "react";
import { getDinosaurs } from "../../api/dinosaur";
import DinosaurCard from "./DinosaurCard";
import SearchIcon from "../../assets/search-icon.png";

import DinosaurModal from "./DinosaurModal";

const DinosaurPage = () => {
  const [query, setQuery] = useState("");
  const [dinosaurs, setDinosaurs] = useState([]);
  const [filteredDinosaurs, setFilteredDinosaurs] = useState(dinosaurs);

  const [typeOptions, setTypeOptions] = useState([]);
  const [dietOptions, setDietOptions] = useState([]);
  const [selectedType, setSelectedType] = useState(undefined);
  const [selectedDiet, setSelectedDiet] = useState(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDino, setCurrentDino] = useState(null);

  const getUniqueOptions = (arr = []) => {
    const set = new Set(arr);
    const uniqueArr = Array.from(set).sort();
    return uniqueArr;
  };

  useEffect(() => {
    getDinosaurs()
      .then((res) => {
        console.log(res);
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
    setQuery("");
  };

  return (
    <div className="pt-[115px] p-[10px] bg-gray-100 	h-full	w-full  flex flex-col items-center justify-center">
      {isModalOpen && (
        <DinosaurModal
          currentDino={currentDino}
          onHandleModal={setIsModalOpen}
        />
      )}

      <div className="flex flex-col items-center">
        <form className="mb-[30px]" action="" onSubmit={searchDinosaurs}>
          <div className="relative flex flex-col gap-y-[10px] md:flex-row items-center">
            <img
              className="absolute w-5  md:ml-3 pointer-events-none top-[9px] left-[10px] md:top-auto md:left-auto"
              src={SearchIcon}
              alt=""
            />
            <input
              className=" pr-2 py-[7px] pl-10 md:pr-3 md:py-2 shadow-sm  placeholder-gray-400 text-gray-600 rounded-xl md:rounded-r-none border-[1px] border-emerald-500 ring-emerald-500  focus:ring-[0.5px] focus:outline-none w-full block"
              autoComplete="off"
              type="input"
              name="search"
              id="search"
              aria-label="Search dinosaurs"
              placeholder="Search dinosaurs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={searchDinosaurs}
              className="px-3 py-[6.5px] bg-emerald-500 text-[#fff] font-bold rounded-lg md:rounded-l-none text-[14px] md:text-[20px] text-center"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex flex-col items-start gap-y-[10px] mb-[20px]">
          <div className="flex flex-col md:flex-row md:items-center">
            <label
              htmlFor="type"
              className="text-emerald-500 font-bold block w-[120px]"
            >
              Filter by Type: {}
            </label>
            <select
              className=" px-3 py-1 text-[18px] bg-gray-300 text-gray-600 rounded outline-emerald-500 w-[275px]"
              defaultValue={undefined}
              name=""
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option
                className="bg-emerald-500 hover:bg-emerald-500 text-white"
                value={undefined}
              >
                None
              </option>
              {typeOptions.map((to) => (
                <option
                  className="bg-emerald-500 hover:bg-emerald-500 text-white"
                  key={to}
                  value={to}
                >
                  {to}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <label
              htmlFor="diet"
              className="text-emerald-500 font-bold block w-[120px]"
            >
              Filter by Diet: {}
            </label>
            <select
              className=" px-3 py-1 text-[18px] bg-gray-300 text-gray-600 rounded outline-emerald-500 w-[275px]"
              name=""
              defaultValue={undefined}
              id="diet"
              value={selectedDiet}
              onChange={(e) => setSelectedDiet(e.target.value)}
            >
              <option
                className="bg-emerald-500 hover:bg-emerald-500 text-white"
                value={undefined}
              >
                None
              </option>

              {dietOptions.map((opt) => (
                <option
                  className="bg-emerald-500 hover:bg-emerald-500 text-white"
                  key={opt}
                  value={opt}
                >
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center  gap-y-[20px] p-[20px] gap-x-[20px]">
        {filteredDinosaurs.map((dinosaur) => (
          <DinosaurCard
            onHandleDinosaur={setCurrentDino}
            onHandleModal={setIsModalOpen}
            dinosaur={dinosaur}
            key={dinosaur.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DinosaurPage;
