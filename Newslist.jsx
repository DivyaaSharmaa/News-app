import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import { CircularProgress, Box } from '@mui/material';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '38ab5b045a6a46919fdaa91818f8aeee';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apiKey=${API_KEY}`
        );
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );

  return (
    <div>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
