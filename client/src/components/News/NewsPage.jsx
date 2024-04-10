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

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news from server:", error);
        setError("Failed to fetch news. Please try again later");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);


  const coutHandler = () => {
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
          <div className=" w-2/5  p-4 bg-green-200  fixed left-0  bottom-0">
            <img
              src={newspaper}
              alt="Dinosaur"
              className="mt-4 w-full h-auto mt-6"
            />
          </div>
          <div className="w-1/1 p-1 pt-8 ml-[40%] ">
            <h2 className="text-6xl font-bold mb-8 text-center">
              Dinosaurs News
            </h2>


            {error && (
              <div className="text-center text-red-500 mb-4">{error}</div>
            )}

            {isLoading ? (
              <div className="flex justify-center items-center h-96">
                <Loading />
              </div>
            ) : (
              <ul>
                {news.slice(0, articleCount).map((article, index) => (
                  <li key={index} className={styles.articleContainer}>
                    <p>{article.source.name}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.title}
                    </a>
                    <div className="ml-auto">
                      <span>{new Date(article.publishedAt).getFullYear()}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {!isLoading && !error && (
              <div className="m-8">
                <button
                  className="p-[8px] bg-emerald-500 text-[#fff] font-bold rounded-xl md:text-[20px] relative"
                  onClick={coutHandler}
                >
                  Load More
                </button>
              </div>
            )}

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
