import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../state/news";
import NewsModal from "./NewsModal";

import Loading from "../Loading";
import styles from "./News.module.css";
import newspaper from "../../assets/dino-newspaper.png";

import AOS from "aos";
import "aos/dist/aos.css";

const NewsPage = () => {
  AOS.init();
  const dispatch = useDispatch();
  const { news, isLoading, error } = useSelector((state) => state.news);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const [articleCount, setArticleCount] = useState(10);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const articles = news.articles;

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
        <div className="flex ">
          <div className=" w-2/5  p-4 bg-green-200   fixed left-0  bottom-0 dinoImg">
            <img
              src={newspaper}
              alt="Dinosaur"
              className="mt-4 w-full h-auto mt-6  "
            />
          </div>
          <div className="w-1/1 p-1 pt-8 md:ml-[40%]">
            <h2 className="text-6xl font-bold mb-8 text-center">
              Dinosaurs News
            </h2>
            <ul>
              {articles?.slice(0, articleCount).map((article, index) => (
                <article
                  key={index}
                  className={styles.articleContainer}
                  onClick={() => articleHandler(article)}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p>{article.source.name}</p>
                  <a onClick={preventLoadHandler}>{article.title}</a>
                  <div className="ml-auto">
                    <span>{new Date(article.publishedAt).getFullYear()}</span>
                  </div>
                </article>
              ))}
            </ul>
            <div className="m-8">
              <button
                className="p-[8px] ml-[18px] md:ml-[20px]  bg-emerald-500 text-[#fff] font-bold rounded-xl md:text-[20px] relative"
                onClick={coutHandler}
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
