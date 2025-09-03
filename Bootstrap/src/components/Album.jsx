import React, { useEffect, useState } from 'react'

export default function Albums() {
  const [articles, setArticles] = useState([]);

  const fetchNews = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=002efedd43a6481caededec969eda1b6")
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }; 

  useEffect(() => { fetchNews() }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {articles.map((news, index) => (
            <div className="col d-flex" key={index}>
              <div className="card h-100 w-100">
                <img src={news.urlToImage || "https://via.placeholder.com/300x200?text=No+Image"}className="card-img-top"alt={news.title}
                  style={{ height: "200px", objectFit: "cover" }}/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text flex-grow-1">{news.description}</p>
                  <a href={news.url}target="_blank"rel="noopener noreferrer"className="btn btn-primary mt-auto">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
