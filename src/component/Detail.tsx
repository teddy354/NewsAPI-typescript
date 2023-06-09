import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Article } from '../utils/type'


const { Meta } = Card;
interface IDetail {
  utils: string;
}

const App = ( props:IDetail ) => {
  const [articles, setArticles] = useState<Article[]>([]);

    const apiUrl = "https://newsapi.org/v2/top-headlines";
    const apiKey = process.env.REACT_APP_API_KEY;
    const source = "bbc-news";

  useEffect(() => {
    fetch(`${apiUrl}?sources=${source}&apiKey=${apiKey}`
    //   `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3b19ecc6f7a44cc1afc9ab92f4188ba8`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
    }, []);

    
  console.log(articles[0]?.publishedAt)
  // useEffect(() => {
  //   const filteredArr = articles.filter((item) => {
  //     if (props.utils === "") {
  //       return item
  //   } else if (item.title.toLowerCase().includes(props.utils.toLowerCase())) {
  //     return item
  //   }
  //   })
  //   // item.title.toLowerCase().indexOf(props.utils) !== -1)
  //   setArticles(filteredArr)
  //   console.log(props.utils)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.utils])

  return (
    <>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',paddingTop:'5rem', paddingBottom:'5rem' }}>
      {articles?.filter((item) => {
        if (props.utils === "") {
          return item
        } else if ( item.title.toLowerCase().includes(props.utils.toLowerCase())) {
          return item
        } else if ( item.author.toLowerCase().includes(props.utils.toLowerCase())) {
          return item
        } else if ( item.publishedAt.toLowerCase().includes(props.utils.toLowerCase())) {
           return item
        }
      }).map((article) => (
        <Link
        style={{textDecoration:"none"}}
        to={article.url}>
        <Card
          key={article.title}
          hoverable
          style={{ width: 300, margin: '16px' }}
          cover={<img alt={article.title} src={article.urlToImage} />}
          >
          <Meta title={article.title} description={article.description} />
          <p style={{ marginTop: '16px' }}>Author: {article.author}</p>
          <p>Published At: {new Date(article.publishedAt).toLocaleString()}</p>
          <p>{article.content}</p>
        </Card>
        </Link>
      ))}
    </div>
    </>
  );
};

export default App;