import ntf from "../assets/404.png";

function PageNotFound() {
  return (
    <div className="pt-[115px] m-8 content-center">
      <h1>PAGE NOT FOUND</h1>
      <div className="ntf-container">
        <img src={ntf} alt="not found page" />
      </div>
    </div>
  );
}

export default PageNotFound;
