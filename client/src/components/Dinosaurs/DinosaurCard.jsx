const DinosaurCard = ({ dinosaur, onHandleDinosaur, onHandleModal }) => {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-100 w-[200px] md:w-[400px] rounded-lg md:rounded-xl overflow-hidden shadow-2xl">
      {dinosaur.imageSrc !== "N/A" ? (
        <img
          src={dinosaur.imageSrc}
          alt=""
          className="w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-t-lg md:rounded-t-xl"
        />
      ) : (
        <div className="w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-t-xl flex justify-center items-center bg-[#fff]">
          No image available
        </div>
      )}

      <div className="flex flex-col justify-center items-center gap-y-[10px] p-[20px]">
        <h3>
          <span className="text-emerald-500 font-bold md:text-[22px]">
            {dinosaur.name}
          </span>
        </h3>
        <div>
          <p>
            <span className="text-emerald-500 font-bold">Type: </span>
            <span className="text-gray-600">{dinosaur.typeOfDinosaur}</span>
          </p>
          <p className="text-gray-600">
            <span className="text-emerald-500 font-bold">Weight: </span>
            {dinosaur.weight !== "N/A" ? ` ${dinosaur.weight}kg` : "unknown"}
          </p>
          <p className="text-gray-600">
            <span className="text-emerald-500 font-bold">Found in: </span>
            {dinosaur.foundIn}
          </p>
        </div>

        <button
          onClick={() => {
            onHandleDinosaur(dinosaur);
            onHandleModal(true);
          }}
          className="p-[8px] bg-emerald-500 text-[#fff] font-bold rounded-lg md:rounded-xl text-[14px] md:text-[20px]"
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default DinosaurCard;
