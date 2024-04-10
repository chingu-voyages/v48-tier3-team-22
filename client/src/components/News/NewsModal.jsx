import { useEffect } from "react";

const NewsModal = ({ article, onClose }) => {
  const onKeyPressed = (e) => {
    e.preventDefault();
    if (e.keyCode === "27" || e.keyCode === 27) {
      onClose(false);
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
        onClick={() => onClose(false)}
      ></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#f1f1f1] px-[20px] py-[28px] rounded max-w-[600px] min-w-[300px]  flex flex-col items-center overflow-y-scroll h-4/5 scrollbar-thumb-emerald-500 scrollbar-thin scrollbar-thumb-rounded-full">
        {article.urlToImage !== "N/A" ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-[200px] md:w-[300px] min-h-[200px] h-[200px] md:min-h-[300px] md:h-[300px] rounded-t-lg md:rounded-t-xl mb-[20px]"
          />
        ) : (
          <div className="w-[200px] md:w-[300px] min-h-[200px] h-[200px] md:min-h-[300px] md:h-[300px] rounded-t-xl flex justify-center items-center bg-[#fff] mb-[20px]">
            No image available
          </div>
        )}
        <div>
          <h2 className="lg:text-2xl mb-[20px] text-emerald-500 font-bold text-center">
            {article?.title.toUpperCase()}
          </h2>

          {article?.description != "N/A" ? (
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              {article.description}
            </p>
          ) : (
            ""
          )}
          {article?.url != "N/A" ? (
            <div className="flex items-center">
              <p className="text-lg mr-2 text-center text-yellow font-bold">
                <span className="text-green"> Read more on:</span>
              </p>
              <a
                href={article?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="color-green hover:text-green-500"
              >
                {article?.source.name}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          className="absolute top-[10px] right-[10px] py-[7px] px-[7px] text-[#fff] bg-emerald-500 rounded w-[25px] h-[25px] flex justify-center items-center font-bold"
          onClick={() => onClose(false)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default NewsModal;
