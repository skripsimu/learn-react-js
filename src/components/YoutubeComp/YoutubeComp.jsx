import React from "react";
import "./YoutubeComp.css";

const Youtube = (props) => {
    return (
        <div className='youtube-wrapper'>
            <div className="img-thumb">
                <img src="http://i3.ytimg.com/vi/ue5Jw0zW-Tk/hqdefault.jpg" alt=""></img>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

Youtube.defaultProps = {
    time: '00.00',
    title: 'Senam dengan title default',
    desc: '0x ditonton. 1 hari yang lalu'
}

export default Youtube;