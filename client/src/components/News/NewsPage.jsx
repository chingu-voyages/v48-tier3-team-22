import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading';
import styles from './News.module.css';
import newspaper from '../../assets/dino-newspaper.png';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articleCount, setArticleCount] = useState(10);
  const apiUrl = `https://newsapi.org/v2/everything?qInTitle=dinosaurs&apiKey=${
    import.meta.env.VITE_NEWS_API_KEY
  }`;

  console.log(news);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiUrl]);

  const coutHandler = () => {
    setArticleCount((prevCount) => prevCount + 5);
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
          <div className="w-2/5  p-4 bg-green-200  fixed left-0  bottom-0">
            <img
              src={newspaper}
              alt="Dinosaur"
              className="w-full h-auto mt-6"
            />
          </div>
          <div className="w-1/1 p-1 pt-8 ml-[40%] ">
            <h2 className="text-6xl font-bold mb-8 text-center">
              Dinosaurs News
            </h2>
            <ul>
              {news.slice(0, articleCount).map((article, index) => (
                <article key={index} className={styles.articleContainer}>
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
                </article>
              ))}
            </ul>
            <div className="m-8">
              <button
                className="p-[8px] bg-emerald-500 text-[#fff] font-bold rounded-xl md:text-[20px] relative"
                onClick={coutHandler}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
