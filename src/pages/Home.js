import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Card } from 'antd';
import { Button } from 'antd';

function Home() {

  const { Meta } = Card;
  const [data, setData] = useState([])
  const getNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-11-04&sortBy=publishedAt&apiKey=e937f314ff954947b479e4061975f904")
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => console.log(error));
  }


  return (
    <>
      <div className='btn'>
        <button className='btn-btn' onClick={getNews}>Fecth News</button>
      </div>

      <div className='container-main'>
        <div className='container-card'>
          {
            data.map((value) => {
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

export default Home;
