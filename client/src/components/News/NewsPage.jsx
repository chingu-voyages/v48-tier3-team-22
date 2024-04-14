import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../state/news";
import NewsModal from "./NewsModal";
import Loading from "../Loading";
import styles from "./News.module.css";
import newspaper from "../../assets/dino-newspaper.png";

const NewsPage = () => {
  const dispatch = useDispatch();
  const { news, isLoading, error } = useSelector((state) => state.news);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articleCount, setArticleCount] = useState(10);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const countHandler = () => {
    setArticleCount((prevCount) => prevCount + 5);
  };

  const articleHandler = (article) => {
    setSelectedArticle(article);
  };

  const closeModalHandler = () => {
    setSelectedArticle(null);
  };

  const preventLoadHandler = (e) => {
    e.preventDefault();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="pt-[115px]">
        <div className="flex">
          <div className="w-2/5 p-4 bg-green-200 fixed left-0 bottom-0">
            <img
              src={newspaper}
              alt="Dinosaur"
              className="mt-4 w-full h-auto"
            />
          </div>
          <div className="w-full p-1 pt-8 ml-[40%]">
            <h2 className="text-6xl font-bold mb-8 text-center">
              Dinosaurs News
            </h2>
            {error && (
              <div className="text-center text-red-500 mb-4">{error}</div>
            )}
            <ul>
              {news.slice(0, articleCount).map((article, index) => (
                <li
                  key={index}
                  className={styles.articleContainer}
                  onClick={() => articleHandler(article)}
                >
                  <p>{article.source.name}</p>
                  <a href="#" onClick={preventLoadHandler}>
                    {article.title}
                  </a>
                  <div className="ml-auto">
                    <span>{new Date(article.publishedAt).getFullYear()}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="m-8">
              <button
                className="p-[8px] bg-emerald-500 text-[#fff] font-bold rounded-xl md:text-[20px]"
                onClick={countHandler}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      {selectedArticle && (
        <NewsModal article={selectedArticle} onClose={closeModalHandler} />
      )}
    </>
  );
};

export default NewsPage;
