import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
const Sidebar = ({sideBar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sideBar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`sidelinks ${category===0?"active":""}`} onClick={()=>setCategory(0)}> 
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`sidelinks ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" /><p>Gamming</p>
            </div>
            <div className={`sidelinks ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className={`sidelinks ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className={`sidelinks ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className={`sidelinks ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p>Techonology</p>
            </div>
            <div className={`sidelinks ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`sidelinks ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className={`sidelinks ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
        </div>
        <div className="subsribed-list">
            <h3>Subscribed</h3>
            <div className="sidelinks">
                <img src={jack} alt="" /><p>PewDiePie</p>
            </div>
            <div className="sidelinks">
                <img src={simon} alt="" /><p>MrBeast</p>
            </div>
            <div className="sidelinks">
                <img src={tom} alt="" /><p>Justi Bieber</p>
            </div>
            <div className="sidelinks">
                <img src={megan} alt="" /><p>5-inutes Crafts</p>
            </div>
            <div className="sidelinks">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar