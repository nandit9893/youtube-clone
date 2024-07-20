import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { value_converter } from '../../Data'
import { API_KEY } from '../../Data';
import { Link } from 'react-router-dom'



const Recommended = ({categoryId}) => {


    const [apiData, setApiData] = useState([]);

    const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&videoCategoryId=${categoryId}&key=${API_KEY}`


    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setApiData(data.items);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchVideoData();
    }, []);





  return (
    <div className="recommended">
        {apiData.map((result, index)=>{
            return (
                <Link to={`/video/${result?.snippet?.categoryId}/${result?.id}`} className="side-video-list" key={index}>
                <img src={result?.snippet?.thumbnails?.medium?.url} alt="" />
                <div className="vid-info">
                    <h4>{result?.snippet?.title}</h4>
                    <p>{result?.snippet?.channelTitle}</p>
                    <p>{value_converter(result?.statistics?.viewCount)} &bull; views</p>
                </div>
            </Link>
            )
        })}
    </div>
  )
}

export default Recommended