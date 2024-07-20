import React, { useEffect, useState } from 'react';
import './Feed.css';
import { value_converter } from '../../Data'
import { Link } from 'react-router-dom';
import { API_KEY } from '../../Data';
import moment from 'moment/moment';

const Feed = ({ category }) => {
  const [apiData, setApiData] = useState([]);

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data.items);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
 //   console.log(apiData);
  }, [category, url]);

  return (
    <div className="feed">
      {apiData.map((item, index) => (
        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;




{/* <div className="card">
            <img src={thumbnail2} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail3} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail4} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail5} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail6} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail7} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail8} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail1} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail2} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail3} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail4} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail5} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail6} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail7} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail8} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail1} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail2} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail3} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail4} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail5} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail6} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail7} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail8} alt="" />
            <h2>Best channel to learn coding that help you to be a web developer</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div> */}