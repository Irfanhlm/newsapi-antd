import React, { useState, useEffect, FC } from 'react';
import { Cards } from '../components/Cards'
import axios from 'axios';
import '../App.css';

const Home: FC = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Array<Object>>([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e937f314ff954947b479e4061975f904")
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => console.log('error', error))
      .finally(() => setLoading(false));
  }

  if (loading) {
    return (
      <div className='loader'>
        <h2>Loading...</h2>
      </div>
    )
  } else {
    return (
      <div className='container-main'>
        <div className='container-card'>
          {data.map((value: any) => (
            <Cards
              key={value.id}
              urlToImage={value.urlToImage}
              title={value.title}
              description={value.description}
              url={value.url}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Home;
