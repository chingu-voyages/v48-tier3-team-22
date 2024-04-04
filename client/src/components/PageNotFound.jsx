import ntf from "../assets/404.png";

function PageNotFound() {
  return (
    <div className="pt-[115px] flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-6">
          PAGE NOT FOUND
        </h1>
        <div className="ntf-container">
          <img src={ntf} alt="not found page" />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
