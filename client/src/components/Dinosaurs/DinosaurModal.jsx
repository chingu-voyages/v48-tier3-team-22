import { useEffect } from "react";

const DinosaurModal = ({ currentDino, onHandleModal }) => {
  const onKeyPressed = (e) => {
    e.preventDefault();
    if (e.keyCode === "27" || e.keyCode === 27) {
      onHandleModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", onKeyPressed);

    return () => {
      document.removeEventListener("keyup", onKeyPressed);
    };
  }, []);

  return (
    <div className="z-[100]">
      <div
        className="w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-[rgba(49,49,49,0.8)] cursor-pointer"
        onClick={() => onHandleModal(false)}
      ></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#f1f1f1] px-[20px] py-[28px] rounded max-w-[600px] min-w-[300px]  flex flex-col items-center overflow-y-scroll h-4/5 scrollbar-thumb-emerald-500 scrollbar-thin scrollbar-thumb-rounded-full">
        {currentDino.imageSrc !== "N/A" ? (
          <img
            src={currentDino.imageSrc}
            alt=""
            className="w-[200px] md:w-[300px] min-h-[200px] h-[200px] md:min-h-[300px] md:h-[300px] rounded-t-lg md:rounded-t-xl mb-[20px]"
          />
        ) : (
          <div className="w-[200px] md:w-[300px] min-h-[200px] h-[200px] md:min-h-[300px] md:h-[300px] rounded-t-xl flex justify-center items-center bg-[#fff] mb-[20px]">
            No image available
          </div>
        )}
        <div>
          <h2 className="mb-[20px] text-emerald-500 font-bold text-center">
            {currentDino?.name.toUpperCase()}
          </h2>

          {currentDino?.description != "N/A" ? (
            <p className="flex flex-col mb-[20px]">
              <span className="text-emerald-500 font-bold">Description: </span>
              <span>{currentDino?.description}</span>
            </p>
          ) : (
            ""
          )}

          <p className="flex flex-col mb-[20px]">
            <span className="text-emerald-500 font-bold">Diet: </span>
            {currentDino.diet}
          </p>

          <p className="flex flex-col mb-[20px]">
            <span className="text-emerald-500 font-bold">Found in: </span>
            {currentDino.foundIn}
          </p>

          {currentDino.namedBy != "N/A" ? (
            <p className="flex flex-col mb-[20px]">
              <span className="text-emerald-500 font-bold">Named By: </span>
              {currentDino.namedBy}
            </p>
          ) : (
            ""
          )}

          <p className="flex flex-col mb-[20px]">
            <span className="text-emerald-500 font-bold">Taxonomy: </span>
            {currentDino.taxonomy}
          </p>

          <p className="flex flex-col mb-[20px]">
            <span className="text-emerald-500 font-bold">Type: </span>
            {currentDino.typeOfDinosaur}
          </p>

          <p className="flex flex-col mb-[20px]">
            <span className="text-emerald-500 font-bold">Species Type: </span>
            {currentDino.typeSpecies}
          </p>

          {currentDino.weight != "N/A" ? (
            <p className="flex flex-col mb-[20px]">
              <span className="text-emerald-500 font-bold">Weight: </span>
              {`${currentDino.weight}kg`}
            </p>
          ) : (
            ""
          )}

          <p className="flex flex-col mb-[20px]">
            <span className="text-emerald-500 font-bold">Era: </span>
            {currentDino.whenLived}
          </p>
        </div>
        <button
          className="absolute top-[10px] right-[10px] py-[7px] px-[7px] text-[#fff] bg-emerald-500 rounded w-[25px] h-[25px] flex justify-center items-center font-bold"
          onClick={() => onHandleModal(false)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default DinosaurModal;
