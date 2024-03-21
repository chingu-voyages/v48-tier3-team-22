const DinosaurCard = ({ dinosaur }) => {
  return (
    <div className="flex">
      {dinosaur.imageSrc !== "N/A" ? (
        <img src={dinosaur.imageSrc} alt="" />
      ) : null}
      <h3>{dinosaur.name}</h3>
      <p>
        {dinosaur.typeOfDinosaur}, {dinosaur.diet}
        {dinosaur.weight !== "N/A" ? `, ${dinosaur.weight}` : ""}
      </p>
    </div>
  );
};

export default DinosaurCard;
