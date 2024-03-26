import { useState, useEffect } from "react";
import axios from "axios";

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
          <div className="w-1/3 p-4">
            <img
              src="https://www.bing.com/images/create/realistic-image2c-dinosaur-reading-a-newspaper/1-66034c67cd80470cb658c4016be56ee1?id=eCEmRPUVkEtfAVEWA1AHFA%3d%3d&view=detailv2&idpp=genimg&thId=OIG4.V1PUPn2c6LSbP5FEKPvB&FORM=GCRIDP&mode=overlay"
              alt="Dinosaur"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/1 p-1">
            <h2 className="text-2xl font-bold mb-4">Dinosaur News</h2>
            <ul>
              {news.slice(0, 3).map((article, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
