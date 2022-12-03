import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Card } from 'antd';

function Detail() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=e937f314ff954947b479e4061975f904&q=indonesia")
      .then((response) => {
        setData(response.data.articles.source.id);
      })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>INI HALAMAN DETAIL</h1>
      <div className='container-detail'>
        <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
          Inner Card content
        </Card>
      </div>
    </div>
  )
}

export default Detail;
