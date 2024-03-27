import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./News.module.css";
import newspaper from "../../assets/dino-newspaper.png";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const apiKey = "82fe875a3ebf429badca4cb752ea227d";
  const apiUrl = `https://newsapi.org/v2/everything?q=dinosaurs&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [apiUrl]);
  console.log(news);

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
          <div className="w-1/1 p-1 pt-8  ml-[40%] ">
            <h2 className="text-6xl font-bold mb-8 text-center">
              Dinosaurs News
            </h2>
            <ul>
              {news.slice(0, 10).map((article, index) => (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
