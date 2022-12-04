import React, { useState, useEffect, FC } from 'react';

import { Button } from 'antd';
import { Card } from 'antd';

import axios from 'axios';

import '../App.css';

const Home: FC = () => {
  const { Meta } = Card;
  const [loading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Array<Object>>([]);

  useEffect(() => {
    getNews();
  }, [])

  const getNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-11-04&sortBy=publishedAt&apiKey=e937f314ff954947b479e4061975f904")
      .then((response) => {
        setData(response.data.articles);
        console.log(data)
      })
      .catch((error) => console.log(error))
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
      <>
        <div className='container-main'>
          <div className='container-card'>
            {
              data.map((value: any) => {
                return (
                  <Card
                    hoverable
                    style={{
                      width: '22rem'
                    }}
                    cover={<img alt="example" src={value.urlToImage} />}
                  >
                    <Meta title={value.title} description={value.description} />
                    <br></br>
                    <Button type='primary' className='detail-url' href={value.url}>News Detail...</Button>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
}

export default Home;
