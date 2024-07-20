import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { value_converter } from '../../Data'
import { API_KEY } from '../../Data';
import moment from 'moment/moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {


    const {videoId} = useParams();


    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    const channelURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`
    const commentURL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
                        
    
    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await fetch(videoURL);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setApiData(data.items[0]);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchVideoData();
    }, [videoId]);


    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                const response = await fetch(channelURL);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setChannelData(data.items[0]);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchChannelData();
    }, [apiData]);


    useEffect(() => {
        const fetchCommentData = async () => {
            try {
                const response = await fetch(commentURL);
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    setCommentData(data.items);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchCommentData();
    }, [apiData]);








    return (
        <div className="play-video">
            <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
            <h3>{apiData?.snippet?.title}</h3>
            <div className="play-video-info">
                <p>{value_converter(apiData?.statistics?.viewCount)} views &bull; {moment(apiData?.snippet?.publishedAt).fromNow()}</p>
                <div>
                    <span><img src={like} alt="like" />{value_converter(apiData?.statistics?.likeCount)}</span>
                    <span><img src={dislike} alt="dislike" />{apiData?.statistics?.dislikeCount}</span>
                    <span><img src={share} alt="share" />Share</span>
                    <span><img src={save} alt="save" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?.snippet?.thumbnails?.medium?.url} alt="publisher" />
                <div>
                    <p>{apiData?.snippet?.channelTitle}</p>
                    <span>{value_converter(channelData?.statistics?.subscriberCount)} subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData?.snippet?.description.slice(0, 200)+"..."}</p>
                <hr />
                <h4>{value_converter(apiData?.statistics?.commentCount)} Comments</h4>
                {/* Render comments here */}
                {commentData.map((result, index)=>{
                    return (
                        <div key={index} className="comment">
                        <img src={result?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="comment" />
                        <div>
                            <h3>{result?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                                <span>{moment(result?.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}</span></h3>
                            <p>{result?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="like" />
                                <span>{value_converter(result?.snippet?.topLevelComment?.snippet?.likeCount)}</span>
                                <img src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                    )
                })}
                {/* Repeat above comment structure for other comments */}
            </div>
        </div>
    );
}

export default PlayVideo;































// import React, { useEffect, useState } from 'react'
// import './PlayVideo.css'
// import video1 from '../../assets/video.mp4'
// import like from '../../assets/like.png'
// import dislike from '../../assets/dislike.png'
// import share from '../../assets/share.png'
// import save from '../../assets/save.png'
// import jack from '../../assets/jack.png'
// import user_profile from '../../assets/user_profile.jpg'
// import { API_KEY } from '../../Data';
// const PlayVideo = ({videoId}) => {


//     const [apiData, setApiData] = useState(null);

//        //fetching video data
//         const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

//         useEffect(() => {
//             const fetchData = async () => {
//               try {
//                 const response = await fetch(URL);
//                 const data = await response.json();
//                 setApiData(data.items);
//               } catch (error) {
//                 console.log("Error fetching data:", error);
//               }
//             };
//             fetchData();
//             console.log(apiData);
//           },[URL]);
    










//   return (
//     <div className="play-video">
//         {/* <video src={video1} controls autoPlay muted></video> */}
//         <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
//         frameborder="0" allow="accelerometer; autoplay; 
//         clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
//         web-share" referrerpolicy="strict-origin-when-cross-origin" 
//         allowfullscreen></iframe>
//         <h3>fhaufho</h3>
//         <div className="play-video-info">
//             <p>1525 Views &bull; 2 day ago</p>
//             <div>
//                 <span><img src={like} alt="" />125</span>
//                 <span><img src={dislike} alt="" />2</span>
//                 <span><img src={share} alt="" />Share</span>
//                 <span><img src={save} alt="" />Save</span>
//             </div>
//         </div>
//         <hr />
//         <div className="publisher">
//             <img src={jack} alt="" />
//             <div>
//                 <p>GreatStack</p>
//                 <span>1M Subscribers</span>
//             </div>
//             <button>Subscribe</button>
//         </div>
//         <div className="vid-description">
//             <p>Channel that makes learning easy</p>
//             <p>Subscribe GreatStack to watch more tutorials on web development</p>
//             <hr />
//             <h4>130 Comments</h4>
//             <div className="comment">
//                 <img src={user_profile} alt="" />
//                 <div>
//                     <h3>Jack Nicholsan <span>1 day ago</span></h3>
//                     <p>A global computer network providing a variety of information and communication </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//                 </div>
//             </div>
//             <div className="comment">
//                 <img src={user_profile} alt="" />
//                 <div>
//                     <h3>Jack Nicholsan <span>1 day ago</span></h3>
//                     <p>A global computer network providing a variety of information and communication </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//                 </div>
//             </div>
//             <div className="comment">
//                 <img src={user_profile} alt="" />
//                 <div>
//                     <h3>Jack Nicholsan <span>1 day ago</span></h3>
//                     <p>A global computer network providing a variety of information and communication </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//                 </div>
//             </div>
//             <div className="comment">
//                 <img src={user_profile} alt="" />
//                 <div>
//                     <h3>Jack Nicholsan <span>1 day ago</span></h3>
//                     <p>A global computer network providing a variety of information and communication </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//                 </div>
//             </div>
//             <div className="comment">
//                 <img src={user_profile} alt="" />
//                 <div>
//                     <h3>Jack Nicholsan <span>1 day ago</span></h3>
//                     <p>A global computer network providing a variety of information and communication </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default PlayVideo